import Swordsman from '../class-swordsman';

const swordsman = new Swordsman('Rick');

test(('Swordsman name'), () => {
  expect(swordsman.name).toBe('Rick');
});

test(('Swordsman type'), () => {
  expect(swordsman.type).toBe('Swordsman');
});

test(('Swordsman health'), () => {
  expect(swordsman.health).toBe(100);
});

test(('Swordsman level'), () => {
  expect(swordsman.level).toBe(1);
});

test(('Swordsman attack'), () => {
  expect(swordsman.attack).toBe(40);
});

test(('Swordsman defence'), () => {
  expect(swordsman.defence).toBe(10);
});