exports.seed = function(knex, Promise) {
  return knex("cars").truncate()
    .then(function () {
      return knex("cars").insert([
        {
          vin: "vin1",
          make: "make1",
          model: "model1",
          mileage: 123456,
          transmission: "transmission type",
          title: "clean"
        },
        {
          vin: "vin2",
          make: "make2",
          model: "model2",
          mileage: 123456,
          transmission: "transmission type",
          title: "salvage"
        },

      ]);
    });
};
