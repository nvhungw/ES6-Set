const animals = new Set(['dog', 'cat', 'pig', 'dog']);
animals.add('fish');
animals.add('lion');
const newAnimals = [...animals];
console.log(newAnimals);

