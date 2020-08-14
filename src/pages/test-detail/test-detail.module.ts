import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestDetailPageRoutingModule } from './test-detail-routing.module';

import { TestDetailPage } from './test-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestDetailPageRoutingModule
  ],
  declarations: [TestDetailPage]
})
export class TestDetailPageModule {}
