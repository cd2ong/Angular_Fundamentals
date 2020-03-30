import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ISession , restrictedWords} from '../../shared/index';

@Component({
  selector: 'create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {

  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;

  newSessionForm: FormGroup;

  @Output() saveNewSession = new EventEmitter();
  @Output() cancelAddSession = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('',
    [Validators.required,
      Validators.maxLength(400),
      restrictedWords(['foo','bar'])]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    });
  }

  cancel(){
    this.cancelAddSession.emit();
  }

  saveSession(formValues){
    let session: ISession = {
      id: undefined,
      name: formValues.name,
      duration: +formValues.duration,
      level: formValues.level,
      presenter: formValues.presenter,
      abstract: formValues.abstract,
      voters: []
    }
    this.saveNewSession.emit(session);
  }

}
