import {Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogBboxComponent } from '../dialog-bbox/dialog-bbox.component';





@Component({
  selector: 'cdk-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.scss']
})
export class BarGraphComponent implements OnInit {
  public bio =true;
  public skill;
  public proj;
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogBboxComponent, {
      height: '450px',
      width: '700px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
    ngOnInit() {
     
  }
  
}