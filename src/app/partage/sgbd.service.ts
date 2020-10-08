import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

//import { Liste } from './liste.model';

@Injectable({
  providedIn: 'root',
})
export class SgbdService {
  // recuperation des données du formulaire pour une maj
  //produit: Liste;
  // on va recupérer les produits de la collections ici
  // listes: Liste[];
  // url server bdd
  bddUrl = environment.bddUrl;
  constructor(private http: HttpClient) {}

  // requête pour recupérer les données de mongodb
  afficheListe() {
    return this.http.get(this.bddUrl);
  }
  // requête pour ajout de produit
  ajoutProduit(data) {
    return this.http.post(this.bddUrl, data);
  }
  // requête pour récupérer la donnée a mettre a jour
  donneeCourante(id) {
    return this.http.get(`${this.bddUrl}/${id}`);
  }
  // requête pour mettre à jour la donnée
  updateProduit(id, data) {
    return this.http.put(`${this.bddUrl}/${id}`, data);
  }
  // requête pour supprimer la donnée
  effaceProduit(id) {
    return this.http.delete(`${this.bddUrl}/${id}`);
  }
}
