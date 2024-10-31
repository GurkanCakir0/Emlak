import { FbServisService } from 'src/services/fbServis.service';
import { Component, OnInit } from '@angular/core';
import { Kategori } from 'src/models/kategori';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-Anasayfa',
  templateUrl: './Anasayfa.component.html',
  styleUrls: ['./Anasayfa.component.css']
})
export class AnasayfaComponent implements OnInit {
  Kategoriler:Kategori[];
  Urunler:any;
  ara: string = "";
  sira: string = "adres";
  constructor(
    public fbServis: FbServisService
    /*private AccountService:AccountService*/
  ) { }

  ngOnInit() {
    this.kategorilistele();
    this.UrunListele();
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

  Ara(d: string) {
    this.ara = d;
    this.UrunListele();
  }

}
