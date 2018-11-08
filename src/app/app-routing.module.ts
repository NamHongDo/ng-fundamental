import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator} from './common/event-route-actovator.service';
import { EventListResolver } from './common/event-list.resolver.service';

const routes: Routes = [
  {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  {path: 'events', component: EventsListComponent, resolve: {events: EventListResolver}},
  {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
  {path: '404', component: Error404Component},
  {path: '', redirectTo: '/events', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
