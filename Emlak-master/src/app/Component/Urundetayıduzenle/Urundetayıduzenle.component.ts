import { Kategori } from './../../../models/kategori';
import { AngularFireAuth } from '@angular/fire/auth';
import { Uye } from './../../../models/uye';
import { YapiDurumu } from './../../../models/urundetayts/ydurumu';
import { Yakit } from './../../../models/urundetayts/yakit';

import { alan } from './../../../models/urundetayts/turu';
import { Tapu } from './../../../models/urundetayts/tapu';
import { Takas } from './../../../models/urundetayts/takas';
import { Site } from './../../../models/urundetayts/site';
import { KullanimDurumu } from './../../../models/urundetayts/kdurumu';
import { Esya } from './../../../models/urundetayts/esya';
import { Cephe } from './../../../models/urundetayts/cephe';
import { bulkat } from './../../../models/urundetayts/bkat';
import { Router } from '@angular/router';
import { FbServisService } from './../../../services/fbServis.service';
import { Sonuc } from './../../../models/sonuc';
import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import { Urun } from 'src/models/urun';
@Component({
  selector: 'app-Urundetayıduzenle',
  templateUrl: './Urundetayıduzenle.component.html',
  styleUrls: ['./Urundetayıduzenle.component.css']
})
export class UrundetayıduzenleComponent implements OnInit {
  seccephe: Cephe=new Cephe();
  secesya:Esya=new Esya();
  seckul:KullanimDurumu=new KullanimDurumu();
  secsite:Site=new Site();
  sectakas:Takas=new Takas();
  sectapu:Tapu=new Tapu();
  secalan:alan=new alan();
  secyakit:Yakit=new Yakit();
  secyap:YapiDurumu=new YapiDurumu();
  secuyem: Uye=new Uye();
  seckat: Kategori=new Kategori();
  securun: Urun=new Urun();
  
  Urunler:any;
  Kategoriler:any;
  sonuc:Sonuc=new Sonuc();
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
  uyeler:any;
  
