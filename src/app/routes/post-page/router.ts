/* 
Imports
*/
    import { ModuleWithProviders } from "@angular/core";
    import { Routes, RouterModule } from "@angular/router";
    import { PostPageComponent } from "./post-page.component";
//

/* 
Definition
*/
    const route: Routes = [
        {
            path: '',
            component: PostPageComponent
        }
    ]
//

/* 
Export
*/
    export const Routing: ModuleWithProviders = RouterModule.forChild(route)
//