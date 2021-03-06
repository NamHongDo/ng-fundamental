import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import {ToastrService} from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../common/event.model';

@Component({
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events: IEvent[];
  constructor(private eventService: EventService,
              private toastr: ToastrService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  /*   this.eventService
    .getEvents()
    .subscribe(events => {
      this.events = events;
    });*/
  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }
}
