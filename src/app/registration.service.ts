import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { Member } from './shared/member';

const URL = 'http://localhost:49999/registration';
const USER_ID = 'baf-api-user';
const USER_SECRET = 'fjw349the';

@Injectable()
export class RegistrationService {

  constructor(private http: HttpClient) {
  }

  register(registration) {
    return this.http.post(URL, registration).toPromise()
      .then(resp => resp)
      .catch(this.handleError)
  }

  getReport(id: number): Promise<Member[]> {
    console.log('getReport');
    return this.http.get(URL + '/' + id).toPromise()
      .then(resp => <Member[]>resp)
      .catch(this.handleError)
  }

  private handleError(err) {
    let errMsg = (err.message)
      ? err.message
      : err.status ? `${err.status}: ${err.statusText}` : 'Server error';
    console.error(errMsg);
    return Promise.reject(errMsg);
  }

}

