import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from "../share/share.module";

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderEditComponent } from './order-edit/order-edit.component';


@NgModule({
  declarations: [
    OrderComponent,
    OrderListComponent,
    OrderEditComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
