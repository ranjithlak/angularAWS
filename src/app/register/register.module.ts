import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule, Routes } from '@angular/router'; 
import { MatToolbarModule, MatButtonModule, MatIconModule, MatTabsModule, MatSidenavModule, MatButtonToggleModule, MatInputModule, MatListModule } from '@angular/material';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignupComponent } from './signup/signup.component';





const appRoutes: Routes = [
   
    { path:'signup',component:SignupComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    MatToolbarModule,
    MatCardModule,
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatToolbarModule,
    FormsModule,
    MatSidenavModule,
    MatIconModule,
    ReactiveFormsModule,
    MatListModule,
    MatButtonModule,
        MatIconModule,
        MatTabsModule,
        DragDropModule,
        MatSidenavModule,
        PerfectScrollbarModule,
        MatCardModule,
       
      
       
        
    
  ],
  declarations: [RegisterComponent, SignupComponent,]
})
export class RegisterModule {}