import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';

import {  UserService, AuthenticationService, AlertService } from '../_services';
import { User } from '../_models/user';
import { environment } from '../../../environments/environment';



@Component({templateUrl: 'register.component.html',
            styleUrls: ['./register.component.scss'] })
    
export class RegisterComponent implements OnInit {
    confirmUser = false;
    didFail = false;
    @ViewChild('usrForm') form: NgForm;
    registerForm: FormGroup;
    loading = false;
    submitted = false;
    constructor(
      private formBuilder:  FormBuilder,
      private authService: AuthenticationService,
      private userService:UserService
    ) {
      // redirect to home if already logged in
     
    }
  // ngOnInit() {
    //     this.registerForm = this.formBuilder.group({
    //         firstName: ['', Validators.required],
    //         lastName: ['', Validators.required],
    //         // eMail :['',Validators.required],
    //         username: ['', Validators.required],
    //         password: ['', [Validators.required, Validators.minLength(6)]]
    //     });
    // }
   ngOnInit() {
      
      this.authService.authloading.subscribe(
        (loading: boolean) => 
        { 
          this.loading = loading;
          
          
        }
      );
      this.authService.authDidFail.subscribe(
        (didFail: boolean) =>{
           this.didFail = didFail;
           
        }
      );
    }
   // convenience getter for easy access to form fields
    get f() {
      return this.registerForm.controls;
    }
    onSubmit() {
      const data:User = {
       firstName : this.form.value.firstName,
       lastName :this.form.value.lastName,
       email : this.form.value.email,
     
       username : this.form.value.username,
     
       password : this.form.value.password,
      };
       const picture= environment.picture;
      
      
      this.authService.signUp(data,picture);
      this.userService. StoreData(data);
      
    }
      
    onDoConfirm() {
      this.confirmUser = true;
    }
  
    onConfirm(formValue: { username: string, validationCode: string }) {
      this.authService.confirmUser(formValue.username, formValue.validationCode);
    }
  }  