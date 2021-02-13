import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  DxButtonModule,
  DxListModule,
  DxNavBarModule,
  DxTemplateModule,
  DxCheckBoxModule,
  DxSelectBoxModule,
  DxMenuModule,
  DxFormModule,
  DxNumberBoxModule,
  DxPopupModule,
  DxToolbarModule,
  DxTreeListModule,
  DxLoadIndicatorModule,
  DxSlideOutModule,
  DxSwitchModule,
  DxDropDownBoxModule,
  DxDataGridModule,
  DxTextBoxModule,
  DxRangeSliderModule,
  DxLookupModule,
  DxTreeViewModule,
  DxDateBoxModule,
  DxRadioGroupModule,
  DxHtmlEditorModule,
  DxTextAreaModule,
  DxDrawerModule,
  DxDropDownButtonModule,
  DxChartModule,
  DxSchedulerModule,
  DxLoadPanelModule,
  DxProgressBarModule,
  DxFileUploaderModule,
  DxSpeedDialActionModule,
  DxPivotGridModule,
  DxTabsModule,
  DxTabPanelModule,
  DxValidatorModule,
  DxValidationSummaryModule,
  DxTagBoxModule,
  DxMapModule,
  DxValidationGroupModule,
  DxAutocompleteModule
} from 'devextreme-angular';
import { DashboardSearchFormComponent } from './core/components/dashboard-search-form/dashboard-search-form.component';
import { DashboardSearchListComponent } from './core/components/dashboard-search-list/dashboard-search-list.component';
import { DashboardSearchShellComponent } from './core/components/dashboard-search-shell/dashboard-search-shell.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './core/components/loading/loading.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardDreamDetailsComponent } from './core/components/dashboard-dream-details/dashboard-dream-details.component';

const DX_SHARED_MODULES = [
  DxButtonModule,
  DxListModule,
  DxNavBarModule,
  DxTemplateModule,
  DxCheckBoxModule,
  DxSelectBoxModule,
  DxMenuModule,
  DxFormModule,
  DxNumberBoxModule,
  DxPopupModule,
  DxToolbarModule,
  DxTreeListModule,
  DxLoadIndicatorModule,
  DxSlideOutModule,
  DxSwitchModule,
  DxDropDownBoxModule,
  DxDataGridModule,
  DxTextBoxModule,
  DxRangeSliderModule,
  DxLookupModule,
  DxTreeViewModule,
  DxDateBoxModule,
  DxRadioGroupModule,
  DxHtmlEditorModule,
  DxTextAreaModule,
  DxDrawerModule,
  DxDropDownButtonModule,
  DxChartModule,
  DxSchedulerModule,
  DxLoadPanelModule,
  DxProgressBarModule,
  DxFileUploaderModule,
  DxSpeedDialActionModule,
  DxPivotGridModule,
  DxTabsModule,
  DxTabPanelModule,
  DxValidatorModule,
  DxValidationSummaryModule,
  DxTagBoxModule,
  DxMapModule,
  DxValidationGroupModule,
  DxAutocompleteModule
];


@NgModule({
  declarations: [
    AppComponent,
    DashboardSearchFormComponent,
    DashboardSearchListComponent,
    DashboardSearchShellComponent,
    NavbarComponent,
    LoadingComponent,
    DashboardDreamDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DX_SHARED_MODULES,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
