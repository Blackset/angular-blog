import { Component,Input, OnInit } from '@angular/core';
import { getRenderedText } from '@angular/core/src/render3';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  constructor() { }
 
  
  @Input() postTitle : string;
  @Input() postContent: string;
  @Input() postCreatedAt: Date;
  @Input() postLoveIts: number;
  
  ngOnInit() {
  }

  onLoveIt() {

    this.postLoveIts++
    ;
     }

     onDontLoveIt() {

      this.postLoveIts--
      ;
       }
  
       getColor(){

        if (this.postLoveIts >0){
          return  'green'
        } 
        ;
        if (this.postLoveIts <0){
          return  'red'
        } 
       }

}
