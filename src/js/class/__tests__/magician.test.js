import Magician from '../magician';

test('Правильно создается объект типа Magician', () => {
  const magician = new Magician('Bob');
  const correct = {
    name: 'Bob',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  }

  expect(magician).toEqual(correct);
});
