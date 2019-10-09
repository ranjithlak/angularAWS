import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SettingComponent } from './setting.component';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MatListModule, MatButtonModule, MatInputModule, MatIconModule, MatChipsModule, MatProgressBarModule, MatSliderModule, MatTabsModule, MatSidenavModule, MatFormFieldModule, MatToolbarModule } from '@angular/material';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';


export const appRoutes: Routes = [
    { path: '', component: SettingComponent }, 
 ];
@NgModule({
  imports: [
    HttpModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(appRoutes),
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule,
    MatGridListModule,
    PerfectScrollbarModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatTabsModule,
    MatSliderModule,
    MatProgressBarModule,
    MatExpansionModule
  ],
  declarations: [
    SettingComponent
  ],
  exports:[
    SettingComponent  
  ]
})
export class SettingModule { }