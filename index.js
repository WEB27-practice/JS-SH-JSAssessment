const obj = {
    name: "devin",
    height: "172",
    mass: "77",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    City: "",
    Colors: ["Blue", "Black", "Green", "Yellow", "Opal", "Purple"],
    Cars: [
      {
        Make: "civic",
        model: "ls",
        manufacturer: "Honda",
        cost: 30000,
      },
      {
        Make: "explorer",
        model: "king-edition",
        manufacturer: "Ford",
        cost: 25000,
      },
     {
        Make: "Enzo",
        model: "Spyder",
        manufacturer: "ferrari",
        cost: 24000,
      },
     {
        Make: "wrx",
        model: "sti",
        manufacturer: "suburb",
        cost: 37000,
      },
     ],
     dreamCars: [
      {
        Make: "veyron",
        model: "st",
        manufacturer: "Bugatti",
        cost: 300000,
      },
      {
        Make: "bmw",
        model: "ks3",
        manufacturer: "Ford",
        cost: 250000,
      },
     {
        Make: "Enzo",
        model: "Spyder",
        manufacturer: "ferrari",
        cost: 24000,
      },
     {
        Make: "lambda’s",
        model: "vr6i",
        manufacturer: "Lamborghini",
        cost: 37000,
      },
     ],
    };

// length of dreamCars array
console.log(`This is the length`, obj.Cars.length);

// get second car from cars array
console.log(`This is the obj.Cars[1]`, obj.Cars[1]);

// get the make
console.log(`The make is`, obj.Cars[1].Make);

// how much do all the dream cars cost?

const sum = array => {
    const capture = array.reduce(function(total, current) {
        return total + current.cost;
    }, 0);

    return capture;
};

// console.log(sum(obj.dreamCars));
// console.log(sum(obj.Cars));

const sumCars = (arr1, arr2) => {

    const sumArr1 = arr1.reduce((total, current) => {
        return total + current.cost;
    }, 0)

    const sumArr2 = arr2.reduce((total, current) => {
        return total + current.cost;
    }, 0)
}

