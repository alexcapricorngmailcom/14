// 1. Напишите функцию triangle(n), которая будет выводить треугольник размером с переданный 
// аргумент n. Напрмиер, если вызвать triangle(7), то результат будет такой:
// #
// ##
// ###
// ####
// #####
// ######
// #######

function triangle(n) {
    let res = '';
    for (let i = 0; i < n; i++) {
        res = res + '#';
        console.log(res);
    }
}

triangle(7);

console.log('');
console.log('============');
console.log('');

// 2. Затем перепишите функцию в mirrorTriangle(n), что бы она давала такой результат:
// #
// ##
// ###
// ####
// #####
// ######
// #######
// ######
// #####
// ####
// ###
// ##
// #

function mirrorTriangle(n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        result = result + '#';
        console.log (result);
    }
    result = '';
    let counter = n-1;
    for (let j = 1; j < n; j++) {
        for (let k = counter; k > 0; k--) {
            result = result + "#";
        }
        console.log(result);
        result = '';
        counter--;
    }
}

mirrorTriangle(7);

console.log('');
console.log('============');
console.log('');

// 3. Выясните что такое "последовательности Фибоначчи" или "числа Фибоначчи". 
// Нужно, чтобы вы, теми средствами что есть у нас есть сейчас, сделали 
// последовательность до n числа и выводил каждое число результат из последовательности в консоль.

function fib(n) {
    let a = 0;
    let b = 1;

    if (n == 0) {
        return console.log('В последовательности Фибоначчи должно быть как минимум одно число');
    } else if (n == 1) {
        return console.log(a);
    } 

    console.log(a);
    console.log(b);
    for (let i = 2; i < n; i++) {
        let result = a + b;
        a = b;
        b = result;
        console.log(result);
    }
}

fib(15);