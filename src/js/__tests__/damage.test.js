import Character from '../class--character';

const chr1 = new Character('Oleg', 'Daemon');
chr1.health = 50;
chr1.attack = 10;
chr1.defence = 20;
chr1.damage(10);

test('damage health calculating', () => {
  expect(chr1.health).toBe(42);
});

const chr2 = new Character('Ivan', 'Bowman');
chr2.health = 10;
chr2.attack = 10;
chr2.defence = 20;
chr2.damage(20);

test('damage health must be >= 0', () => {
  expect(chr2.health).toBe(0);
});


