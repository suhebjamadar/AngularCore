import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';

import { AppRouting } from './app.routing';
import { AppComponent }  from './app.component';

import { LayoutComponent } from '../components/layout/layout.component';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { CarouselComponent } from '../components/carousel/carousel.component';

@NgModule({
  imports:      [ BrowserModule, AppRouting ],
  declarations: [ AppComponent, LayoutComponent, HomeComponent, AboutComponent, ContactComponent, CarouselComponent ],
  providers:    [ {provide: APP_BASE_HREF, useValue: '/'}] ,
  bootstrap:    [ AppComponent ]
})

export class AppModule { }