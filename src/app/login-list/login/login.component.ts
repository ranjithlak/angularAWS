import {Component,OnInit,ViewChild} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService, AlertService } from '../_services';


@Component({templateUrl: 'login.component.html',
styleUrls: ['./login.component.scss'] })
export class LoginComponent implements OnInit {
    @ViewChild('usrForm') form: NgForm;
  didFail = false;
  loading = false;
  constructor(private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.authService.authloading.subscribe(
      (loading: boolean) => this.loading = loading
    );
    this.authService.authDidFail.subscribe(
      (didFail: boolean) => this.didFail = didFail
    );
  }

  onSubmit() {
    const usrName = this.form.value.username;
    const password = this.form.value.password;
    this.authService.signIn(usrName, password);
  }
}