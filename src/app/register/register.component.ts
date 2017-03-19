import { Component, OnInit } from '@angular/core';
import { Registration } from '../shared/registration'
import { MemberserviceService } from '../memberservice.service'
import { RegistrationService } from '../registration.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registration: Registration = {
    fk_event: null,
    fk_member: null,
  };

  bafId: number;


  constructor(private memberService: MemberserviceService,
              private registrationService: RegistrationService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.registration.fk_event = +this.route.snapshot.params['id'];
  }

  autosubmit() {
    if(this.bafId > 10000000) {
      console.log('submit the baf id ' + this.bafId);
      this.memberService.getMemberByBafId(this.bafId)
        .then(data => {
          console.log(data[0].id);
          this.registration.fk_member = data[0].id;
          this.registrationService.register(this.registration);
        })
        .catch(function (err) {
          console.error(err);
        });
    }
  }

}
