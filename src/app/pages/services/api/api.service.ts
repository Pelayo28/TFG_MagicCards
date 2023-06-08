import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	constructor(private http: HttpClient) { }

	searchCards(query: any): Observable<any> {
		let params = new HttpParams();

		for (const key in query) {
		  if (query.hasOwnProperty(key)) {
			params = params.append(key, query[key]);
		  }
		}

		const url = 'https://api.magicthegathering.io/v1/cards';

		return this.http.get(url, { params }).pipe(
		  catchError((error) => {
			console.log('error :>> ', error);
			return throwError(error);
		  })
		);
	  }
}
