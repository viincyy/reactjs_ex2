// EXPLICIT TYPES

let myName: string = 'S'
let age: number = 24
let isAuthenticate: boolean = true

myName = 'S'
age = 24
isAuthenticate = true

// arrays
let students: string[] = ['S', 'N'];

// union
let mixed: (string | number | boolean)[];
mixed = [4, 'S', false];
mixed.push(1);

let id: (string | number);
id = 123;
id = "123"

let hobby: 'book' | 'music'
hobby = 'book'

// object
let person: Object
person = {
    name: 'S',
    age: 30
}
person = []

let student: {
    name: string,
    age: number,
    isGood: boolean;
}

student = {
    name: 'S',
    age: 25,
    isGood: false
}
