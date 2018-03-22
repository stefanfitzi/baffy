import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';

import { MemberlistComponent } from './memberlist/memberlist.component';
import { MemberdetailsComponent } from './memberdetails/memberdetails.component';
import { MembereditComponent } from './memberedit/memberedit.component';
import { EventlistComponent } from './eventlist/eventlist.component';
import { EventdetailsComponent } from './eventdetails/eventdetails.component';
import { EventeditComponent } from './eventedit/eventedit.component';
import { RegisterComponent } from './register/register.component';
import { EventreportComponent } from './eventreport/eventreport.component';

import { MemberserviceService } from './memberservice.service';
import { EventService } from './event.service';
import { EventTypeService } from './event-type.service';
import { RegistrationService } from './registration.service'
import { MemberFilterPipe } from './shared/member-filter.pipe';
import { EventFilterPipe } from './shared/event-filter.pipe';

import {routingModule} from './app.routes';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MemberlistComponent,
    MemberdetailsComponent,
    MembereditComponent,
    EventlistComponent,
    EventdetailsComponent,
    EventeditComponent,
    RegisterComponent,
    EventreportComponent,
    MemberFilterPipe,
    EventFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routingModule,
    AlertModule.forRoot()
  ],
  providers: [MemberserviceService, EventService, EventTypeService, RegistrationService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
