import { FbServisService } from 'src/services/fbServis.service';

import { oda } from '../../../models/oda';
import { DataService } from 'src/services/data.service';
import { Il } from './../../../models/iller';
import { Component, OnInit } from '@angular/core';
import { Kategori } from 'src/models/kategori';
import { Urun } from 'src/models/urun';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-Satılık',
  templateUrl:'./Satılık.component.html',
  styleUrls: ['./Satılık.component.css']
})
export class SatılıkComponent implements OnInit {
  Kategoriler:any;
  Urunler:any;
  iller:Il[];
  Odalar:oda[];
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
