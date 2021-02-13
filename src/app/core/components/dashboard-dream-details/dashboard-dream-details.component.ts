import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard-dream-details',
  templateUrl: './dashboard-dream-details.component.html',
  styleUrls: ['./dashboard-dream-details.component.css']
})
export class DashboardDreamDetailsComponent implements OnInit {
  @Output() replyOnDream: EventEmitter<any> = new EventEmitter<any>();
  @Output() backToSearchPage: EventEmitter<any> = new EventEmitter<any>();

  DreamInfo$: Observable<any>;

  dreamGender = '';
  dreamStatus = '';
  dreamText = '';
  dreamTitle = '';
  replyNote = '';
  replies = [];

  patchForm = (arr) => {
    this.dreamGender = arr.dreamGender;
    this.dreamStatus = arr.dreamStatus;
    this.dreamText = arr.dreamText;
    this.dreamTitle = arr.dreamTitle;
    this.replyNote = arr.replyNote;
    this.replies = arr.replies;
  }

  collectData = (): {} => {
    const obj = {
      dreamGender: this.dreamGender,
      dreamStatus: this.dreamStatus,
      dreamText: this.dreamText,
      dreamTitle : this.dreamTitle,
      replyNote: this.replyNote,
      replies : this.replies
    };
    return obj;
  }

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }
}
