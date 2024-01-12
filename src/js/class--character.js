export default class Character {
  constructor (name, type) {
    if ((name.length < 2) || (name.length > 10)) {
      throw new Error('Некорректное имя персонажа (длина должна быть от 2 до 10 символов)');
    }
    if (!['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
      throw new Error('Некорректный тип персонажа');
    }
    this.name = name;                  // имя
    this.type = type;                  // тип
    this.health = 100;                 // уровень жизни
    this.level = 1;                    // уровень персонажа
    this.attack = 0;                   // атака - будет установлена для подкласса
    this.defence = 0;                  // защита - будет установлена для подкласса
  }
}
