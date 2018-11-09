import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { ActivatedRoute} from '@angular/router';
import { IEvent } from '../common/event.model';
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  constructor(
    private eventService: EventService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }

}
