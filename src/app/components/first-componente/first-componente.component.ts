import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-componente',
  templateUrl: './first-componente.component.html',
  styleUrls: ['./first-componente.component.css']
})
export class FirstComponenteComponent implements OnInit{

  nome: string = "RENATO ALVES SOARES";

  constructor() {}

  ngOnInit(): void{}


}
