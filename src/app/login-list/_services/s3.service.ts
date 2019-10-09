import { Injectable, APP_BOOTSTRAP_LISTENER } from "@angular/core";
import * as AWS from "aws-sdk";
import * as S3 from "aws-sdk/clients/s3";

import { AuthenticationService } from "./authentication.service";
import { addListener } from "cluster";

import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import { User2 } from "../_models/user2";

@Injectable({ providedIn: "root" })
export class S3Service {
  // private s3: AWS.S3;
  constructor(private authService: AuthenticationService) {}

  uploadfile(file) {
    const bucket = new S3({
      accessKeyId: "AKIA2MLSE7NLZRY3CAMW",
      secretAccessKey: "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",
      region: "us-east-2"
    });
    const params = {
      Bucket: "advocate-profile1",
      Key: "Ranjith" + file.name,
      Body: file
    };

    bucket.upload(params, function(err, data) {
      if (err) {
        console.log("There was an error uploading your file: ", err);
        return false;
      }

      console.log("Successfully uploaded file.", data);
      return true;
    });
  }

  
  getupdate(picture): void {
    const cognitouser = this.authService.getAuthenticatedUser();
    const user: User2 = {
      picture: picture
    };
    console.log(user.picture);
    //console.log(user);
    const attrList = [];
    const pictureAttribute = {
      Name: "File",
      Value: user.picture
    };

    attrList.push(new CognitoUserAttribute(pictureAttribute));

    console.log(attrList);
    if (cognitouser != null) {
      cognitouser.getSession(function(err, session) {
        if (err) {
          console.log(err);
          return;
        }
      });

      cognitouser.updateAttributes(attrList, function(err, result) {
        if (err) {
          console.log(err);
          return;
        }

        console.log("user update result: " + result);
      });
    }
  }
}
