import Zombie from '../zombie';

test('Правильно создается объект типа Zombie', () => {
  const zombie = new Zombie('Ted');
  const correct = {
    name: 'Ted',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  }

  expect(zombie).toEqual(correct);
});