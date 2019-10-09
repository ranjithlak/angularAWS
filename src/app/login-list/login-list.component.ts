import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './_models/user';
import { AuthenticationService } from './_services/authentication.service';
@Component(
    { selector: 'login-list', 
    templateUrl: 'login-list.component.html',
    styleUrls: ['login-list.component.css']
    })

export class LoginListComponent implements OnInit{
       isAuthenticated = false;
    
        constructor(
           private authService:AuthenticationService,
           private router:Router
        ) {
          
        }
       ngOnInit(){
        
       }
        
      }