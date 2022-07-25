const possessiveAdjectives = [
  'my',
  'your',
  'his',
  'her',
  'its',
  'our',
  'their',
  'whose',
]

const demonstrativeAdjectives = [
  'this',
  'that',
  'these',
]

const positiveAdjectives = [
  'adorable',
  'adventurous',
  'awesome',
  'ambient',
  'blue',
  'bright',
  'calm',
  'choral',
  'deep',
  'dark',
  'faithless',
  'fearless',
  'gentle',
  'glorious',
  'huge',
  'hot',
  'heavy',
  'juicy',
  'kind',
  'killer',
  'light',
  'magic',
  'massive',
  'noisy',
  'perfect',
  'quick',
  'quiet',
  'red',
  'sharp',
  'shady',
  'soft',
  'ugly',
  'wise',
]

const nouns = [
  'gold',
  'afternoon',
  'Monday',
  'Friday',
  'Sunday',
  'December',
  'July',
  'planet',
  'holiday',
  'river',
]

function getRandomElementFromArray<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateRandomName(): string {
  const components = []
  if (Math.random() < 0.5) {
    components.push(getRandomElementFromArray([...demonstrativeAdjectives, ...possessiveAdjectives]))
  }
  components.push(getRandomElementFromArray(positiveAdjectives))
  components.push(getRandomElementFromArray(nouns))
  return components.join(' ')
}
