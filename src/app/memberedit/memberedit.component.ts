import { Component, OnInit } from '@angular/core';
import { Member } from '../memberlist/member';
import { MemberserviceService } from '../memberservice.service';

@Component({
  selector: 'app-memberedit',
  templateUrl: './memberedit.component.html',
  styleUrls: ['./memberedit.component.css']
})
export class MembereditComponent implements OnInit {

  submitted = false;
  member : Member;

  constructor(private memberService: MemberserviceService) { }

    ngOnInit() {
      this.member = {
      id: null,
      name: '',
      surname: '',
      address: '',
      gender: 'female',
      birthdate: ''
    }
  }

  addMember() {
    this.submitted = true;
    this.memberService.addMember(this.member)
  }

}
