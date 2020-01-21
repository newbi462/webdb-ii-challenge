
exports.up = function(knex) {
  return knex.schema.createTable("cars", (table) => {
    table.increments();// id column, integer, primary key, auto-increment
    table.string("vin").index().notNullable();//the VIN,
    table.string("make").index().notNullable();//make,
    table.string("model").index().notNullable();//model,
    table.integer("mileage").index().notNullable();//mileage
    table.string("transmission").index();//transmission type
    table.string("title").index();//status of the title
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};

// npx knex migrate:make cars

/*
The critical information for each car is:
  the VIN,
  make,
  model,
  and mileage.


They also track:
  transmission type and
  status of the title (clean, salvage, etc.),

///but this information is not always immediately known.

*/

//.notNullable()
