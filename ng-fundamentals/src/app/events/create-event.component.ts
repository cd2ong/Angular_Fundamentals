import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEvent, EventService } from './shared';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  isDirty: boolean = false;
  newEvent: IEvent;

  constructor(private router: Router,
    private eventService: EventService) { }

  ngOnInit(): void {
  }

  saveEvent(formValues){
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

  cancel(){
    this.router.navigate(['/events']);
  }

}
