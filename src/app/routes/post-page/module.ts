/* 
Imports
*/
    // Angular
    import { NgModule} from "@angular/core";
    import { CommonModule } from "@angular/common";

    // Components
    import { PostPageComponent } from "./post-page.component";
    import { Routing } from "./router";
//

/* 
Definition
*/
    @NgModule({
        declarations: [ PostPageComponent ],
        imports: [ CommonModule, Routing ]
    })
//

/* 
Export
*/
    export class Module{};
//