/* 
Imports
*/
    // Angular
    import { NgModule} from "@angular/core";
    import { CommonModule } from "@angular/common";

    // Components
    import { EditPostPageComponent } from "./edit-post-page.component";
    import { Routing } from "./router";
    import { CreatePostFormModule } from "../../components/create-post-form/module";
//

/* 
Definition
*/
    @NgModule({
        declarations: [ EditPostPageComponent ],
        imports: [ CommonModule, Routing, CreatePostFormModule ]
    })
//

/* 
Export
*/
    export class Module{};
//