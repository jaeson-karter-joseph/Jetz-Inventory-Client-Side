import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IecMasterRoutingModule } from './iec-master-routing.module';
import { IecMasterComponent } from './iec-master.component';
import { NgprimeModule } from 'src/app/modules/shared/ngprime/ngprime.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IecEndpointService } from '../services/iec-endpoint.service';
import { IecService } from '../services/iec.service';
import { AuthService } from 'src/app/services/auth.service';


@NgModule({
  declarations: [
    IecMasterComponent
  ],
  imports: [
    CommonModule,
    IecMasterRoutingModule,
    NgprimeModule,
    ReactiveFormsModule
  ],
  providers: [IecService, IecEndpointService, AuthService]
})
export class IecMasterModule { }
