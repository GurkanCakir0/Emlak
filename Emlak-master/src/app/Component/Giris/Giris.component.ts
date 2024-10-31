import { Sonuc } from './../../../models/sonuc';
import { Uye } from './../../../models/uye';
import { DataService } from 'src/services/data.service';
import { Kategori } from 'src/models/kategori';
import { Component, OnInit } from '@angular/core';
import { SrvRecord } from 'dns';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FbServisService } from 'src/services/fbServis.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-Giris',
  templateUrl: './Giris.component.html',
  styleUrls: ['./Giris.component.css']
})
export class GirisComponent implements OnInit {
  Kategoriler:Kategori[];
  sonuc: Sonuc = new Sonuc();
  constructor(
    public fbservis: FbServisService,
    public router: Router
    /*private AccountService:AccountService*/
  ) { }

  ngOnInit() {
    this.kategorilistele();
  }
  kategorilistele(){
    this.fbservis.KategoriListele().snapshotChanges().pipe(
      map(changes =>
        changes.map(k =>
          ({key: k.payload.key, ...k.payload.val()})))
    ).subscribe(data => {
      this.Kategoriler =data;
    });
  }
  girisyap(mail: string, parola: string){
    this.fbservis.OturumAc(mail, parola).then(d => {
      if (d.user) {
        localStorage.setItem("user", JSON.stringify(d.user));
        this.router.navigate(['/kpal/:id']);
      }
    }, err => {
      this.sonuc.islem=false;
      this.sonuc.mesaj = "E-Posta Adresi veya Parola Geçersizdir!";
    });
  }
}
