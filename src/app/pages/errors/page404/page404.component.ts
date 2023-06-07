import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
	selector: 'app-page404',
	templateUrl: './page404.component.html',
	styleUrls: ['./page404.component.scss']
})
export class Page404Component implements OnInit {
	constructor(private appComponent: AppComponent) { }

	ngOnInit(): void {
		this.appComponent.is404Page = true;
	}
}
