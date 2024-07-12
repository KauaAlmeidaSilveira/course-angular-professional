import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    fontSize: number = 15;
    textColor: 'white' | 'orange' = 'orange'
    buttonText: 'Branco' | 'Laranja' = 'Laranja'

    increaseFontSize() {
        this.fontSize += 10
    }

    decreaseFontSize() {
        this.fontSize -= 10
    }

    toogleFontColor() {
        if (this.textColor == 'orange') {
            this.textColor = 'white'
            this.buttonText = 'Laranja'
        }else{
            this.textColor = 'orange'
            this.buttonText = 'Branco'
        }
    }
}
