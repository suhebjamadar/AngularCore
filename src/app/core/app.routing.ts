import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
	//otherwise redirect to home
	{ path: '**', redirectTo: 'home', pathMatch: 'full' }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
