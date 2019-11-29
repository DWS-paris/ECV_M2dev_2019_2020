/* 
Inport
*/
  import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
  import { PostModel } from "../../models/post.model";
//

/* 
Desfinnition & export
*/
  @Component({
    selector: 'app-post',
    templateUrl: './post.component.html'
  })
  export class PostComponent implements OnInit {
    /* 
    Declaration
    */
      @Input() post: PostModel;
      @Output() sendPostId = new EventEmitter();
    //
    constructor() { }

    ngOnInit() {
    }

  }
//