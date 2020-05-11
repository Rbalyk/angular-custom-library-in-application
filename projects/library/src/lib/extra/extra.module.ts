import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorHueModule } from 'ngx-color/hue'; // <color-hue-picker></color-hue-picker>
import { MatButtonModule } from '@angular/material/button';

import { ExtraComponent } from './extra.component';

@NgModule({
  declarations: [
    ExtraComponent
  ],
  imports: [
    CommonModule,
    ColorHueModule,
    MatButtonModule
  ],
  exports: [
    ExtraComponent
  ]
})
export class ExtraModule { }
