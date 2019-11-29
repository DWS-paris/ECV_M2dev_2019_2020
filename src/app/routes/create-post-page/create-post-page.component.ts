/* 
Imports & definition 
*/
  import { Component, OnInit } from '@angular/core';
  import { PostModel } from '../../models/post.model';
  import { CrudService } from "../../services/crud/crud.service";

  @Component({
    selector: 'app-create-post-page',
    templateUrl: './create-post-page.component.html'
  })
//

/* 
Export
*/
  export class CreatePostPageComponent implements OnInit {

    public newPostCreated: Boolean = false;

    constructor(
      private CrudService: CrudService
    ) { }

    public createNewPost = (postData: PostModel) => {
      this.CrudService.createItem('posts', postData)
      .then( apiResponse => {
        console.log(apiResponse)
        this.newPostCreated = true;
      })
      .catch( apiResponse => {
        console.error(apiResponse)
      })
    }

    ngOnInit() {
    }

  }
//
