import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'cdk-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.scss']
})
export class LineGraphComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'case', 'status'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  case: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Ranjith', case: 'civil', status: 'closed'},
  {position: 2, name: 'Kumar', case: 'Criminal', status: 'Pending'},
  {position: 3, name: 'Arun', case:'Criminal', status: 'InProgress'},
  {position: 4, name: 'Vinoth', case:'Criminal' , status: 'closed'},
  {position: 5, name: 'Kamal', case: 'Criminal', status: 'Pending'},
  {position: 6, name: 'Saravanan', case: 'Criminal', status: 'InProgress'},
  {position: 7, name: 'praba', case: 'civil', status: 'InProgress'},
  {position: 8, name: 'karan', case: 'Criminal', status: 'Pending'},
  {position: 9, name: 'Ranjith', case: 'civil', status: 'closed'},
  {position: 10, name: 'kumar', case: 'Criminal', status: 'Pending'},
  {position: 11, name: 'udayakumar', case:'Criminal', status: 'InProgress'},
  {position: 12, name: 'vijay', case: 'civil', status: 'InProgress'},
  {position: 13, name: 'palani', case: 'Criminal', status: 'closed'},
  {position: 14, name: 'tamil', case: 'civil', status: 'Pending'},
  {position: 15, name: 'sarvanan', case: 'Criminal', status: 'closedP'},
  {position: 16, name: 'prabakaran', case: 'Criminal', status: 'Pending'},
  {position: 17, name: 'Arul', case: 'civil', status: 'Cl'},
  {position: 18, name: 'kamal', case: 'Criminal', status: 'closed'},
  {position: 19, name: 'Ajith', case: 'civil', status: 'Pending'},
  {position: 20, name: 'Vijay', case: 'civil', status: 'closed'},
];