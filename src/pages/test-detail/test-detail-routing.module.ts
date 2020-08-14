import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestDetailPage } from './test-detail.page';

const routes: Routes = [
  {
    path: '',
    component: TestDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestDetailPageRoutingModule {}
