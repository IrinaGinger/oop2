import Character from '../character';

// тесты на ошибки имени и типа
test(('Character error name'), () => {
  expect(() => new Character('o', 'Daemon')).toThrow(new Error('Некорректное имя персонажа (длина должна быть от 2 до 10 символов)'));
});

test(('Character error type'), () => {
  expect(() => new Character('Oleg', 'Angel')).toThrow(new Error('Некорректный тип персонажа'));
});

// тесты метода damage
const chr1 = new Character('Oleg', 'Daemon');
chr1.health = 50;
chr1.attack = 10;
chr1.defence = 20;

test('damage health calculating', () => {
  chr1.damage(20);
  expect(chr1.health).toBe(34);
});

test('damage health must be >= 0', () => {
  chr1.damage(50);
  expect(chr1.health).toBe(0);
});

// тесты метода levelup
const chr2 = new Character('Oleg', 'Daemon');
chr2.health = 50;
chr2.attack = 10;
chr2.defence = 20;
chr2.levelUp();

test('levelup: level = 1', () => {
  expect(chr2.level).toBe(2);
});

test('levelup: attack increasing', () => {
  expect(chr2.attack).toBe(12);
});

test('levelup: defence increasing', () => {
  expect(chr2.defence).toBe(24);
});

test('levelup: health restore', () => {
  expect(chr2.health).toBe(100);
});

const chr3 = new Character('Oleg', 'Daemon');
chr3.health = 0;
chr3.attack = 10;
chr3.defence = 20;

test('levelup error', () => {
  expect(() => chr3.levelUp()).toThrow(new Error('Персонаж мертв'));
});
