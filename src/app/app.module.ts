import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListeComponent } from './components/liste/liste.component';
import { AjoutComponent } from './components/ajout/ajout.component';
import { from } from 'rxjs';
import { UpdateComponent } from './components/update/update.component';
import { AccueilComponent } from './components/accueil/accueil.component';

@NgModule({
  declarations: [AppComponent, ListeComponent, AjoutComponent, UpdateComponent, AccueilComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
