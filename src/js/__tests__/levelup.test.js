import Character from '../class--character';

const chr = new Character('Oleg', 'Daemon');
chr.health = 50;
chr.attack = 10;
chr.defence = 20;
chr.levelUp();

test('levelup: level = 1', () => {
  expect(chr.level).toBe(2);
});

test('levelup: attack increasing', () => {
  expect(chr.attack).toBe(12);
});

test('levelup: attack increasing', () => {
  expect(chr.defence).toBe(24);
});

test('levelup: health restore', () => {
  expect(chr.health).toBe(100);
});
