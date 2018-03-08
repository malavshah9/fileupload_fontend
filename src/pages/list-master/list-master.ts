import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';


import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ViewChild } from '@angular/core';


@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
  
export class ListMasterPage {
 
  
@ViewChild("fileInput") fileInput;
selectedFile: File = null;
constructor(public navCtrl: NavController,private http:HttpClient) {
   
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  onFileSelected(value) {
    this.selectedFile = <File>value.target.files[0];

  }
  onUpload() {
    const fd = new FormData();

    fd.append("image", this.selectedFile, this.selectedFile.name);

    this.http.post("http://localhost:3000/imgs/", fd)
    .subscribe(res => {
      console.log(res);
    });
  }
  onAdd(){
    this.fileInput.nativeElement.click();
  }
  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  /*
  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }*/

  /**
   * Delete an item from the list of items.
   */
  /*deleteItem(item) {
    this.items.delete(item);
  }
*/
  /**
   * Navigate to the detail page for this item.
   */
  /*openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }*/
}
