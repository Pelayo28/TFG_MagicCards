import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }, // Página por defecto
	{ path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
	{ path: 'sign-up', loadChildren: () => import('./pages/sign-up/sign-up.module').then(m => m.SignUpModule) },
	{ path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
	{ path: 'publications', loadChildren: () => import('./pages/publications/publications.module').then(m => m.PublicationsModule) },
	{ path: 'loading', loadChildren: () => import('./Components/loading/loading.component').then(m => m.LoadingComponent) },
	{ path: '**', loadChildren: () => import('./pages/errors/page404/page404.module').then(m => m.Page404Module) },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }