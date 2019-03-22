// ----------------
// OBJECT DESTRUCTURING
// ----------------

// const person = {
//     name: 'Jon',
//     age: 43,
//     location: {
//         city: 'Rutherford',
//         temp: 42
//     }
// }

// const { name: firstName = 'anonymous', age } = person;
// const { city, temp: temperature } = person.location;

// console.log(`${name} is ${age}.`);

// if (city && temperature) {
//     console.log(`It is ${city} in ${temperature}`);
// }

// Challenge
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-published' } = book.publisher

// console.log(publisherName);


// ----------------
// ARRAY DESTRUCTURING
// ----------------

const address = ['126 Hackett Pl', 'Rutherford', 'NJ', '07070'];
const [, city, state = 'NY', ] = address;

console.log(`You are in ${city}, ${state}`);

// Challenge
const item = ['Coffee (hot)', '$2.00', '$2.50','$2.75'];

const [product, , medPrice] = item;

console.log(`A medium ${product} costs ${medPrice}.`)