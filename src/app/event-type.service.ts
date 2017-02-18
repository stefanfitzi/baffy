import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestMethod, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { EventType } from './shared/eventType';

const URL = 'http://localhost:3000/eventtype';
const USER_ID = 'baf-api-user';
const USER_SECRET = 'fjw349the';


@Injectable()
export class EventTypeService {

  constructor(private http: Http) {
  }

  getEventTypes(): Promise<EventType[]> {
    let options = new RequestOptions({
      headers: this.getHeaders()
    });
    console.log('getEventTypes');
    return this.http.get(URL).toPromise()
      .then(resp => <EventType[]>resp.json())
      .catch(this.handleError)
  }

  addEventType(eventType) {
    let options = new RequestOptions({
      headers: this.getHeaders()
    });
    return this.http.post(URL, eventType, options).toPromise()
      .then(resp => resp.json())
      .catch(this.handleError)
  }

  removeEventType(id) {
    let options = new RequestOptions({
      headers: this.getHeaders()
    });
    return this.http.delete(URL + "/" + id, options).toPromise()
      .then()
      .catch(this.handleError)
  }

  updateEventType(eventType) {
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
