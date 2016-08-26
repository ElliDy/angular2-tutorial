import {Component, ElementRef, ViewChild, AfterViewChecked} from '@angular/core';

@Component({
  selector: 'componentTutorial',
  styleUrls: ['./componentTutorial.css'],
  templateUrl: './componentTutorial.html'
})
export class ComponentTutorial{
	@ViewChild('firstLink') firstLink: ElementRef;
}
