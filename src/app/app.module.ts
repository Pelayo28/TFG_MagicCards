import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

import { SearchComponent } from './Components/search/search.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ApiService } from './pages/services/api/api.service';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { CustomMatPaginator } from './paginator-es';


@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		FooterComponent,
		SearchComponent,
	],
	imports: [
		BrowserModule,
		CommonModule,
		MatToolbarModule,
		MatButtonModule,
		MatIconModule,
		HttpClientModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		HttpClientModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		FormsModule,
	],
	providers: [
		ApiService,
		{
			provide: MatPaginatorIntl,
			useClass: CustomMatPaginator
		}
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
