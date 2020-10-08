import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeComponent } from './components/liste/liste.component';
import { AjoutComponent } from './components/ajout/ajout.component';
import { UpdateComponent } from './components/update/update.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'ajout', component: AjoutComponent },
  { path: 'liste/:_id', component: ListeComponent },
  { path: 'update/:_id', component: UpdateComponent },
  { path: '**', component: AccueilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
