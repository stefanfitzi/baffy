import { Component, OnInit } from '@angular/core';
import { BafEvent } from '../shared/bafevent';
import { EventType } from '../shared/eventType'
import { EventService } from '../event.service';
import { EventTypeService } from '../event-type.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eventedit',
  templateUrl: './eventedit.component.html',
  styleUrls: ['./eventedit.component.css']
})
export class EventeditComponent implements OnInit {

  submitted = false;
  alert = null;
  event : BafEvent = {
        id: null,
        date: null,
        fk_event_type: null,
        name: ''
      };

  eventTypes;
  
  eventId;

  constructor(private eventService: EventService,
              private eventTypeService: EventTypeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.eventTypeService.getEventTypes()
      .then(data => {
        this.eventTypes = data;
      }).catch(function (err) {
        console.error(err);
      });

    this.eventId = this.route.snapshot.params['id'];
    if (this.eventId) {
      console.log('existing event');
      this.eventService.getEventById(this.eventId)
        .then(data => {
          this.event = data[0];
        }).catch(function (err) {
          console.error(err);
        });
    }
  }

  saveEvent() {
    this.submitted = true;
    if (this.eventId) {
      this.eventService.updateEvent(this.event)
        .then (data => {
          this.alert = {type: 'success', text: 'Successfully updated event ' + this.event.date + ' ' + this.event.name}
        })
        .catch (error => {
          this.alert = {type: 'danger', text: 'Error: The event ' + this.event.date + ' ' + this.event.name + ' could not be updated!'}  
        });
    } else {
      this.eventService.addEvent(this.event)
              .then (data => {
          this.alert = {type: 'success', text: 'Successfully added event ' + this.event.date + ' ' + this.event.name}
        })
        .catch (error => {
          this.alert = {type: 'danger', text: 'Error: The event ' + this.event.date + ' ' + this.event.name + ' could not be added!'}  
        });
    }
  }

  parseDate(dateString: string): Date {
    if (dateString) {
        return new Date(dateString);
    } else {
        return null;
    }
  }

}
