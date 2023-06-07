import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicationsRoutingModule } from './publications-routing.module';
import { PublicationsComponent } from './publications.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    PublicationsComponent
  ],
  imports: [
    CommonModule,
    PublicationsRoutingModule,
	MaterialModule
  ]
})
export class PublicationsModule { }
