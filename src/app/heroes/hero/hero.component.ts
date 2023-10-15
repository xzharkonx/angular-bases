import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  // Se comporta como una propiedad y no como un método
  // por que solo se llama por su nombre sin los ()
  get capizalizedName(): string {
    // return this.name.toUpperCase();
    // Para capitalize (la 1ra letra en mayúscula.)
    return this.name.charAt(0).toUpperCase() + this.name.slice(1);
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`
  }

  changeHero(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 30;
  }
  
  resetForm():void {
    this.name = 'ironman';
    this.age = 45;
  }
}
