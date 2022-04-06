import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from "../share/share.module";

import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchaseComponent } from './purchase.component';
import { PurchaseListComponent } from './purchase-list/purchase-list.component';
import { PurchaseEditComponent } from './purchase-edit/purchase-edit.component';


@NgModule({
  declarations: [
    PurchaseComponent,
    PurchaseListComponent,
    PurchaseEditComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    PurchaseRoutingModule
  ]
})
export class PurchaseModule { }
