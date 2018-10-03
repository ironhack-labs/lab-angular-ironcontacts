import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading = true;
  movies: Array<any> = [];
  imgs = {
    'for-babies': "https://media.giphy.com/media/9kKlRx7qpUGze/giphy.gif",
    'sleep-alone': "https://media.giphy.com/media/l41lJQLdSdoezQ1I4/giphy.gif",
    'cant-look': "https://media.giphy.com/media/51Uiuy5QBZNkoF3b2Z/giphy.gif"
  };
  
  newTitle = '';
  newCategory = '';
  
  constructor() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  };

  handleAddClick() {
    this.movies.push({
      title: this.newTitle,
      category: this.newCategory
    });
    this.newTitle = '';
    this.newCategory = '';
  }
};
