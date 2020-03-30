import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './errors/test/404.component';
import { EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolver,
  EventRouteActivatorGuard
} from './events/index'
import { CreateSessionComponent } from './events/event-details/create-session/create-session.component';

const routes: Routes = [
  { path: 'events/new', component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventsListComponent,
    resolve: {events: EventListResolver}},
  { path: 'events/:id', component: EventDetailsComponent,
    canActivate: [EventRouteActivatorGuard]},
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: '404', component: Error404Component },
  { path: '', pathMatch: 'full', redirectTo: '/events' },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
