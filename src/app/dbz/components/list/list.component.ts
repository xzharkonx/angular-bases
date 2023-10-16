import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  
  // Recibimos un valor de nuestro componente padre.
  // Define una propiedad que puede ser enviada
  // desde el padre haciea el componente hijo.
  // Es decir, que el valor que tiene este characterList
  // ahora será igual a otro valor del padre especificandolo
  // en el html.
  @Input()
  public characterList:Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  // Enviamos un valor a nuestro componente padre.
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?:string): void {

    if (!id) return;

    // console.log({index});
    this.onDelete.emit(id);
  }
}
