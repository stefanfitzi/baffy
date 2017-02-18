import { Component, OnInit } from '@angular/core';
import { Event } from '../shared/event';
import { EventType} from '../shared/eventType'
import { EventService } from '../event.service';
import { EventTypeService } from '../event-type.service';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent implements OnInit {

  events: Event[];

    types : EventType[] = [{
        id: 1,
        name: 'Test',
        description: 'test bla'
  },
  { id: 2, name: 'Test 2', description: 'gkjdkjk'}];

  typeMap = new Object();

  alert = null;

  constructor(private eventService: EventService, private eventTypeService: EventTypeService) { }

  ngOnInit() {
    console.log('init');
    this.eventTypeService.getEventTypes()
      .then(data => {
        var arrayLength = data.length;
        for (var i = 0; i < arrayLength; i++) {
          this.typeMap[data[i].id] = data[i].name;
        }
      }).catch(function (err) {
        console.error(err);
      });
    this.loadList();
  }

  loadList() {
        this.eventService.getEvents()
      .then(data => {
        console.log(data);
        this.events = data;
      }).catch(function (err) {
        console.error(err);
      });
  }

  delete(bafEvent: Event, event) {
    console.log('delete');
    event.stopPropagation();
    this.eventService.removeEvent(bafEvent.id)
      .then(data => {
        console.log(data);
        this.alert = {type: 'success', text: 'Successfully deleted event ' + bafEvent.name + ' ' + bafEvent.date}
        this.loadList();
      }).catch(error => {
        this.alert = {type: 'danger', text: 'Error: The event ' + bafEvent.name + ' ' + bafEvent.date + ' could not be deleted!'}
        console.error(error);
      });
  }

}
