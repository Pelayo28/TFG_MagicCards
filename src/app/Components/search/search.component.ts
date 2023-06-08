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

	//DESDE AQUI
	searchCards(query: any, page: number): void {
		let itemHtml = "";
		let totalPages = 0;

		let options = { method: "GET" };

		query["page"] = page;

		let url = "https://api.magicthegathering.io/v1/cards?" + new URLSearchParams(query);
		console.log(url);
		fetch(url, options)
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
					throw new Error("HTTP-Error: " + res.status);
				}
			})
			.then((resJson) => {
				console.log(resJson);
				let resHeaders = resJson.headers;
			})
			.catch((error) => {
				console.log('error :>> ', error);
				alert(error.message);
			});
	}

	// searchName() {
	// 	// this.router.navigate(['resultQuery'])
	// 	this.router.navigate(['/cards'])
	// 	let buscador = this.searchText;

	// 	this.searchCards({ "name": buscador }, this.nPage);
	// }
	searchName() {
		let buscador = this.searchText;

		// this.apiService.searchCards({ "name": buscador }, this.nPage);

		// Redirecciona a la página "cards" y pasa los parámetros de búsqueda y nPage
		this.router.navigate(['/cards'], { queryParams: { name: buscador, nPage: this.nPage } });
	  }











	ngOnInit() {
		if (sessionStorage.getItem("query")) {
			this.searchCards(JSON.parse(sessionStorage.getItem("query") + ""), this.nPage);
		}
	}

	// busquedaAvanzadaClick() {
	// 	sessionStorage.removeItem("query");
	// 	this.router.navigate(['/busqueda-avanzada']);
	// }

	// inicioClick() {
	// 	sessionStorage.removeItem("query");
	// 	this.router.navigate(['/inicio']);
	// }

	buscadorKeyDown(event: KeyboardEvent) {
		if (event.key === "Enter") {
			event.preventDefault();
			this.searchName();
		}
	}

	lupaClick() {
		this.searchName();
	}
}
