import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IecMasterRoutingModule } from './iec-master-routing.module';
import { IecMasterComponent } from './iec-master.component';
import { NgprimeModule } from 'src/app/modules/shared/ngprime/ngprime.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IecMasterComponent
  ],
  imports: [
    CommonModule,
    IecMasterRoutingModule,
    NgprimeModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class IecMasterModule { }
