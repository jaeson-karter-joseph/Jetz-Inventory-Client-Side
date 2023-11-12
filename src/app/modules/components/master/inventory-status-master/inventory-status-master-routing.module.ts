import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryStatusMasterComponent } from './inventory-status-master.component';

const routes: Routes = [{ path: '', component: InventoryStatusMasterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryStatusMasterRoutingModule { }
