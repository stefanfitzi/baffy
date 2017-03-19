import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestMethod, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { BafEvent } from './shared/bafevent';

const URL = 'http://localhost:3000/event';
const USER_ID = 'baf-api-user';
const USER_SECRET = 'fjw349the';

@Injectable()
export class EventService {

  constructor(private http: Http) {
  }

  getEvents(): Promise<BafEvent[]> {
    let options = new RequestOptions({
      headers: this.getHeaders()
    });
    console.log('getEvents');
    return this.http.get(URL).toPromise()
      .then(resp => <BafEvent[]>resp.json())
      .catch(this.handleError)
  }

  getEventById(id: number): Promise<BafEvent> {
    let options = new RequestOptions({
      headers: this.getHeaders()
    });
    return this.http.get(URL + '/' + id, options).toPromise()
      .then(resp => <BafEvent>resp.json())
      .catch(this.handleError)
  }

  addEvent(event) {
    let options = new RequestOptions({
      headers: this.getHeaders()
    });
    return this.http.post(URL, event, options).toPromise()
      .then(resp => resp.json())
      .catch(this.handleError)
  }

  removeEvent(id) {
    let options = new RequestOptions({
      headers: this.getHeaders()
    });
    return this.http.delete(URL + "/" + id, options).toPromise()
      .then()
      .catch(this.handleError)
  }

  updateEvent(event) {
    let options = new RequestOptions({
      headers: this.getHeaders()
    });
    return this.http.put(URL, event, options).toPromise()
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
