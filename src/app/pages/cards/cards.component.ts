import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ApiService } from '../services/api/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingComponent } from 'src/app/Components/loading/loading.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
	@ViewChild(LoadingComponent) loadingComponent!: LoadingComponent;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  totalCards: number = 0; // Total de cartas disponibles
  pageSizeOptions = [10, 25, 50, 100];
  cardsPerPage: number = this.pageSizeOptions[0]; // Número de cartas por página
  currentPageIndex: number = 1; // Índice de la página actual
  queryParamsSubscription: Subscription | undefined; // Suscripción al cambio de parámetros de consulta

  cards: any[] = [];
  displayedCards: any[] = []; // Cartas a mostrar en la página actual
  errorMessage: string | undefined;
  searchTerm: any;
  isLoading = false; // Bandera para controlar la escena de carga

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
	// Activa la escena de carga
    this.isLoading = true;

    this.route.queryParams.subscribe((params) => {
      this.searchTerm = params['name'];
      const nPage = params['nPage'];

	  console.log('params :>> ', params);
      // Activa la escena de carga
      this.isLoading = true;

      // Realizar la búsqueda de cartas usando los parámetros de la URL
      this.apiService.searchCards(params).subscribe(
        (response) => {
          console.log('Resultados de búsqueda:', response);
          if (response.cards.length > 0) {
            this.cards = response.cards.filter(
              (card: any) => card.imageUrl
            );
            this.cards = response.cards.filter(
              (card: any, index: number, self: any[]) =>
                index ===
                self.findIndex(
                  (c: any) =>
                    c.name === card.name && c.imageUrl
                )
            );

            this.totalCards = this.cards.length;
            this.paginator.pageIndex = nPage - 1;

            // Actualizar las cartas a mostrar en la página actual
            this.updateDisplayedCards();
          } else {
            this.errorMessage =
              'No hay resultados para esta búsqueda. Por favor, revisa que esté todo bien y prueba de nuevo.';
            this.cards = [];
            this.totalCards = 0;
          }

          // Desactiva la escena de carga
          this.isLoading = false;
        },
        (error) => {
          console.error('Error al obtener las cartas:', error);
          this.errorMessage =
            'No se pudo obtener las cartas. Por favor, inténtalo de nuevo más tarde.';
          this.cards = [];
          this.totalCards = 0;

          // Desactiva la escena de carga
          this.isLoading = false;
        }

		);
    });
  }

  onPageChange(event: PageEvent) {
    this.currentPageIndex = event.pageIndex + 1;
    this.cardsPerPage = event.pageSize;

    // Actualizar las cartas a mostrar en la página actual
    this.updateDisplayedCards();
  }

  updateDisplayedCards() {
    const startIndex = (this.currentPageIndex - 1) * this.cardsPerPage;
    const endIndex = startIndex + this.cardsPerPage;
    this.displayedCards = this.cards.slice(startIndex, endIndex);
  }
}
