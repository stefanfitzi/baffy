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
  alert = null;
  member : Member = {
        id: null,
        name: '',
        surname: '',
        address: '',
        gender: 'f',
        birthdate: null,
        sa_id_number: null,
        baf_id: null
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

  saveMember() {
    this.submitted = true;
    if (this.memberId) {
      this.memberService.updateMember(this.member)
        .then (data => {
          this.alert = {type: 'success', text: 'Successfully updated member ' + this.member.name + ' ' + this.member.surname}
        })
        .catch (error => {
          this.alert = {type: 'danger', text: 'Error: The member ' + this.member.name + ' ' + this.member.surname + ' could not be updated!'}  
        });
    } else {
      this.memberService.addMember(this.member)
              .then (data => {
          this.alert = {type: 'success', text: 'Successfully added member ' + this.member.name + ' ' + this.member.surname}
        })
        .catch (error => {
          this.alert = {type: 'danger', text: 'Error: The member ' + this.member.name + ' ' + this.member.surname + ' could not be added!'}  
        });
    }
  }

}
