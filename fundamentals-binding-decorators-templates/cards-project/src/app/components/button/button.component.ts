import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

	// Muda o texto do botão
	@Input({ required: true, alias: 'text' }) 
	buttonText: string = '';

	// Muda a cor do botão, 
	// pode ser 'white' ou 'purple', através da classe CSS
	@Input({ required: true, alias: 'style' }) 
	buttonStyle: 'white' | 'purple' = 'white';

	// Desabilita o botão
	@Input({ alias: 'disabled' })
	isDisabled: boolean = false;

	// Emite um evento quando o botão é clicado
	@Output('clicked') buttonClickedEmitt = new EventEmitter<void>();
	onButtonClicked() {
		this.buttonClickedEmitt.emit();
	}
}
