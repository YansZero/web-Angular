import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'metalinfo', loadChildren: () => import('./pages/metalinfo/metalinfo.module').then(m => m.MetalinfoModule) },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'order', loadChildren: () => import('./pages/order/order.module').then(m => m.OrderModule) },
  { path: 'sales', loadChildren: () => import('./pages/sales/sales.module').then(m => m.SalesModule) },
  { path: 'purchase', loadChildren: () => import('./pages/purchase/purchase.module').then(m => m.PurchaseModule) },
  { path: 'oil', loadChildren: () => import('./pages/oil/oil.module').then(m => m.OilModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
