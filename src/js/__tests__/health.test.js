import healthLevel from '../health';

describe('healthLevel function', () => {
  test('should return "healthy" for health > 50', () => {
    const character = { name: 'Маг', health: 90 };
    expect(healthLevel(character)).toBe('healthy');
  });

  test('should return "healthy" for health = 51', () => {
    const character = { name: 'Маг', health: 51 };
    expect(healthLevel(character)).toBe('healthy');
  });

  test('should return "wounded" for health = 50', () => {
    const character = { name: 'Маг', health: 50 };
    expect(healthLevel(character)).toBe('wounded');
  });

  test('should return "wounded" for health = 15', () => {
    const character = { name: 'Маг', health: 15 };
    expect(healthLevel(character)).toBe('wounded');
  });

  test('should return "wounded" for health between 15 and 50', () => {
    const character = { name: 'Маг', health: 30 };
    expect(healthLevel(character)).toBe('wounded');
  });

  test('should return "critical" for health = 14', () => {
    const character = { name: 'Маг', health: 14 };
    expect(healthLevel(character)).toBe('critical');
  });

  test('should return "critical" for health < 15', () => {
    const character = { name: 'Маг', health: 10 };
    expect(healthLevel(character)).toBe('critical');
  });

  test('should return "critical" for health = 0', () => {
    const character = { name: 'Маг', health: 0 };
    expect(healthLevel(character)).toBe('critical');
  });

  test('should not modify input object', () => {
    const originalCharacter = { name: 'Маг', health: 75 };
    const character = { ...originalCharacter };
    
    healthLevel(character);
    
    expect(character).toEqual(originalCharacter);
  });
});