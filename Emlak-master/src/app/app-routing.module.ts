import { UrundetayComponent } from './Component/urundetay/urundetay.component';
import { UrunlerComponent } from './Component/urunler/urunler.component';
import { YoneteciComponent } from './Component/yoneteci/yoneteci.component';

import { YpalComponent } from './Component/ypal/ypal.component';

import { FavoriComponent } from './Component/favori/favori.component';
import { IlanverComponent } from './Component/ilanver/ilanver.component';
import { KpanelComponent } from './Component/kpanel/kpanel.component';

import { UyeolComponent } from './Component/uyeol/uyeol.component';
import { GirisComponent } from './Component/Giris/Giris.component';

import { AnasayfaComponent } from './Component/Anasayfa/Anasayfa.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { KiralıkComponent } from './Component/Kiralık/Kiralık.component';
import { SatılıkComponent } from './Component/Satılık/Satılık.component';
import { IlanlarımComponent } from './Component/ilanlarım/ilanlarım.component';
import { UrundetayıduzenleComponent } from './Component/Urundetayıduzenle/Urundetayıduzenle.component';
import {AngularFireAuthGuard,redirectUnauthorizedTo} from'@angular/fire/auth-guard';

const redirectLogin = () => redirectUnauthorizedTo(['/giris']);
const redirectLoginin =() => redirectUnauthorizedTo(['/yonet']);
const routes: Routes = [
  {path:'', component:AnasayfaComponent},
  {path:'kiralık',component:KiralıkComponent},
  {path:'satılık', component:SatılıkComponent},
  {path:'giris', component:GirisComponent},
  {path:'uyeol',component:UyeolComponent},
  {path:'kpal/:id',component:KpanelComponent,canActivate:[AngularFireAuthGuard],data:{authGuardPipe: redirectLogin}},
  {path:'ypal',component:YpalComponent,canActivate:[AngularFireAuthGuard],data:{authguardPipe:redirectLoginin}},
  {path:'iver', component:IlanverComponent},
  {path:'ilanim', component:IlanlarımComponent},
  {path:'favori', component:FavoriComponent},
  {path:'yonet', component:YoneteciComponent},
  {path:'urunlerim', component:UrunlerComponent},
  {path:'udz',component:UrundetayıduzenleComponent},
  {path:'urund/:key',component:UrundetayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
