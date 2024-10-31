import { Router } from '@angular/router';
import { FbServisService } from 'src/services/fbServis.service';
import { Urun } from 'src/models/urun';
import { Component, OnInit } from '@angular/core';
import { Sonuc } from 'src/models/sonuc';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-ilanver',
  templateUrl:'./ilanver.component.html',
  styleUrls: ['./ilanver.component.css']
})
export class IlanverComponent implements OnInit {
  Urunler:Urun[];
  /*-----------------------------------------------------*/
  /*-----------------------------------------------------*/
  /*Urun detaı*/
  BulKat:any;
  CepheYon:any;
  Esyad:any;
  KulDurumu:any;
  Sitemi:any;
  Takasd:any;
  Tapud:any;
  ATuru:any;
  Yakitd:any;
  YapiD:any;
  /*-----------------------------------------------------*/
  /*-----------------------------------------------------*/
  /*-----------------------------------------------------*/
  securun: Urun=new Urun();
  sonuc:Sonuc=new Sonuc();
  constructor(
    public fbServis: FbServisService,
    public router: Router
  ) { }

  ngOnInit() {
    this.BulKatListele();
    this.CepheYonListele();
    this.SitemiListele();
    this.TakasdListele();
    this.TapudListele();
    this.YakitdListele();
    this.ATuruListele();
    this.YapiDListele();
    this.KulDurumuListele();
    this.EsyadListele();
  }
  BulKatListele(){
    this.fbServis.BkatListele().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.BulKat = data;
    });
  }
  CepheYonListele(){
    this.fbServis.CepheListele().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.CepheYon = data;
    });
  }
  EsyadListele(){
    this.fbServis.EsyaListele().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.Esyad = data;
    });
  }
  KulDurumuListele(){
    this.fbServis.KdurumListele().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.KulDurumu = data;
    });
  }
  SitemiListele(){
    this.fbServis.SiteListele().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.Sitemi = data;
    });
  }
  TakasdListele(){
    this.fbServis.TakasListele().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.Takasd = data;
    });
  }
  TapudListele(){
    this.fbServis.TapuListele().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.Tapud = data;
    });
  }
  ATuruListele(){
    this.fbServis.TuruListele().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.ATuru = data;
    });
  }
  YakitdListele(){
    this.fbServis.YakitListele().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.Yakitd = data;
    });
  }
  YapiDListele(){
    this.fbServis.YdurumListele().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.YapiD = data;
    });
  }
  Kaydet(){
    var tarih = new Date();
    var user = JSON.parse(localStorage.getItem("user"));
    this.securun.uid = user.uid;
    var tarih = new Date();
    this.securun.kayTarih = tarih.getTime().toString();
    this.securun.duzTarih = tarih.getTime().toString();
    this.fbServis.UrunEkle(this.securun).then(d => {
      this.router.navigate(['/ilanim']);
    });
    }
  Vazgec() {
    this.securun = new Urun();
    this.securun.key = null;
  }
  OturumuKapat() {
    this.fbServis.OturumKapat().then(() => {
      localStorage.removeItem("user");
      this.router.navigate(['/giris']);
    });
  }
}
