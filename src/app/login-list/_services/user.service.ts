import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { User } from "../_models";
import { BehaviorSubject } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({ providedIn: "root" })
export class UserService {
  uri = "http://localhost:8080/api/customers";
  authloading = new BehaviorSubject<boolean>(false);
  authDidFail = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) {}

  StoreData(data: User) {
    console.log(data);
    this.http
      .post(`${this.uri}`, data, httpOptions)
      .subscribe(() => console.log("Done"));
  }
}
