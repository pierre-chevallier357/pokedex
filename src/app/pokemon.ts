export class Pokemon {
  id: number = 0;
  name: string = '';
  healthPoints: number = 0;
  combatPower: number = 0;
  picture: string = '';
  types: Array<string> = new Array();
  creationDate: Date = new Date();
}
