import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-dashboard-search-list',
  templateUrl: './dashboard-search-list.component.html',
  styleUrls: ['./dashboard-search-list.component.css']
})
export class DashboardSearchListComponent {
  @ViewChild(DxDataGridComponent) gridRef: DxDataGridComponent;

  @Input() dataSource: any = [];
  @Output() OpenItem: EventEmitter<number> = new EventEmitter<number>();

  onCellClicked = (e): void => {
    if (!e.column) { return; }
    if (e.column?.caption === 'Details') {
      this.OpenItem.emit(this.gridRef.focusedRowKey);
      return;
    }
  }
}
