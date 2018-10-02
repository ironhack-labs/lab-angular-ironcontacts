import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading = true;
  gins: Array<any> = [];
  imgs = {
    'japanese': 'https://drinks-dvq6ncf.netdna-ssl.com//wordpress/wp-content/uploads/2018/01/Labdanum-copy-364x640.jpg',
    'denmark': 'https://www.whisky.dk/images/Copenhagen_orange_Gin__small_batch_danish_gin-p.jpg',
    'scottish': 'https://img.thewhiskyexchange.com/900/gin_edi1.jpg'
};

  newBottleOne = '';
  // newBottleTwo = '';
  newCategory = '';

  constructor() {
    setTimeout(() => {
      this.loading = false;
    }, 1000)
  }

  handleAddClick() {
    this.gins.push({
      lineOne: this.newBottleOne,
      category: this.newCategory
    });
    this.newBottleOne = '';
    this.newCategory = '';
  }
}
