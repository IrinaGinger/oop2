import Daemon from '../class-daemon';

const daemon = new Daemon('Nick');

test(('Daemon name'), () => {
  expect(daemon.name).toBe('Nick');
});

test(('Daemon type'), () => {
  expect(daemon.type).toBe('Daemon');
});

test(('Daemon health'), () => {
  expect(daemon.health).toBe(100);
});

test(('Daemon level'), () => {
  expect(daemon.level).toBe(1);
});

test(('Daemon attack'), () => {
  expect(daemon.attack).toBe(10);
});

test(('Daemon defence'), () => {
  expect(daemon.defence).toBe(40);
});

