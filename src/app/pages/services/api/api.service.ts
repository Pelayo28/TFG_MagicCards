import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	constructor(private http: HttpClient) { }

	searchCards(query: any, page: number): Observable<any> {
		let itemHtml = "";
		let totalPages = 0;

		let options = { method: "GET" };

		query["page"] = page;

		let url = "https://api.magicthegathering.io/v1/cards?" + new URLSearchParams(query);
		console.log(url);

		return from(fetch(url, options)).pipe(
		  catchError((error) => {
			console.log('error :>> ', error);
			return throwError(error); // Lanza el error para que pueda ser manejado en el componente
		  }),
		  // Mapea la respuesta a JSON
		  switchMap((res) => {
			if (res.ok) {
			  return from(res.json());
			} else {
			  throw new Error("HTTP-Error: " + res.status);
			}
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
