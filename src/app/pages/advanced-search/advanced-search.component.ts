import { Component } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-advanced-search',
	templateUrl: './advanced-search.component.html',
	styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent {
	constructor(private apiService: ApiService,  private router: Router) { }
	searchResults: any[] = [];


	formData: any = {};

	dataSearch(): void {
		const dataForm: any = {
			name: this.formData.nombre,
			cmc: this.formData.coste,
			types: this.formData.tipo,
			subtypes: this.formData.subtipo,
			rarity: this.formData.rareza,
			power: this.formData.fuerza,
			toughness: this.formData.resistencia,
			loyalty: this.formData.lealtad,
			colors: [
				this.formData.blanco ? 'W' : false,
				this.formData.azul ? 'U' : false,
				this.formData.negro ? 'B' : false,
				this.formData.rojo ? 'R' : false,
				this.formData.verde ? 'G' : false,
			].filter((color: string | boolean) => color !== false),
		};

		const filteredData = this.filterEmptyProperties(dataForm);

		console.log('filteredData: ', filteredData);

		sessionStorage.setItem('query', JSON.stringify(filteredData));

		// Generar la URL con los parámetros de búsqueda avanzada
		const queryParams = { ...filteredData, nPage: 1};
		console.log('queryParams :>> ', queryParams);
		this.router.navigate(['/cards'], { queryParams });
	}

	filterEmptyProperties(obj: { [key: string]: any }): { [key: string]: any } {
		return Object.entries(obj).reduce((filteredObj: { [key: string]: any }, [key, value]) => {
		  if (value !== false && value !== "" && value !== undefined && !(key === 'colors' && Array.isArray(value) && value.length === 0)) {
			filteredObj[key] = value;
		  }
		  return filteredObj;
		}, {});
	  }


	serializeQueryParams(params: { [key: string]: any }): string {
		return Object.keys(params)
		  .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
		  .join('&');
	  }
}
