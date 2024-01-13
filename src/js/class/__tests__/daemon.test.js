import Daemon from '../daemon';

test('Правильно создается объект типа Daemon', () => {
  const daemon = new Daemon('Nick');
  const correct = {
    name: 'Nick',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  }

  expect(daemon).toEqual(correct);
});