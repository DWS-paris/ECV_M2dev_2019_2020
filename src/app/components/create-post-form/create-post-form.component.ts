/* 
Imports & definition 
*/
  import { Component, OnInit } from '@angular/core';

  // Gestion des formulaires
  import { FormBuilder, FormGroup, Validators } from "@angular/forms";

  @Component({
    selector: 'app-create-post-form',
    templateUrl: './create-post-form.component.html'
  })
//

/* 
Export
*/
  export class CreatePostFormComponent implements OnInit {

    /* 
    Declaration
    */
      public form: FormGroup;
    //
    constructor( private FormBuilder: FormBuilder ) { }

    /* 
    Methods
    */
      private resetForm = () => {
        // Configurer le formulaire
        this.form = this.FormBuilder.group({
          title: [ undefined, Validators.required ],
          body: [ undefined, Validators.required ]
        });
      }
    //

    ngOnInit() {
    }

  }
//