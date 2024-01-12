import Magician from '../class-magician';

const magician = new Magician('Bob');

test(('Magician name'), () => {
  expect(magician.name).toBe('Bob');
});

test(('Magician type'), () => {
  expect(magician.type).toBe('Magician');
});

test(('Magician health'), () => {
  expect(magician.health).toBe(100);
});

test(('Magician level'), () => {
  expect(magician.level).toBe(1);
});

test(('Magician attack'), () => {
  expect(magician.attack).toBe(10);
});

test(('Magician defence'), () => {
  expect(magician.defence).toBe(40);
});
