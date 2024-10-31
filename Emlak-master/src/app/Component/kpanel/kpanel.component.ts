import { Router } from '@angular/router';
import { FbServisService } from 'src/services/fbServis.service';
import { DataService } from 'src/services/data.service';
import { Kategori } from 'src/models/kategori';
import { Component, OnInit } from '@angular/core';
import { Urun } from 'src/models/urun';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-kpanel',
  templateUrl: './kpanel.component.html',
  styleUrls: ['./kpanel.component.scss']
})
export class KpanelComponent implements OnInit {
  Kategoriler:Kategori[];
  Urunler:Urun[];
  constructor(
    public fbservis: FbServisService,
    public router: Router
  ) { }

  ngOnInit() {
    this.UrunListele();
  }
  UrunListele(){
    this.fbservis.UrunListele().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.Urunler = data;
    });
  }
  OturumuKapat() {
    this.fbservis.OturumKapat().then(() => {
      localStorage.removeItem("user");
      this.router.navigate(['/giris']);
    });
  }
}
