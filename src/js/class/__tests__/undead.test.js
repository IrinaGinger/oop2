import Undead from '../undead';

test('Правильно создается объект типа Undead', () => {
  const undead = new Undead('Jim');
  const correct = {
    name: 'Jim',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  }

  expect(undead).toEqual(correct);
});