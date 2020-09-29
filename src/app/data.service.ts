import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import {  Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Hero } from './hero';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://localhost:3000/heronames";

  constructor(private httpClient: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER).pipe(retry(3), catchError(this.handleError));
  }

  public getHero(id: number) : Observable<Hero>{
    return this.httpClient.get<Hero>(this.REST_API_SERVER + 'Hero/' + id);
  }

  

  /*public submitForm(){
  var formData: any = new FormData();
  formData.append("name", this.form.get('name').value);
  formData.append("surname", this.form.get('surname').value);

  this.httpClient.post('http://localhost:3000/heronames', formData).subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
  )
  }*/
}

