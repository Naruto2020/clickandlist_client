import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';

import { SgbdService } from '../../partage/sgbd.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  alert: boolean = false;
  editProduit = new FormGroup({
    //_id: new FormControl(''),
    name: new FormControl(''),
    status: new FormControl(''),
  });
  constructor(
    private sgbdService: SgbdService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // recuperation de la reponse suite a la requête donneeCourante du composant service
    this.sgbdService
      .donneeCourante(this.router.snapshot.params._id)
      .subscribe((results) => {
        this.editProduit = new FormGroup({
          name: new FormControl(results['name']),
          status: new FormControl(results['status']),
        });
        console.log(results);
      });
  }
  // recuperation de la reponse suite a la requête updateProduit du composant service  et maj du produit
  mettreAjour() {
    this.sgbdService
      .updateProduit(this.router.snapshot.params._id, this.editProduit.value)
      .subscribe((results) => {
        this.alert = true;
        this.editProduit = new FormGroup({
          name: new FormControl(results['name']),
          status: new FormControl(results['status']),
        });

        console.log(results);
      });
  }
  fermerAlert() {
    this.alert = false;
  }
}
