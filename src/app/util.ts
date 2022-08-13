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

export function getRandomIntInRange(x: number, y: number) {
  const min = Math.ceil(Math.min(x, y));
  const max = Math.floor(Math.max(x, y));
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function colorRandomizer (seed?: number) : {
  primaryColor: Color,
  secondaryColor: Color,
  tertiaryColor: Color,
} {
  let colors = Object.values(Color)
  let r: number = seed || getRandomIntInRange(colors.length, colors.length * 2)
  const primaryColor = colors[r % colors.length]
  colors = colors.filter(c => c !== primaryColor)
  const secondaryColor = colors[(r + (colors.length * (colors.length -1))) % colors.length]
  colors = colors.filter(c => c !== secondaryColor)
  const tertiaryColor = colors[(r + (colors.length * (colors.length -1))) % colors.length]
  return {
    primaryColor, secondaryColor, tertiaryColor
  }
}

export function convertIdToNumber(id: string): number {
  return parseInt(id.replace(/\D/g, ""), 10)
}
