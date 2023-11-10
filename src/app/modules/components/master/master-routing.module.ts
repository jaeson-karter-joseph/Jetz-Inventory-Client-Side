import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'unitMaster', loadChildren: () => import('./unit-master/unit-master.module').then(m => m.UnitMasterModule) },
  { path: 'iecMaster', loadChildren: () => import('./iec-master/iec-master.module').then(m => m.IecMasterModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
