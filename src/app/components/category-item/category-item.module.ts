import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryItemComponent } from './category-item.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [CategoryItemComponent],
  imports: [CommonModule, IonicModule],
  exports: [CategoryItemComponent],
})
export class CategoryItemModule {}
