import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

    @Input({ required: true, alias: 'type' })
    planType: string = '';

    @Input({ required: true, alias: 'price' })
    planPrice: number = 0;

    @Input({ required: true, alias: 'style' })
    cardStyle: 'orange' | 'purple' = 'orange';

    @Output('buttonClicked') onButtonClickedEmitt = new EventEmitter<void>();
    onButtonClicked (){
        this.onButtonClickedEmitt.emit();
    }
}
