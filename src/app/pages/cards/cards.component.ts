import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ApiService } from '../services/api/api.service';

import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit{
	// cards!: Card[];
	errorMessage: string | undefined;
	constructor(private cardSrv: ApiService){ }

	ngOnInit(): void {
		this.cardSrv.getCards("")
		  .pipe(
			// tap((card: Card[]) => {
			// 	// Manejar los datos aqui
			//   card.forEach(pub => {
			// 	pub.user_name = "Undefined";
			//   });
			//   this.cards = card;
			// }),
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
