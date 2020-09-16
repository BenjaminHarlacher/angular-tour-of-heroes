var faker = require('faker');
var database = { heronames: []};

for (var i = 1; i<= 10; i++) {
  database.heronames.push({
    id: i,
    name: faker.name.firstName(),
    surname: faker.name.lastName()

  });
}

console.log(JSON.stringify(database));