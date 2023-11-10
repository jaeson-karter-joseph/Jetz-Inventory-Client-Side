import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IecMasterComponent } from './iec-master.component';

const routes: Routes = [{ path: '', component: IecMasterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IecMasterRoutingModule {}
