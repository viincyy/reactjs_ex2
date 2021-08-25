// FUNCTION
const square= (side: number) => side*side
console.log(square(3))

let greet: Function
greet = (a: number, b: number) => a*b;
console.log(greet(1, 2))
const add = (a: number, b: number, c:number | string) => {
    console.log()
}
console.log(add(1,2,3))

const minus = (a: number, b:number):number => a - b;