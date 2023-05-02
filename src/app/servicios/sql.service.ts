import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { retry, catchError, finalize } from 'rxjs/operators';
import { Observable, throwError, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SqlService {
 // base_path:string = 'https://coffee-benef.azurewebsites.net/api/count'
  base_path:string = 'http://localhost:8091/api/'
  base_path_productor:string = 'http://localhost:8093/api/'


  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoiYWRtaW4iLCJpZCI6ImRldkNvZmVlMjAyMyIsImlhdCI6MTUxNjIzOTAyMn0.gD8D_mwUS0N3LUgNarOU8JW3l0rmVlpJW73hUSgGSFs',
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getData(ruta:string){
     return this.http
              .get<any[]>(this.base_path + ruta, this.httpOptions)
              .pipe(
                retry(2),
                catchError(this.handleError)
              )
  }
  
  postData(ruta:string, item) {
     return this.http
      .post(this.base_path + ruta,JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
      
  }

  putData(ruta:string, param:string, id:number, param2:string, estado:string){
    return this.http
    .put(this.base_path + ruta + `?${param}=${id}&${param2}=${estado}`, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  getDataProductor(ruta:string){
    return this.http
             .get<any[]>(this.base_path_productor + ruta, this.httpOptions)
             .pipe(
               retry(2),
               catchError(this.handleError)
             )
 }

 putData_productor(ruta:string, param:string, id:number, param2:string, correo:string, param3:string, estado:string ){
  return this.http
  .put(this.base_path_productor + ruta + `?${param}=${id}&${param2}=${correo}&${param3}=${estado}`, this.httpOptions)
  .pipe(
    retry(2),
    catchError(this.handleError)
  )
}
}
