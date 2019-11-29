/* 
Imports
*/
    // Angular
    import { NgModule} from "@angular/core";
    import { CommonModule } from "@angular/common";

    // Components
    import { UserPageComponent } from "./user-page.component";
    import { Routing } from "./router";
//

/* 
Definition
*/
    @NgModule({
        declarations: [ UserPageComponent ],
        imports: [ CommonModule, Routing ]
    })
//

/* 
Export
*/
    export class Module{};
//