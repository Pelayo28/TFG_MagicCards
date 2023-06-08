import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ApiService } from '../services/api/api.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';



@Component({
	selector: 'app-cards',
	templateUrl: './cards.component.html',
	styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
	@ViewChild(MatPaginator) paginator!: MatPaginator;
	totalCards: number = 0; // Total de cartas disponibles
cardsPerPage: number = 10; // Número de cartas por página
currentPageIndex: number = 0; // Índice de la página actual
queryParamsSubscription: Subscription | undefined; // Suscripción al cambio de parámetros de consulta

	cards: any[] = [];
	errorMessage: string | undefined;


	constructor(
		private route: ActivatedRoute,
		private apiService: ApiService
	) { }

	ngOnInit(): void {
		this.route.queryParams.subscribe(params => {
		  const searchTerm = params['name'];
		  const nPage = params['nPage'];

		  this.apiService.searchCards({ "name": searchTerm }, nPage)
			.subscribe(
			  (response) => {
				console.log('Resultados de búsqueda:', response);
				if (response.cards.length > 0) {
				  this.cards = response.cards;
				  this.totalCards = response.totalCount;
				  this.paginator.pageIndex = nPage - 1;
				} else {
				  this.errorMessage = 'No hay resultados para esta búsqueda. Por favor, revisa que esté todo bien y prueba de nuevo.';
				  this.cards = [];
				  this.totalCards = 0;
				}
			  },
			  (error) => {
				console.error('Error al obtener las cartas:', error);
				this.errorMessage = 'No se pudo obtener las cartas. Por favor, inténtalo de nuevo más tarde.';
				this.cards = [];
				this.totalCards = 0;
			  }
			);
		});
	  }



	loadCards(searchTerm: string) {
		const currentPage = this.paginator.pageIndex + 1;
		this.apiService.searchCards({ "name": searchTerm }, currentPage)
			.subscribe(
				(response) => {
					console.log('Resultados de búsqueda:', response);
					if (response.cards.length > 0) {
						this.cards = response.cards;
					} else {
						this.errorMessage = 'No hay resultados para esta búsqueda. Por favor, revisa que esté todo bien y prueba de nuevo.';
						this.cards = [];
					}
				},
				(error) => {
					console.error('Error al obtener las cartas:', error);
					this.errorMessage = 'No se pudo obtener las cartas. Por favor, inténtalo de nuevo más tarde.';
					this.cards = [];
				}
			);
	}
}








	// ngOnInit() {
	// 	this.route.queryParams.subscribe(params => {
	// 	  const searchTerm = params['name']; // Obtén el parámetro de búsqueda "name"

	// 	  // Utiliza el servicio ApiService para realizar la solicitud de datos
	// 	  this.apiService.getCards(searchTerm).subscribe(
	// 		(response) => {
	// 		  console.log('Resultados de búsqueda:', response);
	// 		  // Realiza las acciones necesarias para mostrar los resultados en la página "cards"
	// 		},
	// 		(error) => {
	// 			console.error('Error al obtener las cartas:', error);
	// 			this.errorMessage = 'No se pudo obtener las cartas. Por favor, inténtalo de nuevo más tarde.';
	// 			return of([]); // Devuelve un observable vacío para que el flujo continúe sin interrupciones
	// 		}


	// 	  );
	// 	});
	//   }







	// ngOnInit(): void {
	// 	this.route.queryParams.subscribe(params => {
	// 		const name = params['name']; // Obtén el parámetro de búsqueda "name"

	// 		// Realiza la solicitud de datos utilizando el parámetro de búsqueda
	// 		this.searchCards({ "name": name }, this.nPage);
	// 	});

	// 	this.cardSrv.getCards("")
	// 		.pipe(
	// 			// tap((card: Card[]) => {
	// 			// 	// Manejar los datos aqui
	// 			//   card.forEach(pub => {
	// 			// 	pub.user_name = "Undefined";
	// 			//   });
	// 			//   this.cards = card;
	// 			// }),
	// 			catchError(error => {
	// 				// Manejar el error aquí
	// 				console.error('Error al obtener las publicaciones:', error);
	// 				this.errorMessage = 'No se pudo obtener las publicaciones. Por favor, inténtalo de nuevo más tarde.';
	// 				return of([]); // Devuelve un observable vacío para que el flujo continúe sin interrupciones
	// 			})
	// 		)
	// 		.subscribe();
	// }
