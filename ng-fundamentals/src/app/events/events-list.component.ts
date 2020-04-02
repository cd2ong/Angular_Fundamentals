import { Component, OnInit} from '@angular/core';
import { EventService } from './shared/event.service';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Router, ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';

declare let toastr
@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events: IEvent[];

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.events = this.route.snapshot.data['events'];
  }

}
