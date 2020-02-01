import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public titulo: string = "Meu primeiro projeto angular!";

  //1ª função a ser executada
  constructor(){
    console.log('Comecei a executar');
  }

  getTarefa(tarefa:string): void{
    console.log('A tarefa foi', tarefa);
  }
}
