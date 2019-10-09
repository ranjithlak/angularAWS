import { Component, OnInit } from "@angular/core";
import { User } from "../login-list/_models/user";
import { AuthenticationService } from "../login-list/_services/authentication.service";

import { S3Service } from "../login-list/_services/s3.service";
import {  CognitoUserSession } from "amazon-cognito-identity-js";
import { User2 } from "../login-list/_models/user2";
import * as AmazonCognitoIdentity from "amazon-cognito-identity-js";

declare var AWS: any;

@Component({
  selector: "app-setting",
  templateUrl: "./setting.component.html",
  styleUrls: ["./setting.component.scss"]
})
export class SettingComponent implements OnInit {
  selectedFiles: FileList;
  panelOpenState = false;
  constructor(
    private authenticationService: AuthenticationService,
    private s3: S3Service
  ) {}

  ngOnInit() {}

  upload() {
    const file = this.selectedFiles.item(0);
    const parms=this.s3.uploadfile(file);
    const cognitouser=this.authenticationService.getAuthenticatedUser();

      parms.then(function(resolveOutput){
      console.log("URL "+resolveOutput);
      const URL= resolveOutput;
     
     //console.log(user.picture);
     //console.log(user);
     const attrList=[];
     const pictureAttribute ={
      Name:'File',
      Value:String(URL)
    }; 

    attrList.push(new AmazonCognitoIdentity.CognitoUserAttribute(pictureAttribute));
    
    console.log(attrList);
    if (cognitouser != null) {
   cognitouser.getSession(function (err, session) {
          if (err) {
            console.log(err); 
            return;
          }
      });

    cognitouser.updateAttributes(attrList,function (err,result) {
        if (err) {
           console.log(err);   
          return;
        }
        
        console.log('user update result: ' + result); 
        
      });
  }
    },function(rejectOutput)
    {
      console.log(rejectOutput);
    });
    
   // this.s3.getupdate(URL);
     
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
}
