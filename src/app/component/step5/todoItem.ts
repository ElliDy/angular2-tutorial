import {Component, Input, Output, EventEmitter} from '@angular/core';
import {TodoService} from './todoService';
@Component({
  selector: 'todo-item',
  styleUrls: ['./todoItem.css'],
  templateUrl: './todoItem.html'
})
export class TodoItem {
	@Input() index;
	@Input() todo;
	@Output() deleted = new EventEmitter();

	deleteTodo(){
		this.deleted.emit(this.index);
	}	
}
