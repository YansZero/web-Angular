import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule} from '../share/share.module';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

import { OilRoutingModule } from './oil-routing.module';
import { OilComponent } from './oil.component';
import { OilListComponent } from './oil-list/oil-list.component';
import { OilEditComponent } from './oil-edit/oil-edit.component';


@NgModule({
  declarations: [
    OilComponent,
    OilListComponent,
    OilEditComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    NzPopconfirmModule,
    NzInputNumberModule,
    NzFormModule,
    NzDatePickerModule,
    OilRoutingModule
  ]
})
export class OilModule { }
