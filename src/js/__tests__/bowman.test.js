import Bowman from '../class-bowman';

const bowman = new Bowman('Peter');

test(('Bowman name'), () => {
  expect(bowman.name).toBe('Peter');
});

test(('Bowman type'), () => {
  expect(bowman.type).toBe('Bowman');
});

test(('Bowman health'), () => {
  expect(bowman.health).toBe(100);
});

test(('Bowman level'), () => {
  expect(bowman.level).toBe(1);
});

test(('Bowman attack'), () => {
  expect(bowman.attack).toBe(25);
});

test(('Bowman defence'), () => {
  expect(bowman.defence).toBe(25);
});

