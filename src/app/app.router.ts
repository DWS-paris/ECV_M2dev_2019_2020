/* 
Imports
*/
    import { Routes } from "@angular/router";
//

/* 
Export
*/
    export const MainRouter: Routes = [
        {
            path: '',
            loadChildren: './routes/home-page/module#Module'
        },
        {
            path: 'me',
            loadChildren: './routes/user-page/module#Module'
        },
        {
            path: 'create-post',
            loadChildren: './routes/create-post-page/module#Module'
        },
        {
            path: 'edit/:id',
            loadChildren: './routes/edit-post-page/module#Module'
        },
        {
            path: 'post/:id',
            loadChildren: './routes/post-page/module#Module'
        }
    ];
//