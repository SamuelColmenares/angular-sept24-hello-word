import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name = 'Ironman';
  public age = 40;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  changeHero():void{
    this.name= 'Spiderman';
  }

  changeAge():void{
    this.age= 25;
  }

  getHeroDescription():string{
    return `${ this.name } - ${ this.age }`;
  }
}
