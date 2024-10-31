import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Urun } from 'src/models/urun';
import { DataService } from './../../../services/data.service';
import { Sonuc } from 'src/models/sonuc';
import {map} from 'rxjs/operators';
import { FbServisService } from 'src/services/fbServis.service';
@Component({
  selector: 'app-urunler',
  templateUrl: './urunler.component.html',
  styleUrls: ['./urunler.component.scss']
})
export class UrunlerComponent implements OnInit {
  Urunler:any;
  securun: Urun=new Urun();
  sonuc:Sonuc=new Sonuc();
  silme: boolean = false;
  constructor(
    public servis:DataService,
    public fbServis: FbServisService,
    public router: Router
  ) { }

  ngOnInit() {
    this.UrunListele();
  }
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
  Sil(U: Urun) {
    this.fbServis.UrunSil(U.key).then(d => {
      this.sonuc.islem = true;
      this.sonuc.mesaj = "Kayıt Silindi";
      this.silme = false;
    });
  }
  Vazgec() {
    this.securun = new Urun();
    this.securun.key = null;
  }
  OturumuKapat() {
    this.fbServis.OturumKapat().then(() => {
      localStorage.removeItem("user");
      this.router.navigate(['/yonet']);
    });
  }
}
