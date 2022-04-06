import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from "../share/share.module";

import { MetalinfoRoutingModule } from './metalinfo-routing.module';
import { MetalinfoComponent } from './metalinfo.component';
import { MetalinfoEditComponent } from './edit/metalinfo-edit.component';
import { MetalinfoListComponent } from './metalinfo-list/metalinfo-list.component';


@NgModule({
  declarations: [
    MetalinfoComponent,
    MetalinfoEditComponent,
    MetalinfoListComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    MetalinfoRoutingModule
  ]
})
export class MetalinfoModule { }
