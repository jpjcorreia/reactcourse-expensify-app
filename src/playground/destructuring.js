// const person = {
// 	name: "Joao",
// 	age: 32,
// 	location: {
// 		city: "Leiria",
// 		temp: 22,
// 	},
// };

// const { name: firstName = "Anonymous", age } = person;

// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
// 	console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
// 	title: "A Biblia",
// 	author: "Jesus",
// 	publisher: {
// 		name: "Ola",
// 	},
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName);

/// Array

const address = ["Rua do Sobe e Desce", "Leiria", "Portugal", "2400-188"];

const [street, city, country, postalCode] = address;

console.log(`You are in ${street} ${city}`);
