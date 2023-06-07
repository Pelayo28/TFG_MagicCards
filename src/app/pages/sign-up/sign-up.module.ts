import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
	declarations: [SignUpComponent],
	imports: [
		CommonModule,
		SignUpRoutingModule,
		MatStepperModule,
		MatButtonModule,
		MatInputModule,
		MatFormFieldModule,
		FormsModule,
		ReactiveFormsModule,
		MatIconModule,
		MatChipsModule,
		MatCardModule,
		MatSelectModule,
	],
})
export class SignUpModule {}
