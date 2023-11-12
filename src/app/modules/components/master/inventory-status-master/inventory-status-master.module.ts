import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryStatusMasterRoutingModule } from './inventory-status-master-routing.module';
import { InventoryStatusMasterComponent } from './inventory-status-master.component';
import { NgprimeModule } from 'src/app/modules/shared/ngprime/ngprime.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InventoryStatusMasterComponent
  ],
  imports: [
    CommonModule,
    InventoryStatusMasterRoutingModule,
    NgprimeModule,
    FormsModule
  ]
})
export class InventoryStatusMasterModule { }
