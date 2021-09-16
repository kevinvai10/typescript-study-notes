// WHAT ARE TYPES IN TS?
/**
 * easy way to refer to the different properties
 * + functions that a value has 
 */

// type annotations
const apples: number = 5;
const speed: string = 'fast';
const hasName: boolean = false;
const nothingMuch: null = null;


// arrays
const colors: string[] = ['red'];

// instantiating classes
// class Car {
//     // some properties
// }

// const car: Car = new Car();

// Object literal
const point: { x: number; y: number } = {
    x: 10,
    y: 20
};

// functions
const logNumber: (i: number) => void = (i) => {
    console.log(i)
};

// type annotation like above are explicit way to declare types
// but inference would do the same without the annotations
// rule for inference: if declaration and initialization are on the
// same line, typescript will figure out the type

/**
 * When to use type annotations ?
 * 1) with functions that return any
 */
const json = '{"x": 10, "y": 20}';
// this returns type any
const coordinates = JSON.parse(json);
// in order to fix this we would have to do something like:
const coordinates2: { x: number; y: number } = JSON.parse(json);

// 2) when we declare a variable and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;
// although much better to do something like:
// let foundWord = false;

for(let item of words) {
    if(true) {
        foundWord = true;
    }
}

// 3) when the type cannot be inferred
let numbers = [-10, -1, 12]
// let numberAboveZero = false;
let numberAboveZero: boolean | number = false;

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element > 0) {
        numberAboveZero = element
    }
}


//--------------------------------------------------------
      //ANNOTATIONS AND INFERENCE FOR FUNCTIONS
//--------------------------------------------------------
// type annotations for functions
// tell typescript types for args and return values
// KEY POINT, typescript inference works only with return types
const addTwoNums = (a: number, b: number): number => {
    return a + b;
};

// we will always add return annotations since not returning could
// end up returning a void type by accident

//function declaration
function divide(a:number, b: number): number {
    return a/b;
};

// type void
const logger = (message: string): void => {
    console.log(message)
};

const throwError = (message: string): never => {
    throw new Error(message)
};

// destructuring with typescript
const logWeather = (forecast: { date: Date, weather: string }): void => {
    console.log(forecast)
}
// becomes
const logWeatherDestructure = ({
    date,
    weather
}: {
    date: Date,
    weather: string
}): void => {
    console.log(date)
};
//--------------------------------------------------------
      //ANNOTATIONS AND INFERENCE FOR FUNCTIONS
//--------------------------------------------------------
const profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lon: 15
    },
    setAge(age: number): void {
        this.age = age;
    }
};
// this is inferred
const { age } = profile;
// with annotation it would be like
const { age: myAge }: { age: number } = profile;
const { coords: { lat, lon } }: { coords: {lat: number, lon: number} }  = profile;