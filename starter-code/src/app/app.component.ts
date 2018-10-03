import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  loading = true;
  latteArt: Array<any> = [];

  imgs = {
    'hearty': 'https://static1.squarespace.com/static/54318ac9e4b08711a4a470ed/t/5bb3ccfae5e5f089d1fa192c/1538510078321/IMG_0075.JPG?format=2500w',
    'leafy': 'https://static1.squarespace.com/static/54318ac9e4b08711a4a470ed/t/5bb46a04e5e5f0cff4ded106/1538550282508/?format=2500w',
    'swany': 'https://static1.squarespace.com/static/54318ac9e4b08711a4a470ed/t/5bb469e3104c7b4014789a7a/1538550247001/84151D73-5DA5-4E1D-A925-99EDBBF7671F.JPG?format=2500w'
    'flowery': 'https://static1.squarespace.com/static/54318ac9e4b08711a4a470ed/t/5bb469c99140b716f3d474c8/1538550234741/?format=2500w'
  }
  opener: '';
  categoryExpr: '';
  ending: '';
  category: '';

  constructor() {

    setTimeout(() => {
      this.loading = false;
    }, 1000);

    // this.latteArt.push({
    //   name: 'Jonathan',
    //   opener: 'you look so very',
    //   categoryExpr: 'minimalistic',
    //   ending: 'today',
    // })

  }

  handleAddClick() {
    this.latteArt.push({
      name: this.newName,
      opener: 'you look so very',
      categoryExpr: this.latteArtImg,
      ending: 'today',
      category: this.latteArtImg
    });
    this.newName = '';
    // this.latteArt = '';
  }

}
