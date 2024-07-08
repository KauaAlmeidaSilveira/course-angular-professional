import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input({required: true}) planPrice: number = 0;
  @Input({alias: 'planType', transform: (value: string) => value.toUpperCase()}) planType: string = '';
  
//   Usando getter e setter, para manipular o valor do input
//   private _planType: string = '';
  
//   @Input() 
//   set planType(value: string) {
//     this._planType = value.toUpperCase();
//   }

//   get planType(): string {
//     return this._planType;
//   }

  buttonClicked(event: boolean) {
    console.log(event ? 'V': 'F');
  }
}
