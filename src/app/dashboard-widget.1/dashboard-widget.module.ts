import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashcardComponent } from './dashcard/dashcard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule} from '@angular/material/chips';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { LineGraphComponent } from './line-graph/line-graph.component';
import { BarGraphComponent } from './bar-graph/bar-graph.component';
import { DoughnutGraphComponent } from './doughnut-graph/doughnut-graph.component';
import {MatDialogModule} from '@angular/material/dialog';

import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReviewsComponent } from './reviews/reviews.component';
import { MatListModule } from '@angular/material/list';
import {CdkTableModule} from '@angular/cdk/table';
import {MatPaginatorModule} from '@angular/material/paginator';

import { Ng2OdometerModule } from 'ng2-odometer';
import { SharePriceComponent } from './share-price/share-price.component';
import { RoundProgressbarComponent } from './round-progressbar/round-progressbar.component'; 
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { SalesListComponent } from './sales-list/sales-list.component';
import { D3UsaComponent } from './d3-usa/d3-usa.component';
import { TableComponent } from './table/table.component';
import {MatTableModule} from '@angular/material/table';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import {MatInputModule} from '@angular/material/input';
import { DialogAboxComponent } from './dialog-abox/dialog-abox.component';
import { DialogBboxComponent } from './dialog-bbox/dialog-bbox.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatRippleModule} from '@angular/material/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    Ng2OdometerModule,
    RoundProgressModule,
    MatMenuModule,
    MatChipsModule,
    MatTableModule,
    MatProgressBarModule,
    FormsModule,
    CdkTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,MatTreeModule,MatRippleModule,MatExpansionModule,
    DragDropModule
  ],
  declarations: [
      DashcardComponent, 
      LineGraphComponent, 
      BarGraphComponent, 
      DoughnutGraphComponent, 
      D3UsaComponent,
      ReviewsComponent,
     
      SharePriceComponent,
      RoundProgressbarComponent,
      SalesListComponent,
      D3UsaComponent,
      TableComponent,
      DialogBoxComponent,
      DialogAboxComponent,
      DialogBboxComponent,
     
    
      ],
  exports: [
      DashcardComponent, 
      LineGraphComponent, 
      BarGraphComponent, 
      DoughnutGraphComponent, 
      D3UsaComponent,
      ReviewsComponent,
     
      SharePriceComponent,
      RoundProgressbarComponent,
      SalesListComponent,
      D3UsaComponent,
     
  ],

  entryComponents: [
    DialogBoxComponent,DialogAboxComponent,DialogBboxComponent,
    
]
})
export class DashboardWidgetModule { }
