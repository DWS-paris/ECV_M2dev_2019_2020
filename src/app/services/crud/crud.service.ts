/* 
Imports
*/
  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
//

/* 
Definition & export
*/
  @Injectable({
    providedIn: 'root'
  })
  export class CrudService {
    /* 
    Déclarations
    */
      private apiUrl: String;
    //

    constructor( private HttpClient: HttpClient ){
      this.apiUrl = 'https://jsonplaceholder.typicode.com';
    };

    /* 
    Methods CRUD
    */
      // CRUD: Create
      public createItem = () => {

      }

      // CRUD: Read
      public readItem = (endpoint: String) => {
        return this.HttpClient.get(`${this.apiUrl}/${endpoint}`)
        .toPromise().then(this.getData).catch(this.handleError);
      }

      // CRUD: Read one
      public readOneItem = (endpoint: String, id: String) => {
        return this.HttpClient.get(`${this.apiUrl}/${endpoint}/${id}`)
        .toPromise().then(this.getData).catch(this.handleError);
      }

      // CRUD: Update
      public updateItem = () => {
        
      }

      // CRUD: Delete
      public deleteItem = () => {
        
      }
    //

    /* 
    Methods to get API responses
    */
      // Get the API response
      private getData(res: any){
        return res || {};
      };

      // Get the API error
      private handleError(err: any){
        return Promise.reject(err);
      };
    //
  }
//
