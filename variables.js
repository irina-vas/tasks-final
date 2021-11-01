'use strict';

//done
// Создайте три переменные. Присвойте первой переменной числовое значение.
// Вторая переменная равна первой переменной, увеличенной в три раза. Третья
// переменная равна сумме двух первых. Выведите на экран все три.

// let num = 1;
// let myltyThree = num * 3;
// let sum = num + myltyThree;
// console.log(num, myltyThree, sum);


//done
// 2. Создайте переменные firstName и lastName для хранения имени и фамилии,
// запишите в них значения из модального окна prompt. Выведите на экран
// приветствие “What’s up (firstName) (lastName)”.

// let firstName = prompt('what is your first name?');
// let lastName = prompt('what is your last name?');
// alert(`What's up ${firstName} ${lastName}!!`)


//done
// 3. Создайте переменные x и y для хранения числа. Значения переменные
// получают из prompt. Рассчитайте произведение, частное, разность и сумму этих
// значений. Результат последовательно отобразите в модальном окне.

// let x = prompt('enter the first number');
// let y = prompt('enter the second number');
// alert(`the product of numbers is ${x * y}`);
// alert(`the difference of numbers is ${x / y}`);
// alert(`the sum of numbers is ${+x + +y}`);


//done
// 4. Напишите в переменных формулу для расчета з/п за июль с учетом, что
// количество рабочий часов, количество рабочих дней в неделе и рейт за час –
// значения читаются из prompt. (Просчитывать какой это месяц, 30 или 31 день не
// нужно).

// let workingHours = prompt('enter the number of working hours');
// let workingDaysPerWeek = prompt('enter the number of working days in a week');
// let rate = prompt('enter the rate per hour');

// let wage = Number(rate * workingHours * workingDaysPerWeek * 4 + 2 * rate * workingHours);
// let wage30days = Number(rate * workingHours * 22)
// console.log(wage, wage30days);


//done
// 5. Напишите программу, которая определяет, является ли число, введенное
// пользователем, нечётным.

// let num = +prompt('enter any number');
// if (num % 2 === 0) {
//   console.log('the number is even')
// } else {
//   console.log('the number is odd')
// }


//done
// 6. Напишите программу, которая проверяет является ли значение, введенное
// пользователем, числом.

// let something = prompt('write something');
// let a = Number(something);
// console.log(a)

// if (a) {
//   console.log('number')
// } else {
//   console.log('not a number')
// }


//done
// 7. Запишите в переменную случайное число (Math.random()), умножьте его на 100
// и округлите. Получите второе число из окна prompt. Сравните и отобразите в
// модальном окне: первое число меньше второго или нет, а также оба значения.

// let num1 = Math.round(Math.random() * 100);
// let num2 = +prompt('enter the number');

// if (num1 > num2) {
//   alert(`${num1} is bigger then ${num2}`)
// } else {
//   alert(`${num2} is bigger then ${num1}`)
// }


//done
// 8. Создайте переменную str и запишите в нее из prompt такое предложение «Мне
// нравится изучать Front-end». Также создайте еще одну переменную и запишите
// в нее из prompt то, что вам нравится изучать.

// С помощью методов строки
// определите существует ли то что вам нравится изучать в исходной строке str.

// Также возьмите подстроку «Мне нравится изучать » из исходной переменной str
// сохраните ее в отдельной переменной. Создайте еще одну переменную result
// куда запишите результирующую строку объединяющую «Мне нравится
// изучать » и то что вам нравится изучать (примените для этого обратные
// кавычки ` `). Отобразите результат в модальном окне.
// let str = prompt('напиши, что тебе :) нравится изучать фронтэнд?');
// let str2 = prompt('что вам нравится изучать?');
// let common = str.includes(str2);
// let strSliced = str.slice(0,20);
// let result = `${strSliced} ${str2}`;

// console.log(common);
// console.log(result);