import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{ path: 'generateInvoice', loadChildren: () => import('./generate-invoice/generate-invoice.module').then(m => m.GenerateInvoiceModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
