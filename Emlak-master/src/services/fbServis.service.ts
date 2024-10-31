import { Router } from '@angular/router';
import { Kategori } from 'src/models/kategori';
import { YapiDurumu } from './../models/urundetayts/ydurumu';
import { Yakit } from './../models/urundetayts/yakit';
import { alan } from './../models/urundetayts/turu';
import { Tapu } from './../models/urundetayts/tapu';
import { Takas } from './../models/urundetayts/takas';
import { Site } from './../models/urundetayts/site';
import { KullanimDurumu } from './../models/urundetayts/kdurumu';
import { Esya } from './../models/urundetayts/esya';
import { Cephe } from './../models/urundetayts/cephe';
import { bulkat } from './../models/urundetayts/bkat';
import { Urun } from './../models/urun';
import { Uye } from './../models/uye';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { Favori } from 'src/models/favori';

@Injectable({
    providedIn: 'root'
  })
export class FbServisService{
    /* */
    private dbUye = '/Kayitlar';
    UrunRef: AngularFireList<Urun> = null;
    private dbUrun = '/Urunler';
    UyeRef: AngularFireList<Uye> = null;

    private dbfav ='/Favori';
    FavRef: AngularFireList<Favori> = null;
    /**/
    /* Ürün Detayı */
    private dbbkat = '/Bulundukat';
    Bkatref: AngularFireList<bulkat> = null;

    private dbcephe = '/Cephe';
    CepheRef: AngularFireList<Cephe> = null;

    private dbesya = '/Esya';
    EsyaRef: AngularFireList<Esya> = null;

    private dbkdurum = '/KullanımDurumu';
    KulRef: AngularFireList<KullanimDurumu> = null;

    private dbsite = '/Site';
    siteRef: AngularFireList<Site> = null;

    private dbtakas = '/Takas';
    TakasRef: AngularFireList<Takas> = null;

    private dbtapu = '/Tapu';
    TapuRef: AngularFireList<Tapu> = null;

    private dbturu = '/Turu';
    TuruRef: AngularFireList<alan> = null;

    private dbyakit = '/Yakit';
    YakitRef: AngularFireList<Yakit> = null;

    private dbydurum = '/YapıDurumu';
    YapıRef: AngularFireList<YapiDurumu> = null;

    private dbkategori ='/Kategori';
    Kategoriref: AngularFireList<Kategori> = null;

    constructor(
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    public router:Router,
    
  ) {
    this.UyeRef = db.list(this.dbUye);
    this.UrunRef = db.list(this.dbUrun);
    this.Kategoriref = db.list(this.dbkategori)
    this.Bkatref = db.list(this.dbbkat);
    this.CepheRef = db.list(this.dbcephe);
    this.EsyaRef = db.list(this.dbesya);
    this.KulRef = db.list(this.dbkdurum);
    this.siteRef = db.list(this.dbsite);
    this.TakasRef = db.list(this.dbtakas);
    this.TapuRef = db.list(this.dbtapu);
    this.TuruRef = db.list(this.dbturu);
    this.YakitRef = db.list(this.dbyakit);
    this.YapıRef = db.list(this.dbydurum);
    this.FavRef = db.list(this.dbfav);
  }
  /*Oturum Açma başlangıç*/
  OturumAc(mail: string, parola: string) {
    return this.afAuth.signInWithEmailAndPassword(mail, parola);
  }
  OturumKapat() {
    return this.afAuth.signOut();
  }
  /*Oturum Açma bitiş*/
   /*Uyeler Firebase servis başlangıç */
  UyeListele(){
    return this.UyeRef;
  }
  UyeOl(uye: Uye) {
    return this.afAuth.createUserWithEmailAndPassword(uye.mail, uye.parola);
  }
  /*UyeOlma(uye: Uye) {
     
    return this.afAuth.user;
  }*/
  UyeEkle(r:Uye){
    return this.UyeRef.push(r);
  }
  UyeDuzenle(U: Uye) {
    return this.UyeRef.update(U.key,U);
  }
  UyeSil(key: string) {
    return this.UyeRef.remove(key);
}
  /*Uyeler Firebase servis bitiş*/

  /*Urunler Firebase servis Başlangıç*/
  UrunListele(){
    return this.UrunRef;
  }
  UrunListeleByUID(uid: string) {
    return this.db.list("/Urunler", q => q.orderByChild("uid").equalTo(uid));
  }
  /*UrunListeleByalan(uid: string) {
    return this.db.list("/Urunler", q => q.orderByChild("alan").equalTo(alan));
  }*/
  UrunByKey(key: string) {
    return this.db.object("/Urunler/" + key);
  }
  UrunEkle(urun:Urun){
    return this.UrunRef.push(urun);
  }
  UrunDuzenle(urun:Urun){
    return this.UrunRef.update(urun.key,urun);
  }
  UrunSil(key:string){
    return this.UrunRef.remove(key);
  }
  /*Urunler Firebase servis bitiş*/
  /*Urunler Detay Firebase servis Başlangıç*/
  BkatListele(){
    return this.Bkatref;
  }
  /** Cephe Başlangıç */
  CepheListele(){
    return this.CepheRef;
  }
  CepheEkle(cep:Cephe){
    return this.CepheRef.push(cep);
  }
  CepheSil(key:string){
    return this.CepheRef.remove(key);
  }
  CepheDuzenle(cep:Cephe){
    return this.CepheRef.update(cep.key,cep);
  }
/** Cephe Bitiş */


/**Eşya Başlangıç */
  EsyaListele(){
    return this.EsyaRef;
  }
  EsyaEkle(esyam:Esya){
    return this.EsyaRef.push(esyam);
  }
  EsyaDuzenle(esyam:Esya){
    return this.EsyaRef.update(esyam.key,esyam);
  }
  EsyaSil(key:string){
    return this.EsyaRef.remove(key);
  }
  /**Eşya Bitiş */

