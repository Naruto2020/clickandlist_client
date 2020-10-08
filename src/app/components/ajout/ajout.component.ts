import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { from } from 'rxjs';

import { SgbdService } from '../../partage/sgbd.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css'],
})
export class AjoutComponent implements OnInit {
  alert: boolean = false;
  addProduit = new FormGroup({
    _id: new FormControl(''),
    name: new FormControl(''),
    status: new FormControl(''),
  });
  constructor(private sgbdService: SgbdService) {}
  creerProduit() {
    //console.log(this.addProduit.value);
    this.sgbdService
      .ajoutProduit(this.addProduit.value)
      .subscribe((results) => {
        this.alert = true;
        this.addProduit.reset({});
        console.log('recup services', results);
        return results;
      });
  }

  ngOnInit(): void {}
  fermerAlert() {
    this.alert = false;
  }
}
