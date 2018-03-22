import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { Member } from './memberlist/member';

const URL = 'http://localhost:49999/member';
const USER_ID = 'baf-api-user';
const USER_SECRET = 'fjw349the';

@Injectable()
export class MemberserviceService {

  constructor(private http: HttpClient) {
  }

  getMembers(): Promise<Member[]> {
    console.log('getMembers');
    return this.http.get(URL).toPromise()
      .then(resp => <Member[]>resp)
      .catch(this.handleError)
  }

  getMemberById(id: number): Promise<Member> {
    return this.http.get(URL + '/' + id).toPromise()
      .then(resp => <Member>resp)
      .catch(this.handleError)
  }

  getMemberByBafId(bafid: number): Promise<Member> {
    return this.http.get(URL + '/baf/' + bafid).toPromise()
      .then(resp => <Member>resp)
      .catch(this.handleError)
  }

  addMember(member) {
    return this.http.post(URL, member).toPromise()
      .then(resp => resp)
      .catch(this.handleError)
  }

  removeMember(id) {
    return this.http.delete(URL + "/" + id).toPromise()
      .then()
      .catch(this.handleError)
  }

  updateMember(member) {
    return this.http.put(URL, member).toPromise()
      .then(resp => resp)
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
