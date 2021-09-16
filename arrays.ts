// type inference happens when we declare and initialize
const carMakers = ['ford', 'toyota'];
// a gotcha is that we want to put annotations with empty arrays
// const carMakers2 = [] -> this is type any
// const emptyArr: string[] = [];
const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
]; // -> type string[][]

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(2); -> throws error

// help with map, forEach and reduce
carMakers.map((car: string): string => {
    return car
});

// multiple type with arrays
// some will be date object instances or strings
const importantDates = [new Date(), '2030-10-10'];

// Tuples in TS
// array like structure where each element
// represent some property of a record
const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

// tuple to represent soda
// the order must be speciic and not modified
const pepsi: [string, boolean, number] = ['brown', true, 40];
// following line breaks because it breaks the order defined in the tuple
// pepsi[0] = 40;
type Drink = [string, boolean, number];
const coke: Drink = ['brown', true, 40]

