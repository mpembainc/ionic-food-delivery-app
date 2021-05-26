import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingPage } from './listing.page';

const routes: Routes = [
  {
    path: '',
    component: ListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingPageRoutingModule {}
