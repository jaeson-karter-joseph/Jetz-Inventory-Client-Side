import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitMasterRoutingModule } from './unit-master-routing.module';
import { UnitMasterComponent } from './unit-master.component';
import { NgprimeModule } from 'src/app/modules/shared/ngprime/ngprime.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UnitMasterComponent
  ],
  imports: [
    CommonModule,
    UnitMasterRoutingModule,
    NgprimeModule,
    FormsModule
  ]
})
export class UnitMasterModule { }
