import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingHandlerService } from '../../services/loading-handler/loading-handler.service';

@Component({
  selector: 'app-loading',
  template: `
    <dx-load-panel
      shadingColor="rgba(0,0,0,0.4)"
      [visible]="isLoading$ | async"
      [message]="'Loading'"
      [showIndicator]="true"
      [showPane]="true"
      [shading]="true"
      [closeOnOutsideClick]="false"
    ></dx-load-panel>
    `
})
export class LoadingComponent implements OnInit {
  isLoading$: Observable<boolean> = this.loadingHandlerService.isLoading$;

  constructor( private loadingHandlerService: LoadingHandlerService) { }

  ngOnInit(): void {
    this.isLoading$ = this.loadingHandlerService.isLoading$;
  }

}
