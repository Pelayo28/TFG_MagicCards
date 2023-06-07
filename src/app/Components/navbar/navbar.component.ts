import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/pages/services/api/api.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {
	@ViewChild('logo') logoElement!: ElementRef;
	searchTerm = new FormControl('');
	resultadosAPI: any;
	isLoading: boolean = false;
	nPage = 1;

	constructor(
		private router: Router,
		private renderer: Renderer2,
		private apiService: ApiService,
		private route: ActivatedRoute
	) { }

	ngAfterViewInit() {
		if (this.logoElement) {
			const logoElement = this.logoElement.nativeElement;
			this.renderer.listen(logoElement, 'load', () => {
				logoElement.addEventListener('click', this.redireccionarHome.bind(this));
			});
		}
	}

	redireccionarHome() {
		this.router.navigateByUrl('/home');
	}


}
