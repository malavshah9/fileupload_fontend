import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';
import { mail } from "./classmail";

import {HttpClient,HttpHeaders} from '@angular/common/http';



@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentItems: any = [];
  
  constructor(public navCtrl: NavController,private http:HttpClient, public navParams: NavParams, public items: Items) { 

    this.email="";
    this.contents="";
  }
  email:string;
  contents:string;
  m:mail;
  
  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentItems = [];
      return;
    }
    this.currentItems = this.items.query({
      name: val
    });
  }
  
  sendmail(){
    if(this.email!=null){
      this.m=new mail(this.email,this.contents);
      let body= JSON.stringify(this.m);
      return this.http.post("http://localhost:3000/mail/",body,{headers: new HttpHeaders().set('Content-Type','application/json')})
      .subscribe((data)=>{
        console.log(data);
      });
   
    }
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }

}
