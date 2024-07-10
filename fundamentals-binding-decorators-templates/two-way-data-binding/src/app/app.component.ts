import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  name: string = 'Kauã';

//   handleInputChange(event: string){
// 	this.name = event;
//   }

  alertChange(event: any){
	console.log(event);
  }
}
