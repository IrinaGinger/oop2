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

  levelUp() {
    if (this.health === 0) {
      throw new Error('Персонаж мертв');
    }

    this.level += 1;
    this.attack = this.attack * 1.2;
    this.defence = this.defence * 1.2;
    this.health = 100;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
