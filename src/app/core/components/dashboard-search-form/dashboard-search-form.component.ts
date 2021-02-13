import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard-search-form',
  templateUrl: './dashboard-search-form.component.html',
  styleUrls: ['./dashboard-search-form.component.css']
})
export class DashboardSearchFormComponent implements OnInit {
  @Output() OnFilter: EventEmitter<any> = new EventEmitter<any>();
  @Output() OnResetSearch: EventEmitter<any> = new EventEmitter<any>();

  @Input() DreamStatus: any = [];
  @Input() PaymentTypes: any = [];

  DashBoardFilterForm: FormGroup;
  StatusList: string[];
  PaymentTypeList: string[];

  ngOnInit(): void {
    this.renderForm();
    console.log(this.DreamStatus);
  }

  renderForm = (): void => {
    this.DashBoardFilterForm = this.fb.group({
      dreamPaymentTypeList: [],
      dreamStatusList: [],
      dreamText: [],
      dreamTitle: []
    });
    const {value: {dreamStatusList, dreamPaymentTypeList}} = this.DashBoardFilterForm;
    this.StatusList = dreamStatusList;
    this.PaymentTypeList = dreamPaymentTypeList;
  }

  handleReset = () => {
    this.renderForm();
    this.OnResetSearch.emit();
  }

  constructor( private fb: FormBuilder ) { }
}
