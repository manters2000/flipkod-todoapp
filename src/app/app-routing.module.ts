import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodolistDetailComponent }  from './todolist-detail/todolist-detail.component';

const routes: Routes = [
  { path: 'detail/:id', component: TodolistDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
