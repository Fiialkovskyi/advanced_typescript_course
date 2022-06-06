const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
}

// Type alias
type Drink = [string, boolean, number];

const cola: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const coffee: Drink = ['black', true, 0]