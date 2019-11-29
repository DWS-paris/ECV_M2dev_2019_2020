/* 
Import
*/
  // Angular
  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute } from "@angular/router";

  // Inner
  import { CrudService } from "../../services/crud/crud.service";
  import { PostModel } from "../../models/post.model";
//

/* 
Definition & export
*/
  @Component({
    selector: 'app-post-page',
    templateUrl: './post-page.component.html'
  })
  export class PostPageComponent implements OnInit {

    /* 
    Declaration
    */
      public post: PostModel;
      private postId: String;
    //
    constructor(
      private CrudService: CrudService,
      private ActivatedRoute: ActivatedRoute
    ) { }

    /* 
    Methode
    */
      private getPostContent = ( id: String ) => {
        this.CrudService.readOneItem('posts', id)
        .then( apiResponse => this.post = apiResponse )
        .catch( apiResponse => console.error(apiResponse) );
      }
    //

    /* 
    Hooks
    */
      ngOnInit() {
        this.postId = this.ActivatedRoute.snapshot.params['id'];
        this.getPostContent(this.postId);
      }
    //

  }
//