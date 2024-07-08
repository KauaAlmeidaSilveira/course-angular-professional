import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.scss']
})
export class CardButtonComponent {

  @Output('buttonClick') buttonClickEmitter = new EventEmitter<boolean>();

  onButtonClick(){
    this.buttonClickEmitter.emit(true);
  }
}