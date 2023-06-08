import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/pages/services/api/api.service';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent {
	searchText: string = '';
	nPage: number = 1;

	clearSearch() {
		this.searchText = '';
	}

	constructor(
		private apiService: ApiService,
		private route: ActivatedRoute,
		private router: Router
	) { }

	searchName() {
		let buscador = this.searchText;

		// Redirecciona a la página "cards" y pasa los parámetros de búsqueda y nPage
		this.router.navigate(['/cards'], { queryParams: { name: buscador, nPage: this.nPage } });
	}
}
