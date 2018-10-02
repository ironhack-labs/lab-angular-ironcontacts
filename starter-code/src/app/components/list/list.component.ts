import { Component, OnInit } from '@angular/core';
import tasks from '../tasks';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  tasks: Array<any> = [];
  
  newTask: any = {
    title: 'What do you have to do?',
    description: 'Why?',
    date: new Date()
  };

  imgs = {
    'hobby': 'https://images.unsplash.com/photo-1522410818928-5522dacd5066?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cc8bfef72ad337835491e65cc070eafb&auto=format&fit=crop&w=2250&q=80',
    'work': 'https://images.unsplash.com/photo-1531901587543-26d76c1e918c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eabae348f95beb15594bf1285dbeb265&auto=format&fit=crop&w=2251&q=80',
    'friends': 'https://images.unsplash.com/photo-1498673394965-85cb14905c89?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a4756713fe63d4438b4f9cc9748e597f&auto=format&fit=crop&w=2250&q=80'
  }

  moods = {
    'happy': 'https://clipart.info/images/ccovers/1484942352ios-emoji-grimacing-face.png',
    'excited': 'https://www.telegraph.co.uk/content/dam/technology/2017/11/01/emoji_update_2017_12_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.png?imwidth=450',
    'sad': 'https://cdn.shopify.com/s/files/1/1061/1924/products/Loudly_Crying_Face_Emoji_large.png?v=1480481054',
    'angry': 'https://cdn.shopify.com/s/files/1/1061/1924/files/Very_Mad_Emoji.png?9898922749706957214'
  };

  constructor() { }

  ngOnInit() {
    this.tasks = tasks;
  }

  handleAddClick() {
    console.log("Add tasks has been called");
    this.tasks.push(this.newTask);
    this.newTask = {};
  }

}
