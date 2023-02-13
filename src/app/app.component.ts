import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'RENATO ALVES SOARES';
  idade = 51;
  job = 'Analista de Sistemas Pleno';
  hobbies = [ 'estudar' , 'estudar Angular 13']
}
