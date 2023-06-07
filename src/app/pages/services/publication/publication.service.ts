import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Publication } from '../../interfaces/publication.interface';

@Injectable({
	providedIn: 'root'
})
export class PublicationService {
	private apiUrl = 'http://localhost:8081/api/publications';
	constructor(private http: HttpClient) { }

	getPublications(): Observable<Publication[]> {
		return this.http.get<Publication[]>(this.apiUrl);
	}

}
