import Character from '../class--character';

const chr = new Character('Oleg', 'Daemon');
chr.health = 0;
chr.attack = 10;
chr.defence = 20;

test('levelup error', () => {
  expect(() => chr.levelUp()).toThrow(new Error('Персонаж мертв'));
});