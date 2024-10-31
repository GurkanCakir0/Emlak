import { Favori } from 'src/models/favori';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,NavigationEnd,NavigationStart} from '@angular/router';
import { Navigation } from 'selenium-webdriver';
import { Urun } from 'src/models/urun';
import { FbServisService } from 'src/services/fbServis.service';
import { filter } from 'rxjs/operators';
import { Location } from '@angular/common';
@Component({
  selector: 'app-urundetay',
  templateUrl: './urundetay.component.html',
  styleUrls: ['./urundetay.component.scss']
})

export class UrundetayComponent implements OnInit {
  returnUrl: any;
  key: string;
  secUrun: Urun = new Urun();
  currentRoute: string;
  secfav:Favori=new Favori();
  constructor(
    public route: ActivatedRoute,
    public fbServis: FbServisService,
    public router: Router,
    public locations:Location

  ) {}
  ngOnInit() {
    this.route.params.subscribe(p => {
      this.key = p.key;
      this.KayitGetir();
    });
  }
  gerigit(){
    this.locations.back();
  }
  KayitGetir() {
    this.fbServis.UrunByKey(this.key).snapshotChanges().subscribe(data => {
      const y = { ...data.payload.toJSON(), key: this.key };
      this.secUrun = (y as Urun);
    });
  }
  favoriEkle(){
    var user = JSON.parse(localStorage.getItem("user"));
    this.secfav.uid = user.uid;
    var tarih = new Date();
    this.secfav.kayTarih = tarih.getTime().toString();
    this.secfav.duzTarih = tarih.getTime().toString();
    this.fbServis.FavoriEkle(this.secfav).then(d => {});
    this.fbServis.FavoriEkle(this.secUrun).then(d => {});
  }
}
