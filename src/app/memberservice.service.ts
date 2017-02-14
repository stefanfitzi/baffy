import {Injectable} from '@angular/core';
import {Http, Headers, Request, RequestMethod, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Member } from './memberlist/member';

const URL = 'http://localhost:3000/member';
const USER_ID = 'baf-api-user';
const USER_SECRET = 'fjw349the';

@Injectable()
export class MemberserviceService {

  constructor(private http: Http) {
  }

  getMembers(): Promise<Member[]> {
    let options = new RequestOptions({
      headers: this.getHeaders()
    });
    console.log('getMembers');
    return this.http.get(URL).toPromise()
      .then(resp => <Member[]>resp.json())
      .catch(this.handleError)
  }

  getMemberById(id: number): Promise<Member> {
    let options = new RequestOptions({
      headers: this.getHeaders()
    });
    return this.http.get(URL + '/' + id, options).toPromise()
      .then(resp => <Member>resp.json())
      .catch(this.handleError)
  }
  addMember(member) {
    let options = new RequestOptions({
      headers: this.getHeaders()
    });
    return this.http.post(URL, member, options).toPromise()
      .then(resp => resp.json())
      .catch(this.handleError)
  }
  removeMember(id) {
    let options = new RequestOptions({
      headers: this.getHeaders()
    });
    return this.http.delete(URL + "/" + id, options).toPromise()
      .then()
      .catch(this.handleError)
  }
  updateMember(member) {
    let options = new RequestOptions({
      headers: this.getHeaders()
    });
    return this.http.put(URL, member, options).toPromise()
      .then(resp => resp.json())
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
