import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPageRoutingModule } from './detail-routing.module';

import { DetailPage } from './detail.page';
import { BadgeModule } from 'src/app/components/badge/badge.module';
import { ButtonModule } from 'src/app/components/button/button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPageRoutingModule,
    BadgeModule,
    ButtonModule,
  ],
  declarations: [DetailPage],
})
export class DetailPageModule {}
