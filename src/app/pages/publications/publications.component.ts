import { Component, OnInit } from '@angular/core';
import { PublicationService } from '../services/publication/publication.service';
import { tap } from 'rxjs/operators';
import { Publication } from '../interfaces/publication.interface';

import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit{
	publications!: Publication[];
	errorMessage: string | undefined;
	constructor(private publicationSrv: PublicationService){ }

	ngOnInit(): void {
		this.publicationSrv.getPublications()
		  .pipe(
			tap((publication: Publication[]) => {
				// Manejar los datos aqui
			  publication.forEach(pub => {
				pub.user_name = "Undefined";
			  });
			  this.publications = publication;
			}),
			catchError(error => {
			  // Manejar el error aquí
			  console.error('Error al obtener las publicaciones:', error);
			  this.errorMessage = 'No se pudo obtener las publicaciones. Por favor, inténtalo de nuevo más tarde.';
			  return of([]); // Devuelve un observable vacío para que el flujo continúe sin interrupciones
			})
		  )
		  .subscribe();
	  }
}
