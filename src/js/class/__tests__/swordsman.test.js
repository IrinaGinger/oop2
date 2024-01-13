import Swordsman from '../swordsman';

test('Правильно создается объект типа Swordsman', () => {
  const swordsman = new Swordsman('Rick');
  const correct = {
    name: 'Rick',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  }

  expect(swordsman).toEqual(correct);
});