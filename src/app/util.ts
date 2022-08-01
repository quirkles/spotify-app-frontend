export enum Color {
  'primary' = 'primary',
  'info' = 'info',
  'success' = 'success',
  'warning' = 'warning',
  'blue' = 'blue',
  'pink' = 'pink',
}

export function getRandomElementFromArray<T>(items: T[]): T {
  return items[Math.floor(Math.random()*items.length)];
}
