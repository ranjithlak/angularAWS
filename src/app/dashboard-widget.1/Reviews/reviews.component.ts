import { Component, OnInit } from '@angular/core';
import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource, MatTreeNestedDataSource } from '@angular/material';
import { Observable } from 'rxjs';
import { CdkDragDrop } from '@angular/cdk/drag-drop';




@Component({
  selector: 'cdk-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  panelOpenState = false;
  

  constructor() {
   
  }

  
  

  ngOnInit() {
  }

}
