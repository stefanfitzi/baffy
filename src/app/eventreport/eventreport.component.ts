import { Component, OnInit } from '@angular/core';
import { Member } from '../memberlist/member';
import { BafEvent } from '../shared/bafevent'
import { RegistrationService } from '../registration.service';
import { EventService } from '../event.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eventreport',
  templateUrl: './eventreport.component.html',
  styleUrls: ['./eventreport.component.css']
})
export class EventreportComponent implements OnInit {

  eventId: number;

  bafevent: BafEvent;

  registeredMembers: Member[];

  constructor(private registrationService: RegistrationService,
              private eventService: EventService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.eventId = this.route.snapshot.params['id'];
    console.log('report: ' + this.eventId);
    if (this.eventId) {
      console.log('create report');
      this.eventService.getEventById(this.eventId)
        .then(eventdata => {
          console.log(eventdata[0]);
          this.bafevent = eventdata[0];
        }).catch(function (err) {
          console.error(err);
        });

      this.registrationService.getReport(this.eventId)
        .then(data => {
          console.log(data);
          this.registeredMembers = data;
        }).catch(function (err) {
          console.error(err);
        });
    }
  }

}
