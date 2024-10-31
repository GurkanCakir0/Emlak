import { Router } from '@angular/router';
import { FbServisService } from './../../../services/fbServis.service';
import { Sonuc } from 'src/models/sonuc';
import { Uye } from './../../../models/uye';
import { Kategori } from 'src/models/kategori';
import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import { AnyTxtRecord } from 'dns';

@Component({
  selector: 'app-uyeol',
  templateUrl: './uyeol.component.html',
  styleUrls: ['./uyeol.component.css']
})
export class UyeolComponent implements OnInit {
  Kategoriler:Kategori[];
  Uyeler:any;
  secuye: Uye=new Uye();
  sonuc:Sonuc=new Sonuc();
  
  constructor(
    public fbServis: FbServisService,
    public router: Router
  ) { }

  ngOnInit() {
    this.UyeListele();
    this.secuye.key=null;
    this.kategorilistele();
  }
  kategorilistele(){
    this.fbServis.KategoriListele().snapshotChanges().pipe(
      map(changes =>
        changes.map(k =>
          ({key: k.payload.key, ...k.payload.val()})))
    ).subscribe(data => {
      this.Kategoriler =data;
    });
  }
  UyeListele(){
    this.fbServis.UyeListele().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.Uyeler = data;
    });
  }
  Kaydet(){
    this.fbServis.UyeOl(this.secuye).then(d => {
      d.user.updateProfile({
        displayName: this.secuye.adsoyad
      }).then();
      this.secuye.uid = d.user.uid;
      localStorage.setItem("user", JSON.stringify(d.user));
      this.UyeEkle();
    }, err => {
      this.sonuc.islem = false;
      this.sonuc.mesaj = "Hata Oluştu Tekrar Deneyiniz!";
    });
  }
  UyeEkle() {
    this.fbServis.UyeEkle(this.secuye).then(d => {
      this.router.navigate(['/giris']);
    });
  }
  Vazgec() {
    this.secuye = new Uye();
    this.secuye.key = null;
  }
  /*kategorilistele(){
    this.servis.kategorilistele().subscribe((d:Kategori[])=>{
      this.Kategoriler=d;
    })
  }*/
}
