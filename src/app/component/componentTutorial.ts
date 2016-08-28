import {Component, ElementRef, ViewChild, AfterViewInit} from '@angular/core';

@Component({
  selector: 'componentTutorial',
  styleUrls: ['./componentTutorial.css'],
  templateUrl: './componentTutorial.html'
})
export class ComponentTutorial implements AfterViewInit{
	@ViewChild('firstLink') firstLink: ElementRef;
	ngAfterViewInit(){
		this.firstLink.nativeElement.click();
	}
}
