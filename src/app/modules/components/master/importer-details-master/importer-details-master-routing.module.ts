import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImporterDetailsMasterComponent } from './importer-details-master.component';

const routes: Routes = [{ path: '', component: ImporterDetailsMasterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImporterDetailsMasterRoutingModule { }
