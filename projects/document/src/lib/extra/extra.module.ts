import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorHueModule } from 'ngx-color/hue'; // <color-hue-picker></color-hue-picker>

import { ExtraComponent } from './extra.component';

@NgModule({
  declarations: [
    ExtraComponent
  ],
  imports: [
    CommonModule,
    ColorHueModule
  ],
  exports: [
    ExtraComponent
  ]
})
export class ExtraModule { }
