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

// CHALLENGE
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-published' } = book.publisher

console.log(publisherName);