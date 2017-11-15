import { Todo } from '../todo';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodoDetailComponent implements OnInit {

  @Input() todo: Todo;

   constructor(
	 private route: ActivatedRoute,
     private todoService: TodoDataService,
     private location: Location
   ) {}

   ngOnInit(): void {
     this.getTodo();
   }

   getTodo(): void {
     const id = +this.route.snapshot.paramMap.get('id');
     this.todoService.getTodoById(id);
       // .subscribe(todo => this.todo = todo);
   }

   goBack(): void {
     this.location.back();
   }
}
