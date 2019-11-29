/* 
Imports
*/
  // Angular
  import { Component, OnInit } from '@angular/core';
  import { Router } from "@angular/router";

  // Inner
  import { CrudService } from "../../services/crud/crud.service";
  import { PostModel } from "../../models/post.model";
//

/* 
Definition & export
*/
  @Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html'
  })
  export class HomePageComponent implements OnInit {
    /* 
    Déclarations
    */
      public postCollection: Array<PostModel>;
    //
    constructor(
      private CrudService: CrudService,
      private Router: Router,
    ) { }

    /* 
    Methods
    */
      private getPosts = () => {
        this.CrudService.readItem('posts')
        .then( apiResponse => {
          this.postCollection = apiResponse
        })
        .catch( apiResponse => {
          console.error(apiResponse)
        })
      }

      public openPostPage = ( event: any ) => {
        event.action === 'read'
        ? this.Router.navigateByUrl(`/post/${event.id}`)
        : this.Router.navigateByUrl(`/edit/${event.id}`)
      }
    //

    /* 
    Hooks
    */
      ngOnInit() {
        this.getPosts();
      }
    //

  }
//