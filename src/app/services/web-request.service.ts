import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly baseUrl;

  constructor( private http: HttpClient ) {
    this.baseUrl = 'http://localhost:3000/api/sintad/';

    this.getToken();
  }

  getOptions() {
    const cabeceras = {
      headers: new HttpHeaders({
        'access-token': localStorage.getItem('token')
      })
  };

    return cabeceras;
  }

  getToken(): void {
    let token: any;
    this.http.get(`${ this.baseUrl }token`).subscribe(valor => {
      token = valor;
      localStorage.setItem('token', token.token);
    });
  }

  get( uri: string ) {
    return this.http.get(`${ this.baseUrl }${ uri }`, this.getOptions());
  }

  post( uri: string, body: Object ) {
    return this.http.post(`${ this.baseUrl }${ uri }`, body, this.getOptions());
  }

  // PUT or PATCH
  put( uri: string, body?: Object ) {
    if (typeof body === undefined) {
      return this.http.put(`${ this.baseUrl }${ uri }`, this.getOptions());
    } else {
      return this.http.put(`${ this.baseUrl }${ uri }`, body, this.getOptions());
    }
  }

  delete( uri: string ) {
    return this.http.delete(`${ this.baseUrl }${ uri }`, this.getOptions());
  }
}
