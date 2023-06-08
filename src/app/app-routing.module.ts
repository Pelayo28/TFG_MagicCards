import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }, // Página por defecto
	{ path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
	{ path: 'cards', loadChildren: () => import('./pages/cards/cards.module').then(m => m.CardsModule) },
	{ path: 'advancedSearch', loadChildren: () => import('./pages/advanced-search/advanced-search.module').then(m => m.AdvancedSearchModule) },
	{ path: '**', loadChildren: () => import('./pages/errors/page404/page404.module').then(m => m.Page404Module) },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