  /**Kullanım Durumu Başlangıç */
  KdurumListele(){
    return this.KulRef;
  }
  KdurumEkle(kld:KullanimDurumu){
    return this.KulRef.push(kld);
  }
  KdurumDuzenle(kld:KullanimDurumu){
    return this.KulRef.update(kld.key,kld);
  }
  KdurumSil(key:string){
    return this.KulRef.remove(key);
  }
  /**Kullanım Durumu Bitiş */

  /* Site Başlangıç */
  SiteListele(){
    return this.siteRef;
  }
  SiteEkle(st:Site){
    return this.siteRef.push(st);
  }
  SiteDuzenle(st:Site){
    return this.siteRef.update(st.key,st);
  }
  SiteSil(key:string){
    return this.siteRef.remove(key);
  }
  /* Site Bitiş */

  /**Takas Başlangıç */
  TakasListele(){
    return this.TakasRef;
  }
  TakasEkle(tks:Takas){
    return this.TakasRef.push(tks);
  }
  TakasDuzenle(tks:Takas){
    return this.TakasRef.update(tks.key,tks);
  }
  TakasSil(key:string){
    return this.TakasRef.remove(key);
  }
  /**Takas Bitiş */

  /**Tapu Başlangıç */
  TapuListele(){
    return this.TapuRef;
  }
  TapuEkle(tp:Tapu){
    return this.TapuRef.push(tp);
  }
  TapuDuzenle(tp:Tapu){
    return this.TapuRef.update(tp.key,tp);
  }
  TapuSil(key:string){
    return this.TapuRef.remove(key);
  }
  /**Tapu Bitiş */

  /**Alan Turu Başlangıç */
  TuruListele(){
    return this.TuruRef;
  }
  TuruEkle(at:alan){
    return this.TuruRef.push(at);
  }
  TuruDuzenle(at:alan){
    return this.TuruRef.update(at.key,at);
  }
  TuruSil(key:string){
    return this.TuruRef.remove(key);
  }
  /**Alan Turu Bitiş */

  /**Yakıt Başlangıç */
  YakitListele(){
    return this.YakitRef;
  }
  YakitEkle(yk:Yakit){
    return this.YakitRef.push(yk);
  }
  YakitDuzenle(yk:Yakit){
    return this.YakitRef.update(yk.key,yk);
  }
  YakitSil(key:string){
    return this.YakitRef.remove(key);
  }
  /**Yakıt Bitiş */

  /**Yapı Durumu  Başlangıç*/
  YdurumListele(){
    return this.YapıRef;
  }
  YdurumEkle(yd:YapiDurumu){
    return this.YapıRef.push(yd);
  }
  YdurumDuzenle(yd:YapiDurumu){
    return this.YapıRef.update(yd.key,yd);
  }
  YdurumSil(key:string){
    return this.YapıRef.remove(key);
  }
  /**Yapı Durumu  Bitiş*/
  /*Urunler Detay Firebase servis bitiş*/

  /* Kategori Başlangıç */
  KategoriListele(){
    return this.Kategoriref;
  }
  /*KategoriListeleByUID(key: string) {
    return this.db.list("/Kategori", q => q.orderByChild("key").equalTo(key));
  }*/
  KategoriEkle(Kategoriler:Kategori){
    return this.Kategoriref.push(Kategoriler);
  }
  KategoriDuzenle(Kategoriler:Kategori){
    return this.Kategoriref.update(Kategoriler.key,Kategoriler);
  }
  KategoriSil(key:string){
    return this.Kategoriref.remove(key);
  }
  /*KAtegori Bitiş */

  /* Ekstre oturum açma */

  /* Ekstre Oturum Açma bitiş */

  /*Favori İşlemleri Başlangıç */
  FavoriListele(){
    return this.FavRef;
  }
  FavoriListeleByUID(uid: string) {
    return this.db.list("/Favori", q => q.orderByChild("uid").equalTo(uid));
  }
  FavoriEkle(Favorim:Favori){
    return this.FavRef.push(Favorim);
  }
  FavoriDuzenle(Favorim:Favori){
    return this.FavRef.update(Favorim.key,Favorim);
  }
  FavoriSil(key:string){
    return this.FavRef.remove(key);
  }
  /*FAvori işlemleri Bitiş */
}
