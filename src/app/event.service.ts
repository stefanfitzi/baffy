import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { BafEvent } from './shared/bafevent';

const URL = 'http://localhost:49999/event';
const USER_ID = 'baf-api-user';
const USER_SECRET = 'fjw349the';

@Injectable()
export class EventService {

  constructor(private http: HttpClient) {
  }

  getEvents(): Promise<BafEvent[]> {
    console.log('getEvents');
    return this.http.get(URL).toPromise()
      .then(resp => <BafEvent[]>resp)
      .catch(this.handleError)
  }

  getEventById(id: number): Promise<BafEvent> {
    return this.http.get(URL + '/' + id).toPromise()
      .then(resp => <BafEvent>resp)
      .catch(this.handleError)
  }

  addEvent(event) {
    return this.http.post(URL, event).toPromise()
      .then(resp => resp)
      .catch(this.handleError)
  }

  removeEvent(id) {
    return this.http.delete(URL + "/" + id).toPromise()
      .then()
      .catch(this.handleError)
  }

  updateEvent(event) {
    return this.http.put(URL, event).toPromise()
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
