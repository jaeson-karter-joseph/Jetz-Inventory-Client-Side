import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './modules/shared/app-layout/components/app-layout/app-layout.component';

const routes: Routes = [
  {
    path: '', component: AppLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./modules/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'inventory', loadChildren: () => import('./modules/components/inventory/inventory.module').then(m => m.InventoryModule) },            
      { path: 'master', loadChildren: () => import('./modules/components/master/master.module').then(m => m.MasterModule) },
    ]
  },
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  { path: 'signup', loadChildren: () => import('./modules/signup/signup.module').then(m => m.SignupModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
