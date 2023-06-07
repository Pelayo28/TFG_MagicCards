import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	constructor(private httpClient: HttpClient) {}

	public createBuyer(buyer: any): Observable<any> {
		return this.httpClient.post(
			'http://localhost:8081/api/buyer/add',
			buyer
		);
	}
	public createSeller(seller: any): Observable<any> {
		return this.httpClient.post(
			'http://localhost:8081/api/seller/add',
			seller
		);
	}
}
