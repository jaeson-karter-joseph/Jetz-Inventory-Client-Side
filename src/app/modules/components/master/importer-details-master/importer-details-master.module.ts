import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImporterDetailsMasterRoutingModule } from './importer-details-master-routing.module';
import { ImporterDetailsMasterComponent } from './importer-details-master.component';
import { NgprimeModule } from 'src/app/modules/shared/ngprime/ngprime.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ImporterDetailsMasterComponent
  ],
  imports: [
    CommonModule,
    ImporterDetailsMasterRoutingModule,
    NgprimeModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ImporterDetailsMasterModule { }
