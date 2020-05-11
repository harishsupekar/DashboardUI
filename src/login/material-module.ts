import { NgModule } from '@angular/core';

import {
  MatSliderModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule
} from '@angular/material';

const modules = [
  MatSliderModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
