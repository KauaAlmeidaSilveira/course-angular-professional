import { Component } from '@angular/core';

@Component({
  selector: 'app-card-button-cancel',
  templateUrl: './card-button-cancel.component.html',
  styles: [
    `
      .card-button-cancel {
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        margin-top: 10px;
        border-radius: 25px;
        background-color: red;
        cursor: pointer;
        padding: 10px;
      }
    `
  ]
})
export class CardButtonCancelComponent {

}
