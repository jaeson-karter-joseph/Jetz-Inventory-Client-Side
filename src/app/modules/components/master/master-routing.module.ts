import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'unitMaster', loadChildren: () => import('./unit-master/unit-master.module').then(m => m.UnitMasterModule) },
  { path: 'iecMaster', loadChildren: () => import('./iec-master/iec-master.module').then(m => m.IecMasterModule) },
  { path: 'importerDetailsMaster', loadChildren: () => import('./importer-details-master/importer-details-master.module').then(m => m.ImporterDetailsMasterModule) },
  { path: 'inventoryStatusMaster', loadChildren: () => import('./inventory-status-master/inventory-status-master.module').then(m => m.InventoryStatusMasterModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
