import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonatePage } from './donate.page';

const routes: Routes = [
  {
    path: '',
    component: DonatePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonatePageRoutingModule {}
