import { Component, OnInit, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { JQUERY_TOKEN } from '../j-query.service';

@Component({
  selector: 'simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent implements OnInit {

  @Input() title:string;
  @Input() elementId: string;
  @ViewChild('modalContainer') containerEl: ElementRef;
  @Input() closeOnBodyClick: string;
  constructor(@Inject(JQUERY_TOKEN) private $:any) { }

  ngOnInit(): void {
  }

  closeModal() {
    if (this.closeOnBodyClick.toLocaleLowerCase() === 'true'){
      this.$(this.containerEl.nativeElement).modal('hide');
    }
  }

}
