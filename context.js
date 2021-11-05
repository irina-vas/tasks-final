
// 1. Создайте объект calculator с методами:
//     a. read() запрашивает prompt для двух значений и сохраняет их как
// свойства объекта x, y
// b. sum() возвращает сумму этих двух значений
// c. multi() возвращает произведение этих двух значений
// d. diff() возвращает разницу
// e. div() возвращает частное


// let calculator = {
//     x : '',
//     y: '',
//     read() {
//         let x = +prompt('write some number for "x"');
//         let y = +prompt('write some number for "y"');
//         this.x = x;
//         this.y = y;
//         return this;
//     },
//     sum() {
//         let sum = this.x + this.y;
//         return sum;
//     },
//     multi() {
//         let mult = this.x * this.y;
//         return mult;
//     },
//     diff() {
//         let diff = this.x - this.y;
//         return diff;
//     },
//     div() {
//         let div = this.x / this.y;
//         return div;
//     }
//
// }

// console.log(calculator.read());
// console.log(calculator.sum());

// 2. Создайте объект coffeeMachine со свойством message: ‘Your coffee is ready!’ и
// методом start(), при вызове которого – coffeeMachine.start() – через 3 секунды
// появляется окно с сообщением, записанным в свойстве объекта message.

// let coffeeMachine = {
//     ['message'] : 'your coffee is ready',
//     start() {
//         setTimeout(() => {
//             console.log(coffeeMachine['message'])
//         }, 3000)
//     }
// }

// coffeeMachine.start();

// Создайте объект counter с методами увеличения, уменьшения значения
// счетчика и методом возврата текущего значения. Используйте концепцию
// chaining для создания цепочки вызовов.
//var current = counter.inc().inc().dec().inc().dec().getValue();
// alert(current);

//
// let counter = {
//     count: 0,
//     inc: function() {
//         this.count++;
//         return this;
//     },
//     desc: function() {
//         this.count--;
//         return this;
//     },
//     getValue: function(count) {
//         return thic.count
//     }
// }
//
// counter.inc().inc().inc().desc();
// alert(counter.count);

// 4. Создайте объект с данными: x, y и методами: getSum, getDiff, getMulti, getDiv.
//     Методы объекта ничего не реализуют, а только выводят в alert сообщения вида
// ‘1 + 1 = 2’ или ‘1 / 0 = Infinity’. Для расчетов все методы используют функционал
// ранее созданного калькулятора.
//
// let object = {
//     x: '',
//     y: '',
//     getSum: function(x, y) {
//         this.x = x;
//         this.y = y;
//         return this.x + '+' +this.y + '=' + calculator.sum.call(this, this.x, this.y)
//     },
//     getDiff: function(x, y) {
//         this.x = x;
//         this.y = y;
//         return this.x + '-' +this.y + '=' + calculator.multy.call(this, this.x, this.y)
//     },
//     getMulti: function(x, y) {
//         this.x = x;
//         this.y = y;
//         return this.x + '*' +this.y + '=' + calculator.diff.call(this, this.x, this.y)
//     },
//     getDiv: function(x, y) {
//         this.x = x;
//         this.y = y;
//         return this.x + '/' +this.y + '=' + calculator.div.call(this, this.x, this.y)
//     }
// }
//
// alert(object.getSum(1, 1));//2
// alert(object.getDiv(1, 0));//1
//просмотри условие задачи, там не так делается вызов, а от этого должно быть немного другое решение



// 5. Есть следующий код:
//Допишите код, чтобы в консоли браузера появились строки, которые написаны в
// комментариях:
//     var country = {
//         name: 'Ukraine',
//         language: 'ukrainian',
//         capital: {
//             name: 'Kyiv',
//             population: 2907817,
//             area: 847.66
//         }
//     };
// function format(start, end) {
//     return console.log(this.name)
// }
//
//
// format.call(country, '', ''); // Ukraine
// format.apply(country); // [Ukraine]
// format.call(country.capital, '', ''); // Kyiv
// format.apply(country.capital, ['', '']); // Kyiv
// format.apply('', ['', '']); // undefined


// 6. Создайте объект user с полем name. Создайте функцию format с параметрами
// start и end:
// Привяжите функцию format() к объекту user таким образом, чтобы ее вызов возвращал
// отформатированное имя пользователя
// Реализуйте решение текущего задания используя метод bind().

// let user = {
//     name: 'ira',
// }
// function format(start, end) {
//     console.log(start + this.name + end);
// }
//
// format.bind(user, '<<<', '>>>')();


// 7. Напишите функцию concat, которая соединяет две строки, разделенные каким-
// то символом: разделитель и строки передаются в параметрах функции.
//     Используя карринг, создайте новую функцию hello, которая которая выводит
// приветствие тому, кто передан в ее параметре:
//
// function concat(a, b, c) {
//    return console.log(b + a + c);
// }
//
// let hello = concat.bind(null,' ', 'hello')
//
// hello('World'); // Hello World
// hello('John'); // Hello John

// 8. Напишите функцию, которая возвращает куб переданного числа, аналог
// Math.pow(x, 3) – a) используя цикл b) используя рекурсию:
//     console.log( cube(2) ); // 8

// function cube(num) {
//     let pow = 3;
//     let a = 1;
//
//     for (let i = 0; i < pow; i++) {
//         a *= num;
//     }
//     return a;
// }

// function cube(num, pow=3) {
//     if (pow === 1)  {
//         return num;
//     } else {
//         return num * cube(num, pow-1)
//     }
// }
//
// console.log(cube(2))

// Придумайте алгоритм расчета суммы всех фактических параметров функции с
// использованием только рекурсии:console.log( sum(1, 2, 3, 4, 5) ); // 15


// function sum(...arguments) {
//     if (arguments.length === 1) {
//         return arguments[0];
//     } else {
//         let last = arguments.pop();
//         let prev = arguments.pop();
//         return sum(...arguments, last + prev);
//     }
// }
//
// console.log(sum(1,2,3,4,5))