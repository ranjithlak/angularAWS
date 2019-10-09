import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { menus } from './menu-element';
import { User } from '../../login-list/_models/user';
import { Subscription } from 'rxjs/Subscription';
import { AuthenticationService, UserService } from '../../login-list/_services';

@Component({
  selector: 'cdk-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  public UserDetails: any;
   
    users: User[] = [];
    currentUser: User;
    @Input() iconOnly:boolean = false;
    public menus = menus;
    
    constructor(
       private authenticationService: AuthenticationService,
       
    ) {
      
     }

    ngOnInit() {
      
    }
   
    
    }
   


