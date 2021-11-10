import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url: string = environment.url;
  endpoint: string = '';
  constructor(private http: HttpClient) { }

  async get() {
    try {
      return await this.http.get(`${this.url}/${this.endpoint}`).toPromise();
    } catch (error) {
      return error;
    }
  }

  setEndPoint(endpoint: string) {
    this.endpoint = endpoint;
  }
}
