require("./db/db");
const Car = require("./models/car");

async function addCarData() {
  const newCar = new Car({
    make: "Toyota",
    model: "Corolla",
    year: 2022,
  });

  try {
    const savedCar = await newCar.save();
    console.log("Car data saved successfully:", savedCar);
  } catch (error) {
    console.error("Error saving car data:", error);
  }
}

addCarData();

async function addAnotherCarData() {
  const anotherCar = new Car({
    make: "Honda",
    model: "Civic",
    year: 2023,
  });

  try {
    const savedAnotherCar = await anotherCar.save();
    console.log("Another car data saved successfully:", savedAnotherCar);
  } catch (error) {
    console.error("Error saving another car data:", error);
  }
}

addAnotherCarData();

async function findAllCars() {
  try {
    const allCars = await Car.find();
    console.log("All cars in the database:", allCars);
  } catch (error) {
    console.error("Error fetching all cars:", error);
  }
}

findAllCars();
