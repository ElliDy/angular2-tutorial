import {Component, ViewChild, ElementRef} from '@angular/core';
import {TodoService} from './todoService';
@Component({
  selector: 'step4',
  styleUrls: ['./step4.css'],
  templateUrl: './step4.html',
  providers: [TodoService]
})
export class Step4 {
	todos:String[];
	@ViewChild('addInput') addInput: ElementRef;
	checkbox:boolean[];

	constructor(private todoService:TodoService){
		this.checkbox = [];
		this.todos = this.todoService.getTodos();
	}

	addTodo(value){
		this.todoService.addTodo(value);
	}

	keypressed(event, value){
		if(event.keyCode===13){
			this.addTodo(value);
			this.addInput.nativeElement.value = '';
		}
	}

	deleteTodo(index){
		this.checkbox.splice(index, 1);
		this.todoService.deleteTodo(index);
	}
}
