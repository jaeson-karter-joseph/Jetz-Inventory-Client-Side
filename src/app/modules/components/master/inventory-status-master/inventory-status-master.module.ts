import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryStatusMasterRoutingModule } from './inventory-status-master-routing.module';
import { NgprimeModule } from 'src/app/modules/shared/ngprime/ngprime.module';
import { FormsModule } from '@angular/forms';
import { IecDataComponent } from './iec-data/iec-data.component';
import { BoeDataComponent } from './boe-data/boe-data.component';


@NgModule({
  declarations: [
    IecDataComponent,
    BoeDataComponent
  ],
  imports: [
    CommonModule,
    InventoryStatusMasterRoutingModule,
    NgprimeModule,
    FormsModule
  ]
})
export class InventoryStatusMasterModule { }
