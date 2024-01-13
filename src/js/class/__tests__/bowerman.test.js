import Bowerman from '../bowerman';

test('Правильно создается объект типа Bowman', () => {
  const bowman = new Bowerman('Peter');
  const correct = {
    name: 'Peter',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  }

  expect(bowman).toEqual(correct);
});
