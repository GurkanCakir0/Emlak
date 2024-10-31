import { Sonuc } from './../../../models/sonuc';
import { Component, OnInit } from '@angular/core';
import { Uye } from './../../../models/uye';
import { DataService } from 'src/services/data.service';
import { Kategori } from 'src/models/kategori';
import { ActivatedRoute, Router } from '@angular/router';
import { FbServisService } from 'src/services/fbServis.service';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-yoneteci',
  templateUrl: './yoneteci.component.html',
  styleUrls: ['./yoneteci.component.scss']
})
export class YoneteciComponent implements OnInit {
  Kategoriler:Kategori[];
  returnUrl="";
  returnUrl1="";
  model:Uye=new Uye();
  uid: string;
  sonuc: Sonuc = new Sonuc();
  secuye: Uye=new Uye();
  constructor(
    public servis:DataService,
    public route:ActivatedRoute,
    public router:Router,
    public fbservis: FbServisService,
  ) { }

  ngOnInit() {
    this.kategorilistele();
    var user = JSON.parse(localStorage.getItem("user"));
    this.uid = user.uid;
    this.returnUrl1=this.route.snapshot.queryParams['returnUrl']||'/uyesil';
  }
 /* girisyap(k:string,p:string){
    this.servis.UyeLogin(k,p).subscribe((d:Uye[])=>{
      if (d.length > 0) {
        var yetkiler=[];
        if (d[0].admin==1) {
          yetkiler.push("Admin");
        }else{
          yetkiler.push("Uye");
        }
        localStorage.setItem("token",this.servis.ParolaUret(64));
        localStorage.setItem("uyeYetkiler",JSON.stringify(yetkiler));
        this.router.navigateByUrl(this.returnUrl);
        this.router.navigateByUrl(this.returnUrl1);
      }
    })
  }*/
  girisyap(mail: string, parola: string){
    this.fbservis.OturumAc(mail, parola).then(d => {
      if (d.user.uid=="wqqLkRHj44Ow7iSSDlRg0Cn8vOL2") {
        localStorage.setItem("user", JSON.stringify(d.user));
        this.router.navigate(['/udz']);
      }
    }, err => {
      this.sonuc.islem=false;
      this.sonuc.mesaj = "E-Posta Adresi veya Parola Geçersizdir!";
    });
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

}
