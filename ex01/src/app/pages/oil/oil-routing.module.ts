import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OilComponent } from './oil.component';
import { OilListComponent } from './oil-list/oil-list.component';

const routes: Routes = [
  {
    path: '',
    component: OilComponent,
    children :[
      {
        path: '',
        component: OilListComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OilRoutingModule { }
