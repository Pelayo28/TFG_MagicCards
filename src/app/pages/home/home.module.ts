import { HomeRoutingModule } from './home-routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
	HomeRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
