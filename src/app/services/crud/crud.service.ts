/* 
Imports
*/
  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders } from '@angular/common/http';
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
      public createItem = (endpoint: string, data: any) => {
        // Set header
        let myHeader = new HttpHeaders();
        myHeader.append('Content-Type', 'application/json; charset=UTF-8');
        
        return this.HttpClient.post(`${this.apiUrl}/${endpoint}`, data, 
        { headers: myHeader })
        .toPromise().then(this.getData).catch(this.handleError);
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
      public updateItem = (endpoint: string, data: any) => {
        // Set header
        let myHeader = new HttpHeaders();
        myHeader.append('Content-Type', 'application/json; charset=UTF-8');
        
        return this.HttpClient.put(`${this.apiUrl}/${endpoint}`, data, 
        { headers: myHeader })
        .toPromise().then(this.getData).catch(this.handleError);
      }

      // CRUD: Delete
      public deleteItem = ( endpoint: string, id:string ) => {
        return this.HttpClient.delete(`${this.apiUrl}/${endpoint}/${id}`)
        .toPromise().then(this.getData).catch(this.handleError);
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
