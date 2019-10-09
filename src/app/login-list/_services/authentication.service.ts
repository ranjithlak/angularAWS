import { Injectable, APP_BOOTSTRAP_LISTENER } from "@angular/core";

import { BehaviorSubject, Observable, Subject, Observer } from "rxjs";
import { map, first } from "rxjs/operators";
import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
  AuthenticationDetails,
  CognitoUserSession
} from "amazon-cognito-identity-js";
import { User, User1 } from "../_models";
import { Router } from "@angular/router";
import { EmailValidator } from "@angular/forms";
import { Http, Headers } from "@angular/http";
//import { resolve } from 'path';
import * as AmazonCognitoIdentity from "amazon-cognito-identity-js";

const POOL_DATA = {
  UserPoolId: "us-east-2_w8urhExDq",
  ClientId: "6p9o7m3fqbtsvda0v8j59b0586",
  IdentityPoolId: "us-east-2:273c6668-771b-4e8e-8df3-be203f340bc2"
};
const userPool = new CognitoUserPool(POOL_DATA);

// var authenticatedUser=new User();

@Injectable({ providedIn: "root" })
export class AuthenticationService {
  public entries: any;
  getcurrentUser: any;
  authenticatedUser = null;
  authloading = new BehaviorSubject<boolean>(false);
  authDidFail = new BehaviorSubject<boolean>(false);
  authStatusChanged = new Subject<boolean>();
  registeredUser: CognitoUser;
  static cognitoUser;

  private _userDetails: any = {};
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  user: any;
  currentUserPoolUser: any;
  _storage: any;
  userPool: any;
  httpClient: any;

  constructor(private router: Router, private http: Http) {}
  signUp(data, picture: string): void {
    this.authloading.next(true);
    const user: User1 = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      username: data.username,
      password: data.password,
      picture: picture
    };
    console.log(user);
    const attrList: CognitoUserAttribute[] = [];
    const emailAttribute = {
      Name: "email",
      Value: user.email
    };
    const pictureAttribute = {
      Name: "picture",
      Value: user.picture
    };
    const customAttribute = {
      Name: "custom:firstName",
      Value: user.firstName
    };
    const customAttribute1 = {
      Name: "custom:lastName",
      Value: user.lastName
    };

    const attributeEmail = new CognitoUserAttribute(emailAttribute);
    const pictureAttribute3 = new CognitoUserAttribute(pictureAttribute);
    const Customlist1 = new CognitoUserAttribute(customAttribute);
    const Customlist2 = new CognitoUserAttribute(customAttribute1);

    attrList.push(attributeEmail, Customlist1, Customlist2, pictureAttribute3);

    userPool.signUp(
      user.username,
      user.password,
      attrList,
      null,
      (err, result) => {
        if (err) {
          this.authDidFail.next(true);
          this.authloading.next(false);

          return;
        }
        this.authDidFail.next(false);
        this.authloading.next(false);
        this.registeredUser = result.user;
      }
    );
    return;
  }

  confirmUser(username: string, code: string) {
    this.authloading.next(true);
    const userData = {
      Username: username,
      Pool: userPool
    };
    const cognitoUser = new CognitoUser(userData);
    console.log(userData);
    cognitoUser.confirmRegistration(code, true, (err, result) => {
      if (err) {
        this.authDidFail.next(true);
        this.authloading.next(false);
        console.log(err);

        return;
      }
      this.authDidFail.next(false);
      this.authloading.next(false);
      this.router.navigate(["/login-list/login"]);
    });
  }

  signIn(username: string, password: string): void {
    this.authloading.next(true);
    const authData = {
      Username: username,
      Password: password
    };
    const authDetails = new AuthenticationDetails(authData);

    const userData = {
      Username: username,
      Pool: userPool
    };
    AuthenticationService.cognitoUser = new CognitoUser(userData);
    const that = this;

    AuthenticationService.cognitoUser.authenticateUser(authDetails, {
      onSuccess(result: CognitoUserSession) {
        that.authStatusChanged.next(true);
        that.authDidFail.next(false);
        that.authloading.next(false);
        that.router.navigate(["auth/dashboard"]);
        that.entries = result;
        console.log("Result", result);
      },
      onFailure(err) {
        that.authDidFail.next(true);
        that.authloading.next(false);
        that.router.navigate(["login-list/login"]);
        console.log(err);
      }
    });
  }

  getAuthenticatedUser() {
    return userPool.getCurrentUser();
  }
  logout() {
    //AuthenticationService.cognitoUser.signOut();
    this.getAuthenticatedUser().signOut();
    this.router.navigate(["login-list/login"]);
  }

  isAuthenticated(): Observable<boolean> {
    const user = this.getAuthenticatedUser();
    const obs = Observable.create(observer => {
      if (!user) {
        observer.next(false);
      } else {
        user.getSession((err, session) => {
          if (err) {
            observer.next(false);
          } else {
            if (session.isValid()) {
              observer.next(true);
            } else {
              observer.next(false);
            }
          }
        });
      }
      observer.complete();
    });
    console.log(obs);
    return obs;
  }

  getCognitoUsername() {
    var userPool = new AmazonCognitoIdentity.CognitoUserPool(POOL_DATA);
    var cognitoUser = userPool.getCurrentUser();

    return cognitoUser.getUsername();
  }

  getCognitoFirstName() {
    const cognitoUser = this.getAuthenticatedUser();
    let firstname;
    cognitoUser.getSession((err, data) => {
      if (err) {
        console.log(err);
      } else {
        const cognitoUserSession = data;

        firstname = cognitoUserSession.getIdToken().payload["custom:firstName"];
      }
    });

    return firstname;
  }
  getCognitoLastName() {
    const cognitoUser = this.getAuthenticatedUser();
    let lastname;
    cognitoUser.getSession((err, data) => {
      if (err) {
        console.log(err);
      } else {
        const cognitoUserSession = data;

        lastname = cognitoUserSession.getIdToken().payload["custom:lastName"];
      }
    });

    return lastname;
  }
  getCognitoEmail() {
    const cognitoUser = this.getAuthenticatedUser();
    let email;
    cognitoUser.getSession((err, data) => {
      if (err) {
        console.log(err);
      } else {
        const cognitoUserSession = data;

        email = cognitoUserSession.getIdToken().payload["email"];
      }
    });

    return email;
  }
  imageurl() {
    const cognitoUser = this.getAuthenticatedUser();
    let imageurl;
    cognitoUser.getSession((err, data) => {
      if (err) {
        console.log(err);
      } else {
        const cognitoUserSession = data;

        imageurl = cognitoUserSession.getIdToken().payload["picture"];
      }
    });

    return imageurl;
  }
}
