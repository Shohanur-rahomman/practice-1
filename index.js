const number = [10, 20, 30, 40];
const number2 = [10, 20, 30, 40, 50, 70];

const num = [number, ...number2];//+ to array
// console.log(num);

function sum(a, b, c) {
    return a + b + c;
}

const number3 = [30, 40, 50];
// console.log(sum(...number3));//mullite parameter pass


const friends = ['joy', 'roy', 'komar', 'hasin'];//main array                 
// console.log(friends);

const newFriend = [...friends];//full array copy no cheng
// console.log(newFriend);

const count = ['bank', 'bangladesh', 'hashi'];
const [first, , third] = count;
// console.log(third);//cut bangladesh

const color = ['red', 'blue', 'black', 'sky'];
const [firstColor, ...restColor] = color;
// console.log(firstColor);
// console.log(restColor);

const person = {
    name: 'imran',
    age: 28,
    country: 'bangladesh'
}

const {name,age,country}=person;
// console.log(name,age,country);