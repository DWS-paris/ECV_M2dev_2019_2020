/* 
Imports
*/
    import { ModuleWithProviders } from "@angular/core";
    import { Routes, RouterModule } from "@angular/router";
    import { CreatePostPageComponent } from "./create-post-page.component";
//

/* 
Definition
*/
    const route: Routes = [
        {
            path: '',
            component: CreatePostPageComponent
        }
    ]
//

/* 
Export
*/
    export const Routing: ModuleWithProviders = RouterModule.forChild(route)
//