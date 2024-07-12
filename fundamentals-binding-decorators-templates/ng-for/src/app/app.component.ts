import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {

	personSelectedIndex: number | undefined;

	listPessoas = [
		{
			name: 'Kauã Almeida Silveira',
			age: 20
		},
		{
			name: 'Naryeli Helen Cusi Medrano',
			age: 20
		},
		{
			name: 'Leandro Souza Silveira',
			age: 43
		},
		{
			name: 'Gleice Maria Silveira',
			age: 39
		}
	];

	selectPerson(index: number){
		this.personSelectedIndex = index
	}

}
