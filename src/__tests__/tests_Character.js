import Character from '../js/Character';

test('test class Character', () => {
  const lotriсk = new Character('lotriсk', 'Bowerman', 60, 80 );
  const expected = {
    name: 'lotriсk',
    type: 'Bowerman',
    health: 100,
    level: 1,
    atack: 60,
    defence: 80,
  }
  expect(lotriсk).toEqual(expected);
});

test('test of the entered class name', () => {
  expect(() => {
    const lotriсk = new Character('a', 'Bowerman');
    return lotriсk;
  }).toThrow(new Error('Имя должно содержать от 2х до 10 символов'));
  expect(() => {
    const lotriсk = new Character('qwertyuiopa', 'Bowerman');
    return lotriсk;
  }).toThrow(new Error('Имя должно содержать от 2х до 10 символов'));
});

test('test of the class type being entered', () => {
  expect(() => {
    const lotriсk = new Character('lotriсk', 'Sigvard');
    return lotriсk;
  }).toThrow(new Error('Введите корректный тип персонажа'));
});

