import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule} from '../share/share.module';

import { OilRoutingModule } from './oil-routing.module';
import { OilComponent } from './oil.component';
import { OilListComponent } from './oil-list/oil-list.component';


@NgModule({
  declarations: [
    OilComponent,
    OilListComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    OilRoutingModule
  ]
})
export class OilModule { }
