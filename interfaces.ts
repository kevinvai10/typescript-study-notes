//---------------------------------------------------------
    // INTERFACES
//---------------------------------------------------------

/**
 * an interface creates a new type describing
 * the property names and value types of an object
*/
// and interface is a description of how an object must be structured
interface Vehicle {
    name: string;
    year: number;
    broken: boolean;
    summary(): string;
};

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string {
        return `My name is: ${this.name}`
    }
};

// fixing long annotations with interfaces
// const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
const printVehicle = (vehicle: Vehicle): void => {
    console.log(`Name: ${vehicle.name}`)
    console.log(`Year: ${vehicle.year}`)
    console.log(`Broken ?: ${vehicle.broken}`)
};

