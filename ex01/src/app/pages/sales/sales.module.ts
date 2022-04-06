import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from "../share/share.module";

import { SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './sales.component';
import { SalesListComponent } from './sales-list/sales-list.component';
import { SalesEditComponent } from './sales-edit/sales-edit.component';


@NgModule({
  declarations: [
    SalesComponent,
    SalesListComponent,
    SalesEditComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    SalesRoutingModule
  ]
})
export class SalesModule { }
