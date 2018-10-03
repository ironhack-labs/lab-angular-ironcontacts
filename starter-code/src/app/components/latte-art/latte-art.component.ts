import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latte-art',
  templateUrl: './latte-art.component.html',
  styleUrls: ['./latte-art.component.scss']
})
export class LatteArtComponent implements OnInit {
  loading = true; 
  latteArt: Array<any> = [];

  constructor() {
  
  }
  
  ngOnInit() {
  }

}
