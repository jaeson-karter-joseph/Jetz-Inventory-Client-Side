import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenerateInvoiceRoutingModule } from './generate-invoice-routing.module';
import { GenerateInvoiceComponent } from './generate-invoice.component';
import { NgprimeModule } from 'src/app/modules/shared/ngprime/ngprime.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GenerateInvoiceComponent
  ],
  imports: [
    CommonModule,
    GenerateInvoiceRoutingModule,
    NgprimeModule,
    ReactiveFormsModule
  ]
})
export class GenerateInvoiceModule { }
