import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ChildActivationStart } from "@angular/router";
import { CrudService } from "../../services/crud/crud.service";
import { PostModel } from "../../models/post.model";

@Component({
  selector: 'app-edit-post-page',
  templateUrl: './edit-post-page.component.html',
  styles: []
})
export class EditPostPageComponent implements OnInit {

  public newPostEdited: Boolean = false;
  public postData: PostModel;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private CrudService: CrudService,
  ) { }

  private getPostData = (id: string) => {
    this.CrudService.readOneItem('posts', id)
    .then( apiResponse => this.postData = apiResponse)
    .catch( apiResponse => {
      console.error(apiResponse)
    })
  }

  public editPost = event => {
    console.log(event)
  }

  ngOnInit() {
    this.getPostData( this.ActivatedRoute.snapshot.params['id'] )
  }

}
