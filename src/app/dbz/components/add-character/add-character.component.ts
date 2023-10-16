import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  // Un emisor: Define una salida del componente
  // (ocea aquí donde lo implementamos) que el
  // componente padre puede subscribirse para escuchar.
  
  // Es decir, cuando nosotros vamos a enviar algún valor ya sea
  // desde nuestro formulario, aquí o en donde se debe colocar este
  // emisor para propagarlo a donde queramos.
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character:Character = {
    name: '',
    power: 0
  };

  emitCharacter():void {
    console.log(this.character);

    // Hacemos una validación previa de los datos.
    if(this.character.name.length === 0) return;

    // Ahora utilizaremos el ehmisor que hemos creado para emitir ese objeto
    // al componente padre.
    this.onNewCharacter.emit(this.character);

    this.character = {name: '', power: 0};
    // this.character.name ='';
    // this.character.power = 0;
  }
}
