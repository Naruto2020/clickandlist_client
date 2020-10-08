import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SgbdService } from '../../partage/sgbd.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
  providers: [SgbdService],
})
export class ListeComponent implements OnInit {
  alert: boolean = false;
  listesProd: any;
  constructor(
    private sgbdService: SgbdService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.sgbdService.afficheListe().subscribe((result) => {
      this.listesProd = result;
    });
  }
  cancelProduit() {
    this.sgbdService
      .effaceProduit(this.router.snapshot.params._id)
      .subscribe((results) => {
        this.sgbdService.afficheListe().subscribe((result) => {
          this.listesProd = result;
        });
        this.alert = true;
        console.log(results);
        return results;
      });
  }
  fermerAlert() {
    this.alert = false;
  }
}
