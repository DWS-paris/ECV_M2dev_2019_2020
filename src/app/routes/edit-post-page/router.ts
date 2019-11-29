/* 
Imports
*/
    import { ModuleWithProviders } from "@angular/core";
    import { Routes, RouterModule } from "@angular/router";
    import { EditPostPageComponent } from "./edit-post-page.component";
//

/* 
Definition
*/
    const route: Routes = [
        {
            path: '',
            component: EditPostPageComponent
        }
    ]
//

/* 
Export
*/
    export const Routing: ModuleWithProviders = RouterModule.forChild(route)
//