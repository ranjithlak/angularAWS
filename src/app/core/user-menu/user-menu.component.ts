import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../login-list/_services/authentication.service';
import { User } from '../../login-list/_models/user';

@Component({
  selector: 'cdk-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
	isOpen: boolean = false;

	@Input()currentUser: User;
  	

  
  	@HostListener('document:click', ['$event', '$event.target'])
  	onClick(event: MouseEvent, targetElement: HTMLElement) {
    	if (!targetElement) {
     		return;
    	}

    	const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    	if (!clickedInside) {
      		this.isOpen = false;
    	}
  	}
  	
    
	  constructor(private elementRef: ElementRef,
				  private router: Router,
				  private authService: AuthenticationService,
		) { 
			
		}


  	ngOnInit() {
	  }
    logout() {
			this.authService.logout();
		} 

	

}
