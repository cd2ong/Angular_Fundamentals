import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolver
} from './events/index'
import { NavComponent } from './nav/nav.component';
import { Error404Component } from './errors/test/404.component';
import { ProfileComponent } from './user/profile/profile.component';
import { UserModule } from './user/user.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/event-details/create-session/create-session.component';
import { SessionListComponent } from './events/event-details/session-list/session-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: 'canDeactivateCreateEvent',
  useValue: checkDirtyState},
  EventListResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function checkDirtyState(component: CreateEventComponent){
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really waant to cancel?');
  return true;
}
