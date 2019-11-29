import { Component, OnInit } from '@angular/core';
import { PostModel } from '../../models/post.model';

@Component({
  selector: 'app-create-post-page',
  templateUrl: './create-post-page.component.html',
  styles: []
})
export class CreatePostPageComponent implements OnInit {

  constructor() { }

  public createNewPost = (postData: PostModel) => {
    console.log({postData})
  }

  ngOnInit() {
  }

}
