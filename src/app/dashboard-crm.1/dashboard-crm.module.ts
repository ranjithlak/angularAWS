import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';

import {CdkTableModule} from '@angular/cdk/table';
import { DashboardCrmComponent } from './dashboard-crm.component';
import { DashboardWidgetModule } from '../dashboard-widget.1/dashboard-widget.module';

export const appRoutes: Routes = [
    { path: '', component: DashboardCrmComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    FlexLayoutModule,
    MatCardModule,
    CdkTableModule,
    DashboardWidgetModule
  ],
  declarations: [DashboardCrmComponent],
  exports: [ ]
})
export class DashboardCrmModule { }
