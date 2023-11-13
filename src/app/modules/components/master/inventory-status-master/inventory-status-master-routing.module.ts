import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IecDataComponent } from './iec-data/iec-data.component';
import { BoeDataComponent } from './boe-data/boe-data.component';

const routes: Routes = [
  { path: 'IEC', component: IecDataComponent },
  { path: 'BOE', component: BoeDataComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryStatusMasterRoutingModule { }
