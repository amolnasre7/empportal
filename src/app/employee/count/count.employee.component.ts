import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { getViewComponent } from '@angular/core/src/render3/discovery_utils';

@Component({
selector: 'app-employee-count',
templateUrl: './count.employee.component.html',
styleUrls:['./count.employee.component.css']

})

export class CountEmployeeComponent{

@Input() all:number=10;
@Input() male:number=10;
@Input() female:number=10;

@Output() childEvent = new EventEmitter()

getEvent(){

    this.childEvent.emit("Clild Event Occured");
}

}