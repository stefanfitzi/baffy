import {Routes, RouterModule} from '@angular/router';

import { MemberlistComponent } from './memberlist/memberlist.component';
import { MemberdetailsComponent } from './memberdetails/memberdetails.component';
import { MembereditComponent } from './memberedit/memberedit.component';
import { EventlistComponent } from './eventlist/eventlist.component';
import { EventdetailsComponent } from './eventdetails/eventdetails.component';
import { EventeditComponent } from './eventedit/eventedit.component';
import { RegisterComponent } from './register/register.component';
import { EventreportComponent } from './eventreport/eventreport.component';

const routes: Routes = [
  { path: 'members', component: MemberlistComponent },
  { path: 'member/:id', component: MemberdetailsComponent },
  { path: 'newmember', component: MembereditComponent },
  { path: 'member/edit/:id', component: MembereditComponent },

  { path: 'events', component: EventlistComponent },
  { path: 'event/:id', component: EventdetailsComponent },
  { path: 'newevent', component: EventeditComponent },
  { path: 'event/edit/:id', component: EventeditComponent },
  
  { path: 'event/registration/:id', component: RegisterComponent },
  { path: 'event/report/:id', component: EventreportComponent },
  { path: '', redirectTo: '/members', pathMatch: 'full' }
];

export const routingModule = RouterModule.forRoot(routes);
