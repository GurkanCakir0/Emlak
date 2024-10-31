import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Sonuc } from 'src/models/sonuc';
import { Uye } from './../../../models/uye';
import { FbServisService } from 'src/services/fbServis.service';
@Component({
  selector: 'app-ypal',
  templateUrl: './ypal.component.html',
  styleUrls: ['./ypal.component.scss']
})
export class YpalComponent implements OnInit {
  katId: number;  
  Uyeler:Uye[];
  secuye: Uye=new Uye();
  sonuc:Sonuc=new Sonuc();
  constructor(
    public fbservis: FbServisService,
    public router: Router
  ) { }

  ngOnInit() {
  }
  OturumuKapat() {
    this.fbservis.OturumKapat().then(() => {
      localStorage.removeItem("user");
      this.router.navigate(['/yonet']);
    });
  }
}
