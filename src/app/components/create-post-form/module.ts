/* 
Imports
*/
    import { NgModule } from "@angular/core";
    import { CommonModule } from "@angular/common";
    import { CreatePostFormComponent } from "./create-post-form.component";
//

/* 
Definition & export
*/
    @NgModule({
        declarations: [ CreatePostFormComponent ],
        exports: [ CreatePostFormComponent ],
        imports: [ CommonModule ]
    })

    export class CreatePostFormModule{};
//