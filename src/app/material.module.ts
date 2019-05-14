import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatFormFieldModule,
  MatCardModule,
  MatButtonModule,
  MatListModule,
  MatButtonToggleModule,
  MatInputModule,
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class MaterialModule { }
