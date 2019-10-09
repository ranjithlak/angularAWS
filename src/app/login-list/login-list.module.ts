import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpHeaders, HttpClient,  } from '@angular/common/http';
import { LoginListComponent } from './login-list.component';



import { CommonModule } from '@angular/common';



import { AlertComponent } from './_components/alert.component';



import { Routes, RouterModule } from '@angular/router';

import { HttpModule } from '@angular/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CarouselDirective } from './welcome/carousel.directive';
import { WelcomeComponent } from './welcome/welcome.component';
import { FlexLayoutModule } from '@angular/flex-layout';
// tslint:disable-next-line:max-line-length
import { MatButtonModule, MatButtonToggleModule, MatInputModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatTabsModule, MatCardModule } from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import {MatFormFieldModule} from '@angular/material/form-field';


 const appRoutes: Routes = [
    { path: '', component: LoginListComponent, children: [

    { path: 'welcome', component: WelcomeComponent},

    { path: 'login', component: LoginComponent, },

    { path: 'register', component: RegisterComponent }
  

  
   ]
}];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        HttpModule,
        CommonModule,
        RouterModule.forChild(appRoutes),
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatInputModule,
        MatToolbarModule,
       MatSidenavModule,
        MatIconModule,
       MatListModule,
        MatButtonModule,
            MatIconModule,
            MatTabsModule,
            DragDropModule,
            MatSidenavModule,
            PerfectScrollbarModule,
            MatCardModule,
            MatFormFieldModule
          ],
    declarations: [
        LoginListComponent,
        AlertComponent,
        LoginComponent,
        RegisterComponent, WelcomeComponent,
        CarouselDirective
    ],
    exports: [
        AlertComponent,
        LoginComponent,
        RegisterComponent
    ],
    //  providers: [
    //      { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    //      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    //      // provider used to create fake backend
    //      fakeBackendProvider
    //  ]
} )

export class LoginListModule  {

}
