/* 
Imports
*/
  import { Component } from '@angular/core';
//

/* 
Definition
*/
  @Component({
    selector: 'app-root',
    template: `
      <app-main-navigation></app-main-navigation>
      <router-outlet></router-outlet>
    `
  })
//

/* 
Export
*/
  export class AppComponent {
    
  }
//