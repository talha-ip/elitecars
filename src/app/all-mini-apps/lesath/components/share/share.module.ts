import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../../pipes/pipes.module'


@NgModule({
  declarations: [
  ],
  exports: [
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PipesModule,
  ],
})
export class ShareModule { }
