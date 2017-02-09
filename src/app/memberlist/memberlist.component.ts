import { Component, OnInit } from '@angular/core';
import { Member } from './member';
import { MemberserviceService } from '../memberservice.service';

@Component({
  selector: 'app-memberlist',
  templateUrl: './memberlist.component.html',
  styleUrls: ['./memberlist.component.css']
})

export class MemberlistComponent implements OnInit {

  members: Member[];
  constructor(private memberService: MemberserviceService) { }

  ngOnInit() {
    console.log('init');
    this.loadList();
  }

  loadList() {
        this.memberService.getMembers()
      .then(data => {
        console.log(data);
        this.members = data;
      }).catch(function (err) {
        console.error(err);
      });
  }

  delete(member: Member) {
    console.log('delete');
    this.memberService.removeMember(member.id)
      .then(data => {
        console.log(data);
        //this.members = data;
        this.loadList();
      }).catch(function (err) {
        console.error(err);
      });
    
  }

}
