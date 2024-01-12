import Undead from '../class-undead';

const undead = new Undead('Jim');

test(('Undead name'), () => {
  expect(undead.name).toBe('Jim');
});

test(('Undead type'), () => {
  expect(undead.type).toBe('Undead');
});

test(('Undead health'), () => {
  expect(undead.health).toBe(100);
});

test(('Undead level'), () => {
  expect(undead.level).toBe(1);
});

test(('Undead attack'), () => {
  expect(undead.attack).toBe(25);
});

test(('Undead defence'), () => {
  expect(undead.defence).toBe(25);
});
