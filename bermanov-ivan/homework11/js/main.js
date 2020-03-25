const { calculator } = require('./calculator');

console.log(`calculator(2, 3, +): ${calculator(2, 3, '+')}`);
console.log(`calculator(10, 5, /): ${calculator(10, 5, '/')}`);
console.log(`calculator(8, null, '/'): ${calculator(8, null, '/')}`);
console.log(`calculator(25, 'bye', '+'): ${calculator(25, 'bye', '+')}`);
console.log(`calculator(1, 0, undefined): ${calculator(1, 0, undefined)}`);
console.log(`calculator(40, 23, 'Hello, BDD!'): ${calculator(40, 23, 'Hello, BDD!')}`);

