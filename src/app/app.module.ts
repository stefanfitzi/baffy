import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AlertModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { MemberlistComponent } from './memberlist/memberlist.component';

import { MemberserviceService } from './memberservice.service';

@NgModule({
  declarations: [
    AppComponent,
    MemberlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  providers: [MemberserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
