/* 
Imports & definition 
*/
  import { Component, OnInit, OnChanges, Output, Input, EventEmitter } from '@angular/core';

  // Gestion des formulaires
  import { FormBuilder, FormGroup, Validators } from "@angular/forms";
  import { PostModel } from '../../models/post.model';

  @Component({
    selector: 'app-create-post-form',
    templateUrl: './create-post-form.component.html'
  })
//

/* 
Export
*/
  export class CreatePostFormComponent implements OnInit, OnChanges {
    

    /* 
    Declaration
    */
      @Output() addPost = new EventEmitter();
      @Input() newPostCreated: Boolean;
      @Input() postData: PostModel
      public form: FormGroup;
      public action: string = 'create'
    //
    constructor( private FormBuilder: FormBuilder ) { }

    /* 
    Methods
    */
      private resetForm = ( data = null ) => {
        // Configurer le formulaire
        if( data === null ){
          this.form = this.FormBuilder.group({
            title: [ undefined, Validators.required ],
            body: [ undefined, Validators.required ],
            userId: 1
          });
        }
        else{
          this.action = 'edit';
          this.form = this.FormBuilder.group({
            title: [ data.title, Validators.required ],
            body: [ data.body, Validators.required ],
            userId: data.userId
          });

          console.log(this.form.value)
        }
      }
    //

    ngOnInit() { }

    ngOnChanges(changes: any) {
      // Vider le formulaire
      if( changes.newPostCreated ){
        this.resetForm();
      }

      if( changes.postData.currentValue !== null ){
        this.resetForm(changes.postData.currentValue)
      }
    }

  }
//