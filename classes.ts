// reminder
// public methods can be accessed anywhere
// private methods can only be accessed within the class they are declared
// protected methods can be accessed in the class they are declared and child classes

class Vehicle {
    constructor(public color: string){}
    // using the public modifier it stands as declaring 
    // color: string
    // then referencing inside constructor as this.color = color
    drive(): void {
        console.log('driving')
    }
    private honk(): void {
        console.log('honking')
    }
}

class Car extends Vehicle {
    // we don't add modifier to the argument for super class
    constructor(public wheels: number, color: string) {
        super(color);
    }

    color: string = 'red';
    // overriding the method
    drive(): void {
        console.log('drrrriving')
    }
}
