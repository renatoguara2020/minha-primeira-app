import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-componente',
  templateUrl: './first-componente.component.html',
  styleUrls: ['./first-componente.component.css']
})
export class FirstComponenteComponent implements OnInit{

  name: string = "RENATO ALVES SOARES";
  idade: number = 51;
  job: string = "Analista de Sistemas Pleno"

  constructor() {}

  ngOnInit(): void{}


}
