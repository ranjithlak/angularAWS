import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatDialog} from '@angular/material';
import { DialogAboxComponent } from '../dialog-abox/dialog-abox.component';

@Component({
  selector: 'cdk-share-price',
  templateUrl: './share-price.component.html',
  styleUrls: ['./share-price.component.scss']
})
export class SharePriceComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open( DialogAboxComponent, {
      height: '300px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  

    
    
  
    ngOnInit(){}
      
  }
  
  