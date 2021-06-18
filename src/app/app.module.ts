import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavComponent } from './fav/fav.component';
import { HomeComponent } from './home/home.component';
import { BasicHighlightComponent } from './basic-highlight/basic-highlight.component';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    FavComponent,
    HomeComponent,
    BasicHighlightComponent,
    BetterHighlightDirective,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
