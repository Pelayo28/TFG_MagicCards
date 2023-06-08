import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	constructor(private http: HttpClient) { }

	getCards(searchTerm: string): Observable<any> {
		const url = 'URL_DE_LA_API?parametro=' + searchTerm;
		return this.http.get(url);
	}
}
