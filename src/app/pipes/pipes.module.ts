import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvalidInputPipe } from './invalid-input.pipe';

// Global Pipes
@NgModule({
  declarations: [
    InvalidInputPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InvalidInputPipe
  ]
})
export class PipesModule { }
