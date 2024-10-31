import { FbServisService } from 'src/services/fbServis.service';
import { Favori } from './../../../models/favori';
import { oda } from '../../../models/oda';
import { Il } from './../../../models/iller';
import { Component, OnInit } from '@angular/core';
import { Kategori } from 'src/models/kategori';
import { Urun } from 'src/models/urun';
import { DataService } from 'src/services/data.service';
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
import { Sonuc } from 'src/models/sonuc';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-Kiralık',
  templateUrl:'./Kiralık.component.html',
  styleUrls: ['./Kiralık.component.css']
})
export class KiralıkComponent implements OnInit {
  Kategoriler:Kategori[];
  Urunler:Urun[];
  iller:Il[];
  Odalar:oda[];
  BulKat:bulkat[];
  CepheYon:Cephe[];
  Esyad:Esya[];
  KulDurumu:KullanimDurumu[];
  Sitemi:Site[];
  Takasd:Takas[];
  Tapud:Tapu[];
  ATuru:alan[];
  Yakitd:Yakit[];
  YapiD:YapiDurumu[];
  securun: Favori=new Favori();
  sonuc:Sonuc=new Sonuc();
  constructor(
    public servis:DataService,
    public fbServis: FbServisService
  ) { }

  ngOnInit() {
    this.kategorilistele();
    this.UrunListele();
  }
  addEventHandler(){
    let element = document.getElementsByClassName('ps__rail-y')[0] as HTMLElement;
    element.addEventListener('click', this.scroll, true);
  }
  
  scroll(e:Event){
    e.stopPropagation();
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
}