import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetalinfoComponent } from './metalinfo.component';
import { MetalinfoListComponent } from "./list/metalinfo-list.component";

const routes: Routes = [
  {
    path: '',
    component: MetalinfoComponent,
    pathMatch: 'prefix',
    children :[
      {
        path: '',
        component: MetalinfoListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MetalinfoRoutingModule { }
