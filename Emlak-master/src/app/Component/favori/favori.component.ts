import { Favori } from './../../../models/favori';
import { DataService } from 'src/services/data.service';
import { Urun } from 'src/models/urun';
import { Kategori } from './../../../models/kategori';
import { Component, OnInit } from '@angular/core';
import { Sonuc } from 'src/models/sonuc';
import { Router } from '@angular/router';
import { FbServisService } from 'src/services/fbServis.service';

@Component({
  selector: 'app-favori',
  templateUrl: './favori.component.html',
  styleUrls: ['./favori.component.css']
})
export class FavoriComponent implements OnInit {

  Kategoriler:Kategori[];
  Urunler:Urun[];
  favorilerim:Favori[];
  sonuc:Sonuc=new Sonuc();
  adsoyad: string;
  uid: string;
  constructor(
    public servis:DataService,
    public fbServis: FbServisService,
    public router: Router
  ) { }

  ngOnInit() {
    var user = JSON.parse(localStorage.getItem("user"));
    this.uid = user.uid;
    this.adsoyad = user.displayName;
    this.FavoriListele();
    this.UrunListele()
  }
  FavoriListele(){
    this.fbServis.FavoriListeleByUID(this.uid).snapshotChanges().subscribe(data => {
      this.favorilerim = [];
      data.forEach(satir => {
        const y = { ...satir.payload.toJSON(), key: satir.key };
        this.favorilerim.push(y as Favori);
      });
    });
  }
  UrunListele(){
    if (this.uid==this.uid) {
      this.fbServis.UrunListeleByUID(this.uid).snapshotChanges().subscribe(data => {
        this.Urunler = [];
        data.forEach(satir => {
          const y = { ...satir.payload.toJSON(), key: satir.key };
          this.Urunler.push(y as Urun);
        });
      });
    }
      
  }
  Sil1(favorilerim: Favori) {
    this.fbServis.FavoriSil(favorilerim.key).then(d => {
    });
  }
  OturumuKapat() {
    this.fbServis.OturumKapat().then(() => {
      localStorage.removeItem("user");
      this.router.navigate(['/giris']);
    });
  }
}
