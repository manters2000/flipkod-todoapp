import { Todo } from '../Todo';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-todolist-detail',
  templateUrl: './todolist-detail.component.html',
  styleUrls: ['./todolist-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodolistDetailComponent implements OnInit {

  @Input() todo: Todo;

  constructor() { }

  ngOnInit() {
  }

}
