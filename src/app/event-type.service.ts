import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { EventType } from './shared/eventType';

const URL = 'http://localhost:49999/eventtype';
const USER_ID = 'baf-api-user';
const USER_SECRET = 'fjw349the';


@Injectable()
export class EventTypeService {

  constructor(private http: HttpClient) {
  }

  getEventTypes(): Promise<EventType[]> {
    console.log('getEventTypes');
    return this.http.get(URL).toPromise()
      .then(resp => <EventType[]>resp)
      .catch(this.handleError)
  }

  addEventType(eventType) {
    return this.http.post(URL, eventType).toPromise()
      .then(resp => resp)
      .catch(this.handleError)
  }

  removeEventType(id) {
    return this.http.delete(URL + "/" + id).toPromise()
      .then()
      .catch(this.handleError)
  }

  updateEventType(eventType) {
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
