import { Component, OnInit } from '@angular/core';
import { Member } from '../memberlist/member';
import { MemberserviceService } from '../memberservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-memberedit',
  templateUrl: './memberedit.component.html',
  styleUrls: ['./memberedit.component.css']
})
export class MembereditComponent implements OnInit {

  submitted = false;
  member : Member = {
        id: null,
        name: '',
        surname: '',
        address: '',
        gender: 'female',
        birthdate: ''
      };

  genders = [
    { value: 'f', display: 'female' },
    { value: 'm', display: 'male' }
  ];

  memberId;

  constructor(private memberService: MemberserviceService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.memberId = this.route.snapshot.params['id'];
    if (this.memberId) {
      console.log('existing user');
      this.memberService.getMemberById(this.memberId)
        .then(data => {
          this.member = data[0];
        }).catch(function (err) {
          console.error(err);
        });
    }
  }

  addMember() {
    this.submitted = true;
    if (this.memberId) {
      this.memberService.updateMember(this.member);
    } else {
      this.memberService.addMember(this.member)
    }
  }

  saveMember() {
    this.submitted = true;
    this.memberService.updateMember(this.member);
  }

}
