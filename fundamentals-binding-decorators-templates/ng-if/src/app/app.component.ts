import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  minhaProp = true

  onClickButton(){
    this.minhaProp = !this.minhaProp
  }

  isTruthy(num: number){
    return this.isGreaterThan(num, 5) && this.isLessThan(num, 20) 
  }

  isGreaterThan(num: number, numCompare: number){
    return num > numCompare
  }

  isLessThan(num: number, numCompare: number){
    return num < numCompare
  }
}
