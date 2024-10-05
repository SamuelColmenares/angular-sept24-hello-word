import { Component } from "@angular/core";
import { count } from "rxjs";

@Component({
  selector: 'app-counter',
  template: `
    <h2>{{ title }}</h2>
    <p>Mi primer componente de angular</p>
    <p>Valor: {{ counter }}</p>
    <button (click)="increaseBy(-1)" class="btn btn-primary">-1</button>
    <button (click)="reset()" class="btn btn-primary mx-2">Reset</button>
    <button (click)="increaseBy(1)" class="btn btn-primary">+1</button>
  `,
  styles: `
    h2 {
      font-size: 110%;
      color: blue;
    }
  `,
})
export class CounterComponent {
  title = 'Hola Counter Interpolado';
  counter = 1;

  increaseBy(val: number): void {
    this.counter += val;
  }

  reset(): void {
    this.counter = 1;
  }
}
