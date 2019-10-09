import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatCardModule, MatButtonModule, MatIconModule, MatTabsModule, MatToolbarModule, MatListModule, MatMenuModule, MatChipsModule, MatTableModule, MatProgressBarModule, MatPaginatorModule } from "@angular/material";
import { CdkTableModule } from "@angular/cdk/table";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { Ng2OdometerModule } from "ng2-odometer";
import { RoundProgressModule } from "angular-svg-round-progressbar";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DashcardComponent } from "./dashcard/dashcard.component";









@NgModule({
    imports: [
      CommonModule,
      MatCardModule,
      
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
      ReactiveFormsModule
     
    ],
    declarations: [
        ProfileCardComponent,
        DashcardComponent 
    ],
    exports:[
        ProfileCardComponent,
        DashcardComponent
    ]
  })
  export class ProfileWizerdModule { }
  