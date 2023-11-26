import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { NgprimeModule } from '../../shared/ngprime/ngprime.module';
import { IecService } from './services/iec.service';
import { IecEndpointService } from './services/iec-endpoint.service';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
  ],

})
export class MasterModule { }
