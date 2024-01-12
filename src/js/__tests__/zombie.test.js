import Zombie from '../class-zombie';

const zombie = new Zombie('Ted');

test(('Zombie name'), () => {
  expect(zombie.name).toBe('Ted');
});

test(('Zombie type'), () => {
  expect(zombie.type).toBe('Zombie');
});

test(('Zombie health'), () => {
  expect(zombie.health).toBe(100);
});

test(('Zombie level'), () => {
  expect(zombie.level).toBe(1);
});

test(('Zombie attack'), () => {
  expect(zombie.attack).toBe(40);
});

test(('Zombie defence'), () => {
  expect(zombie.defence).toBe(10);
});