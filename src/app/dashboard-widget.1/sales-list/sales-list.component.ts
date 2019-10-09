import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cdk-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.scss']
})
export class SalesListComponent implements OnInit {

  public showLoader:boolean = false;
  public sales = [
      {
        companyIcon:"./assets/user-image1.jpg",
        companyName:'Ranjith',
        star:'20',
        fork: false,
        watch: false,
      },
      {
        companyIcon:"./assets/user-image.jpg",
        companyName:'kumar',
        star:'2k',
        fork: false,
        watch: false,
      },
      {
        companyIcon:"./assets/user-image1.jpg",
        companyName:'prabakran',
        star:false,
        fork: false,
        watch: 22,
      },
      {
        companyIcon:"./assets/user-image.jpg",
        companyName:'vijay',
        star:false,
        watch: false,
        fork: '22',
      },
      {
        companyIcon:'./assets/user-image1.jpg',
        companyName:'Ranjith',
        star:'20',
        fork: false,
        watch: false,
      },
      {
        companyIcon:"./assets/user-image.jpg",
        companyName:'kumar',
        star:'2k',
        fork: false,
        watch: false,
      },
     
  ]
  constructor() { }

  ngOnInit() {
  }

  reload() {
      this.showLoader = true;
      setTimeout(() => {
          this.showLoader = false;
      },2000)
  }

}
