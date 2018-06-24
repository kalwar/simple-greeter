import { Greeter } from '../index';
test('My Greeter', () => {
  expect(Greeter('Satoshi')).toBe('Hello Satoshi');
});
