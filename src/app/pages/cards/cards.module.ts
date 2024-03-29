import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';
import { MaterialModule } from 'src/app/material.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LoadingComponent } from 'src/app/Components/loading/loading.component';


@NgModule({
  declarations: [
    CardsComponent,
	LoadingComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
	MaterialModule,
	MatPaginatorModule
  ]
})
export class CardsModule { }
