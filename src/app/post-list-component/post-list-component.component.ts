import { Component,Input, OnInit } from '@angular/core';
import { getRenderedText } from '@angular/core/src/render3';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  constructor() { }
  header = 'mon-blog';
  title2 = 'Mes posts';
  loveIts= 0;
  @Input() postTitle : string;
  @Input() postContent: string;
  @Input() postCreatedAt: Date;
  
  ngOnInit() {
  }

  onLoveIt() {

    this.loveIts++
    ;
     }

     onDontLoveIt() {

      this.loveIts--
      ;
       }
  
       getColor(){

        if (this.loveIts >0){
          return  'green'
        } 
        ;
        if (this.loveIts >0){
          return  'red'
        } 
       }

}
