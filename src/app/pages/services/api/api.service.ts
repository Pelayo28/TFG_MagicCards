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
		// params = params.append('page', page.toString());

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
	// searchCards(query: any, page: number): void {
	// 	let itemHtml = "";
	// 	let totalPages = 0;

	// 	let options = { method: "GET" };

	// 	query["page"] = page;

	// 	let url = "https://api.magicthegathering.io/v1/cards?" + new URLSearchParams(query);
	// 	console.log(url);
	// 	fetch(url, options)
	// 		.then((res) => {
	// 			if (res.ok) {
	// 				return res.json();
	// 			} else {
	// 				throw new Error("HTTP-Error: " + res.status);
	// 			}
	// 		})
	// 		.then((resJson) => {
	// 			console.log(resJson);
	// 			let resHeaders = resJson.headers;
	// 		})
	// 		.catch((error) => {
	// 			console.log('error :>> ', error);
	// 			alert(error.message);
	// 		});
	// }
}
