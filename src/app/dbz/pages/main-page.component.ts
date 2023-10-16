import { Component, Input} from '@angular/core';
import { Character } from '../interfaces/character.interface'
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  // Inyectamos nuestro servicio aquí y por lo tanto las
  // variables y métodos que tenia los llamaremos desde
  // dbzService y podemos llamarlos en nuestro html.
  constructor(private dbzService: DbzService){}

  get characters(): Character[]{
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }
}
