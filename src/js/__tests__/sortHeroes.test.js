import sortHeroesByHealth from '../sortHeroes';

describe('sortHeroesByHealth function', () => {
  test('should sort heroes by health in descending order', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const sortedHeroes = sortHeroesByHealth(heroes);


    expect(sortedHeroes).toEqual([
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ]);
  });

  test('should not modify the original array', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
    ];

    const originalHeroes = [...heroes];
    sortHeroesByHealth(heroes);

 
    expect(heroes).toEqual(originalHeroes);
  });

  test('should work with empty array', () => {
    const heroes = [];
    const sortedHeroes = sortHeroesByHealth(heroes);

    expect(sortedHeroes).toEqual([]);
  });

  test('should work with single hero', () => {
    const heroes = [{ name: 'маг', health: 100 }];
    const sortedHeroes = sortHeroesByHealth(heroes);

    expect(sortedHeroes).toEqual([{ name: 'маг', health: 100 }]);
  });

  test('should work with equal health values', () => {
    const heroes = [
      { name: 'герой1', health: 50 },
      { name: 'герой2', health: 50 },
      { name: 'герой3', health: 75 },
    ];

    const sortedHeroes = sortHeroesByHealth(heroes);

    expect(sortedHeroes).toEqual([
      { name: 'герой3', health: 75 },
      { name: 'герой1', health: 50 },
      { name: 'герой2', health: 50 },
    ]);
  });

  test('should work with negative health values', () => {
    const heroes = [
      { name: 'герой1', health: -10 },
      { name: 'герой2', health: 0 },
      { name: 'герой3', health: 50 },
    ];

    const sortedHeroes = sortHeroesByHealth(heroes);

    expect(sortedHeroes).toEqual([
      { name: 'герой3', health: 50 },
      { name: 'герой2', health: 0 },
      { name: 'герой1', health: -10 },
    ]);
  });
});