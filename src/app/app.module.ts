/* 
Imports
*/
  // Angular
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { RouterModule } from '@angular/router';
  import { HttpClientModule } from '@angular/common/http';

  // Inner
  import { CrudService } from "./services/crud/crud.service";
  import { AppComponent } from './app.component';
  import { MainRouter } from "./app.router";
  import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';
//

/* 
Definition & export
*/
  @NgModule({
    declarations: [
      AppComponent,
      MainNavigationComponent
    ],
    imports: [
      BrowserModule,
      RouterModule.forRoot( MainRouter, { onSameUrlNavigation: 'reload' } ),
      HttpClientModule
    ],
    providers: [CrudService],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
//