  silme: boolean = false;
  constructor(
    public fbServis: FbServisService,
    public router: Router,
    public afAuth:AngularFireAuth
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
    this.UyeListele();
    this.kategorilistele();
    this.UrunListele();
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
  CepheKaydet(){
    if (this.seccephe.key == null) {
      this.fbServis.CepheEkle(this.seccephe).then(() => {
        this.sonuc.islem = true;
        this.sonuc.mesaj = "Kayıt Eklendi";
      });
    }
    else {
      this.fbServis.CepheDuzenle(this.seccephe).then(() => {
        this.sonuc.islem = true;
        this.sonuc.mesaj = "Kayıt Düzenlendi";
        
      });
    }
  }
  CepheDuzenle(cep:Cephe) {
    Object.assign(this.seccephe, cep);
  }
  CepheSil(cep:Cephe) {
    this.fbServis.CepheSil(cep.key).then(d => {
    });
  }
  EsyaKaydet(){
    if (this.secesya.key == null) {
      this.fbServis.EsyaEkle(this.secesya).then(() => {
        this.sonuc.islem = true;
        this.sonuc.mesaj = "Kayıt Eklendi";
      });
    }
    else {
      this.fbServis.EsyaDuzenle(this.secesya).then(() => {
        this.sonuc.islem = true;
        this.sonuc.mesaj = "Kayıt Düzenlendi";
        
      });
    }
  }
  EsyaDuzenle(esy:Esya) {
    Object.assign(this.secesya, esy);
  }
  EsyaSil(esy:Esya) {
    this.fbServis.EsyaSil(esy.key).then(d => {
    });
  }
  KulKaydet(){
    if (this.seckul.key == null) {
      this.fbServis.KdurumEkle(this.seckul).then(() => {
        this.sonuc.islem = true;
        this.sonuc.mesaj = "Kayıt Eklendi";
      });
    }
    else {
      this.fbServis.KdurumDuzenle(this.seckul).then(() => {
        this.sonuc.islem = true;
        this.sonuc.mesaj = "Kayıt Düzenlendi";
        
      });
    }
  }
  KulDuzenle(kld:KullanimDurumu) {
    Object.assign(this.seckul, kld);
  }
  KulSil(kld:KullanimDurumu) {
    this.fbServis.KdurumSil(kld.key).then(d => {
    });
  }
  SiteKaydet(){
    if (this.secsite.key == null) {
      this.fbServis.SiteEkle(this.secsite).then(() => {
        this.sonuc.islem = true;
        this.sonuc.mesaj = "Kayıt Eklendi";
      });
    }
    else {
      this.fbServis.SiteDuzenle(this.secsite).then(() => {
        this.sonuc.islem = true;
        this.sonuc.mesaj = "Kayıt Düzenlendi";
        
      });
    }
  }
  SiteDuzenle(st:Site) {
    Object.assign(this.secsite, st);
  }
  SiteSil(st:Site) {
    this.fbServis.SiteSil(st.key).then(d => {
    });
  }
  TakKaydet(){
    if (this.sectakas.key == null) {
      this.fbServis.TakasEkle(this.sectakas).then(() => {
        this.sonuc.islem = true;
        this.sonuc.mesaj = "Kayıt Eklendi";
      });
    }
    else {
      this.fbServis.TakasDuzenle(this.sectakas).then(() => {
        this.sonuc.islem = true;
        this.sonuc.mesaj = "Kayıt Düzenlendi";
        
      });
    }
  }
  TakDuzenle(tks:Takas) {
    Object.assign(this.sectakas, tks);
  }
  TakSil(tks:Takas) {
    this.fbServis.TakasSil(tks.key).then(d => {
    });
  }
  TapuKaydet(){
    if (this.sectapu.key == null) {
      this.fbServis.TapuEkle(this.sectapu).then(() => {
        this.sonuc.islem = true;
        this.sonuc.mesaj = "Kayıt Eklendi";
      });
    }
    else {
      this.fbServis.TapuDuzenle(this.sectapu).then(() => {
        this.sonuc.islem = true;
        this.sonuc.mesaj = "Kayıt Düzenlendi";
        
      });
    }
  }
  TapuDuzenle(tp:Tapu) {
    Object.assign(this.sectapu, tp);
  }
  TapuSil(tp:Tapu) {
    this.fbServis.TapuSil(tp.key).then(d => {
    });
  }
  AlanKaydet(){
    if (this.secalan.key == null) {
      this.fbServis.TuruEkle(this.secalan).then(() => {
        this.sonuc.islem = true;
        this.sonuc.mesaj = "Kayıt Eklendi";
      });
    }
    else {
      this.fbServis.TuruDuzenle(this.secalan).then(() => {
        this.sonuc.islem = true;
        this.sonuc.mesaj = "Kayıt Düzenlendi";
        
      });
    }
  }
  AlanDuzenle(at:alan) {
    Object.assign(this.secalan, at);
  }
  AlanSil(at:alan) {
    this.fbServis.TuruSil(at.key).then(d => {
    });
  }
  YakitKaydet(){
    if (this.secyakit.key == null) {
      this.fbServis.YakitEkle(this.secyakit).then(() => {
        this.sonuc.islem = true;
        this.sonuc.mesaj = "Kayıt Eklendi";
      });
    }
    else {
      this.fbServis.YakitDuzenle(this.secyakit).then(() => {
        this.sonuc.islem = true;
        this.sonuc.mesaj = "Kayıt Düzenlendi";
        
      });
    }
  }
  YakitDuzenle(yk:Yakit) {
    Object.assign(this.secyakit, yk);
  }
  YakitSil(yk:Yakit) {
    this.fbServis.YakitSil(yk.key).then(d => {
    });
  }
  YapiKaydet(){
    if (this.secyap.key == null) {
      this.fbServis.YdurumEkle(this.secyap).then(() => {
        this.sonuc.islem = true;
        this.sonuc.mesaj = "Kayıt Eklendi";
      });
    }
    else {
      this.fbServis.YdurumDuzenle(this.secyap).then(() => {
        this.sonuc.islem = true;
        this.sonuc.mesaj = "Kayıt Düzenlendi";
        
      });
    }
  }
  YapiDuzenle(yp:YapiDurumu) {
    Object.assign(this.secyap, yp);
  }
  YapiSil(yp:YapiDurumu) {
    this.fbServis.YdurumSil(yp.key).then(d => {
    });
  }
/**---------------------------------------------- */
  /**---------------------------------------------- */
  UyeListele(){
    this.fbServis.UyeListele().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.uyeler = data;
    });
  }
  Sil(U: Uye) {
    this.fbServis.UyeSil(U.key).then(d => {
      this.Authsil();
      this.sonuc.islem = true;
      this.sonuc.mesaj = "Kayıt Silindi";
    }, err => {
      this.sonuc.islem = false;
      this.sonuc.mesaj = "Hata Oluştu";
    });
  }
  Authsil(){
    this.afAuth.authState.subscribe(d => {
      d.delete()
        .then(_ => console.log('deleted!'));
    });
  }
  /**---------------------------------------------- */
  /**---------------------------------------------- */
 /**---------------------------------------------- */
  /**-----------KATEGORİ BAŞLANGIÇ----------------------------------- */
  kategorilistele(){
    this.fbServis.KategoriListele().snapshotChanges().pipe(
      map(changes =>
        changes.map(k =>
          ({key: k.payload.key, ...k.payload.val()})))
    ).subscribe(data => {
      this.Kategoriler =data;
    });
  }
  KatKaydet(){
    var tarih = new Date();
    this.seckat.duzTarih = tarih.getTime().toString();

    if (this.seckat.key == null) {
      this.seckat.kayTarih = tarih.getTime().toString();
      this.fbServis.KategoriEkle(this.seckat).then(() => {
        this.sonuc.islem = true;
        this.sonuc.mesaj = "Kayıt Eklendi";
      });
    }
    else {
      this.fbServis.KategoriDuzenle(this.seckat).then(() => {
        this.sonuc.islem = true;
        this.sonuc.mesaj = "Kayıt Düzenlendi";
        
      });
    }
  }
  KatDuzenle(kat:Kategori) {
    Object.assign(this.seckat, kat);
  }
  KatSil(K:Kategori) {
    this.fbServis.KategoriSil(K.key).then(d => {
    });
  }
    /**-----------KATEGORİ BİTİŞ----------------------------------- */
      /**-----------KATEGORİ BİTİŞ----------------------------------- */
        /**-----------KATEGORİ BİTİŞ----------------------------------- */
  
    /**-----------Ürünler BAŞLANGIÇ----------------------------------- */
    UrunListele(){
      this.fbServis.UrunListele().snapshotChanges().pipe(
        map(changes =>
          changes.map(c =>
            ({ key: c.payload.key, ...c.payload.val() })
          )
        )
      ).subscribe(data => {
        this.Urunler = data;
      });
    }
    UrunSil(U: Urun) {
      this.fbServis.UrunSil(U.key).then(d => {
        this.sonuc.islem = true;
        this.sonuc.mesaj = "Kayıt Silindi";
        this.silme = false;
      });
    }
        /**-----------Ürünler BİTİŞ----------------------------------- */
      /**-----------Ürünler BİTİŞ----------------------------------- */
        /**-----------Ürünler BİTİŞ----------------------------------- */
  OturumuKapat() {
    this.fbServis.OturumKapat().then(() => {
      localStorage.removeItem("user");
      this.router.navigate(['/yonet']);
    });
  }
}
