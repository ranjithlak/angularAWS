import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { RouterModule, Routes } from '@angular/router';
import { ProfileWizerdModule } from '../profile-wizerd/profile-wizerd.module';


export const appRoutes: Routes = [
  { path: '', component: ProfileComponent },
];


@NgModule({
  imports: [
    CommonModule,
    
    RouterModule.forChild(appRoutes),
    FlexLayoutModule,
    MatCardModule,
    CdkTableModule,
    ProfileWizerdModule
  ],
  declarations: [ProfileComponent],
  exports:[],
  
})
export class ProfileModule { }
