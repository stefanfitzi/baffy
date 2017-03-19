import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestMethod, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Member } from './shared/member';

const URL = 'http://localhost:3000/registration';
const USER_ID = 'baf-api-user';
const USER_SECRET = 'fjw349the';

@Injectable()
export class RegistrationService {

  constructor(private http: Http) {
  }

  register(registration) {
    let options = new RequestOptions({
      headers: this.getHeaders()
    });
    return this.http.post(URL, registration, options).toPromise()
      .then(resp => resp.json())
      .catch(this.handleError)
  }

  getReport(id: number): Promise<Member[]> {
    let options = new RequestOptions({
      headers: this.getHeaders()
    });
    console.log('getReport');
    return this.http.get(URL + '/' + id, options).toPromise()
      .then(resp => <Member[]>resp.json())
      .catch(this.handleError)
  }

  private getHeaders() {
    return new Headers({
      //'Authorization': `TenantSecret ${USER_ID},${USER_SECRET}`
    });
  }

  private handleError(err) {
    let errMsg = (err.message)
      ? err.message
      : err.status ? `${err.status}: ${err.statusText}` : 'Server error';
    console.error(errMsg);
    return Promise.reject(errMsg);
  }

}

