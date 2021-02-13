import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardSearchShellComponent } from './core/components/dashboard-search-shell/dashboard-search-shell.component';
import { DashboardDreamDetailsComponent } from './core/components/dashboard-dream-details/dashboard-dream-details.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardSearchShellComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
