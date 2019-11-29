/* 
Imports
*/
    import { NgModule } from "@angular/core";
    import { CommonModule } from "@angular/common";
    import { CreatePostFormComponent } from "./create-post-form.component";

    // Gestion des formulaires
    import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//

/* 
Definition & export
*/
    @NgModule({
        declarations: [ CreatePostFormComponent ],
        exports: [ CreatePostFormComponent ],
        imports: [ 
            CommonModule, 
            FormsModule, 
            ReactiveFormsModule 
        ]
    })

    export class CreatePostFormModule{};
//