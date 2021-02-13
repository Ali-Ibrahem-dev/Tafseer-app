import { Component, OnDestroy, ViewChild, OnInit } from '@angular/core';
import { SubSink } from 'subsink';
import * as moment from 'moment';

import { DashboardDataService } from '../../services/dashboard-data/dashboard-data.service';
import { ToasterService } from '../../services/toaster/toaster.service';
import { ErrorHandlerService } from '../../services/error-handler/error-handler.service';
import { LoadingHandlerService } from '../../services/loading-handler/loading-handler.service';
import { DashboardSearchListComponent } from '../dashboard-search-list/dashboard-search-list.component';
import { DashboardDreamDetailsComponent } from '../dashboard-dream-details/dashboard-dream-details.component';

@Component({
  selector: 'app-dashboard-search-shell',
  templateUrl: './dashboard-search-shell.component.html',
  styleUrls: ['./dashboard-search-shell.component.css']
})
export class DashboardSearchShellComponent implements OnInit, OnDestroy {
  @ViewChild('listRef') listRef: DashboardSearchListComponent;
  @ViewChild('detailsform') detailsform: DashboardDreamDetailsComponent;

  private subs = new SubSink();
  showdetails = false;
  DreamStatus = [];
  PaymentTypes = [];

  ngOnInit(): void {
    this.getMultiselectDataSources();
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  getMultiselectDataSources = async () => {
    this.showLoading();
    try {
      await this.getDreamStatus();
      await this.getPaymentTypes();
    } catch (error) {
      console.log(error);
    }
    this.hideLoading();
  }

  OnSubmit = (e) => {
    const query = this.serialize(e);
    console.log(query);
    this.showLoading();
    this.subs.sink = this.dataService.getSearchedDreams(e).subscribe(res => {
      if (!res.length) {
        // this.toasterService.showSuccessToast('No Result');
        this.resetGrid();
        this.disableGrid();
      } else {
        this.initlizeGrid(res);
        this.enableGrid();
      }
      this.hideLoading();
    }, err => {
      this.hideLoading();
      this.handleError(err);
    });
  }

  OnReset = () => {
    this.resetGrid();
    this.disableGrid();
  }

  OpenItem = (id) => {
    this.showLoading();
    this.getDreamInfoById(id);
    this.hideLoading();
  }

  getDreamInfoById = (id: number): void => {
    this.showLoading();
    this.subs.sink = this.dataService.getDreamInfoById(id).subscribe(res => {
      this.initilizeDreamInfo(res);
      this.showDetails();
      this.hideLoading();
    }, err => {
      this.hideLoading();
      this.handleError(err);
    });
  }

  getDreamStatus = (): void => {
    this.showLoading();
    this.subs.sink = this.dataService.getDreamStatus().subscribe(res => {
      this.DreamStatus =  this.prepareDataSources(res);
      this.hideLoading();
    }, err => {
      this.hideLoading();
      this.handleError(err);
    });
  }

  getPaymentTypes = (): void => {
    this.showLoading();
    this.subs.sink = this.dataService.getPaymentTypes().subscribe(res => {
      this.PaymentTypes =  this.prepareDataSources(res);
      this.hideLoading();
    }, err => {
      this.hideLoading();
      this.handleError(err);
    });
  }

  replyOnDream = (e) => {
    console.log(e);
    this.showLoading();
    this.subs.sink = this.dataService.replyOnDream(e).subscribe(res => {
      // this.toasterService.showSuccessToast();
      this.hideLoading();
    }, err => {
      this.hideLoading();
      this.handleError(err);
    });
  }

  prepareDataSources = (arr: string[]) => {
    const newArr = [];
    arr.forEach((el, i) => {
      newArr.push({Name: el, id: i});
      });
    return newArr;
  }

  serialize = (data) => {
    if (typeof (data) === 'string') { return data; }
    const query = [];
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        if (this.isDateKye(data[key])) {
          query.push(encodeURIComponent(key) + '=' + encodeURIComponent(this.formatDateKye(data[key])));
        } else {
          query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
        }
      }
    }
    return query.join('&');
  }

  isDateKye = (date: any): boolean => date instanceof Date ? true : false;
  formatDateKye = (date: any): string => moment(date).format('YYYY-MM-DD');
  formatDateTimeKye = (date: any): string => moment(date).format();

  backToSearchPage = () => {
    this.resetDreamInfo();
    this.hideDetails();
  }

  disableGrid = (): boolean => this.listRef.gridRef.disabled = true;
  enableGrid = (): boolean => this.listRef.gridRef.disabled = false;

  initlizeGrid = (data: any): any => this.listRef.dataSource = data;
  initilizeDreamInfo = (data: any): any => this.detailsform.patchForm(data);

  resetDreamInfo = (): any => this.detailsform.patchForm([]);
  resetGrid = (): any => this.listRef.dataSource = [];

  showLoading = () => this.loadingHandlerService.showLoading();
  hideLoading = () => this.loadingHandlerService.hideLoading();

  showDetails = () => this.showdetails = true;
  hideDetails = () => this.showdetails = false;

  handleError = (error: any) => this.errorHandlerService.handleError(error);

  constructor(
    private dataService: DashboardDataService,
    private toasterService: ToasterService,
    private errorHandlerService: ErrorHandlerService,
    private loadingHandlerService: LoadingHandlerService
    ) { }

}
