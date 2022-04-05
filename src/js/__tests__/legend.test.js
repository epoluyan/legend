import getHeroInfo from '../legend';

test('should get healthy health', () => {
  const result = getHeroInfo({ name: 'Маг', health: 51 });
  expect(result).toBe('healthy');
});

test('should get wounded health', () => {
  const result = getHeroInfo({ name: 'Маг', health: 50 });
  expect(result).toBe('wounded');
});

test('should get wounded health', () => {
  const result = getHeroInfo({ name: 'Маг', health: 15 });
  expect(result).toBe('wounded');
});

test('should get critical health', () => {
  const result = getHeroInfo({ name: 'Маг', health: 14 });
  expect(result).toBe('critical');
});
