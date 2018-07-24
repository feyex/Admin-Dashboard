import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{ ChartComponent } from './chart/chart.component';

import{ DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', component:DashboardComponent },
  { path: 'Chart', component:ChartComponent }
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes) 
  ],
  exports: [
     RouterModule 
    ]
  })
export class AppRoutingModule { }
