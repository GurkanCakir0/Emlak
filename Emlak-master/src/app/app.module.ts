import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { UrundetayComponent } from './Component/urundetay/urundetay.component';

import { FbServisService } from './../services/fbServis.service';
import { environment } from './../environments/environment';
import { UrunlerComponent } from './Component/urunler/urunler.component';
import { YoneteciComponent } from './Component/yoneteci/yoneteci.component';

import { YpalComponent } from './Component/ypal/ypal.component';
import { UrundetayıduzenleComponent } from './Component/Urundetayıduzenle/Urundetayıduzenle.component';
import { FavoriComponent } from './Component/favori/favori.component';
import { IlanverComponent } from './Component/ilanver/ilanver.component';
import { KpanelComponent } from './Component/kpanel/kpanel.component';

import { UyeolComponent } from './Component/uyeol/uyeol.component';
import { GirisComponent } from './Component/Giris/Giris.component';
import { AnasayfaComponent } from './Component/Anasayfa/Anasayfa.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ HttpClientModule}from'@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KiralıkComponent } from './Component/Kiralık/Kiralık.component';
import { SatılıkComponent } from './Component/Satılık/Satılık.component';
import { FormsModule, NgForm } from '@angular/forms';
import { DataService } from 'src/services/data.service';
import { IlanlarımComponent } from './Component/ilanlarım/ilanlarım.component';
import { AngularFireModule } from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { CKEditorModule } from 'ng2-ckeditor';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    AnasayfaComponent,
    KiralıkComponent,
    SatılıkComponent,
    GirisComponent,
    UyeolComponent,
    KpanelComponent,
    IlanverComponent,
    IlanlarımComponent,
    FavoriComponent,
    YpalComponent,YoneteciComponent,
    UrunlerComponent,
    UrundetayıduzenleComponent,
    UrundetayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    CKEditorModule 
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
