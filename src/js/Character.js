export default class Character {
  constructor(name, type, atack, defence) {
    if (name.length < 2 || name.length > 10 || typeof name !== 'string') {
      throw new Error('Имя должно содержать от 2х до 10 символов');
    }

    const types = [
      'Bowerman',
      'Daemon',
      'Magician',
      'Swordsman',
      'Undead',
      'Zombie',
    ];

    if (!types.includes(type)) {
      throw new Error('Введите корректный тип персонажа');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.atack = atack;
    this.defence = defence;
  }
}
