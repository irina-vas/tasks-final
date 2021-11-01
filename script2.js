'use strict';

//done
// 1. Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’].
// Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.

// let arr = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'];
// let numOrZero = num => isNaN(num) ? 0 : num
// alert(arr.reduce((a, b) => Number(numOrZero(a)) + Number(numOrZero(b))));

//donw
// 2. Сгенерируйте массив из n случайных чисел с двумя знаками после запятой.
// Переберите массив и распечатайте в консоли значения его элементов,
// возведенные в пятую степень, не используя функцию Math.pow().

// let randomArr = (length, mult) => [...new Array(length)].map(() => (Math.random() * mult).toFixed(2));
// let arr = randomArr(10, 2);
// arr.forEach(i => {
//   console.log(i * i * i * i * i)
// })
// console.log(arr);

//done
// 3. Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
// a. Добавьте в начало массива значение ‘Backbone.js’
// b. Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
// c. Добавьте в массив значение ‘CommonJS’ вторым элементом
// d. Найдите и удалите из массива значение ‘jQuery’, выведите его в alert
// со словами “Это здесь лишнее”

// let arr = ['AngularJS', 'jQuery'];
// arr.unshift('Backbone.js');
// arr.push('ReactJS', 'Vue.js');
// arr.splice(1, 0, 'CommonJS');
// console.log(arr.indexOf('jQuery'));
// let jQuery = arr.slice(2,3);
// alert(`${jQuery} это лишнее`)
// console.log(jQuery)
// console.log(arr);

//DONE
// 4. Создайте строку с текстом ‘Как однажды Жак звонарь сломал фонарь головой’.
// Разбейте ее на массив слов, и переставьте слова в порядке ‘Как Жак звонарь
// однажды сломал головой фонарь’ с помощью любых методов массива (indexOf,
// splice ...). Затем объедините элементы массива в строку и выведите в alert
// исходный и итоговый варианты.

// let str = 'Как однажды Жак звонарь сломал фонарь головой';

// let arr = str.split(' ');
// console.log(arr);

// let kak = arr.splice(0,1).toString();

// let odnajdi = arr.splice(0,1).toString();
// let jak = arr.splice(0,1).toString();
// let zvonar = arr.splice(0,1).toString();
// let slomal = arr.splice(0,1).toString();
// let fonar = arr.splice(0,1).toString();
// let golovoy = arr.splice(0,1).toString();


// let newArr = [];
// newArr.push(kak, jak, zvonar, odnajdi, slomal, golovoy, fonar);
// let newStr = newArr.join(' ')
// alert(`новая строка: ${newStr}`);
// alert(`старая строка: ${str}`)


//DONE
// 5. Создайте ассоциативный массив person, описывающий персону, с
// произвольным количеством произвольных полей. С помощью оператора in или
// typeof проверьте наличие в объекте свойства, прочитанного из prompt, и
// выведите его на экран. Если свойства нет, то добавляйте его в объект со
// значением, которое также запрашивается из prompt.

// let person = {
//   name: 'ira',
//   surname: 'vasylenko'
// }

// let property = prompt('write some property to check the object');
// let value = prompt('write a value');
// let result = property in person;
// console.log(result);

// if(!result) {
//   person[property] = value;
// }

// console.log(person);


//DONE
// 6. Сгенерируйте объект, описывающий модель телефона, заполнив все свойства
// значениями, прочитанными из prompt (например: brand, model, resolution,
// color...), не используя вспомогательные переменные. Добавьте этот гаджет
// персоне, созданной ранее.

// let phone = {
//   brand: prompt('brand'),
//   model: prompt('model'),
//   resolution: prompt('resolution'),
//   color: prompt('color'),
// }

// person = {...person, ...phone}
// console.log(person)


//done
// 7. Создайте объект dates для хранения дат. Первая дата – текущая, new Date.
// Вторая дата – текущая дата минус 365 дней. Из prompt читается дата в
// формате yyyy-MM-dd. Проверьте, попадает ли введенная дата в диапазон дат
// объекта dates.

// let d = new Date();
// d.setDate(d.getDate()- 365);

// let date = {
//   now: new Date(),
//   min365Days: d
// }

// let userDate = prompt('write the date yyyy-MM-dd');
// console.log(new Date(userDate))

// if (new Date(userDate) > date.min365Days && new Date(userDate) < date.now) {
//   console.log('yes')
// } else {
//   console.log('no')
// }


//done
// 8. Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt
// для ввода любых символов, полученное значение добавляйте в конец
// созданного массива. После выхода из цикла посчитайте сумму всех чисел
// массива и выведите в alert полученный результат.

// function addToArr(n) {
//   let arr = [];
//   for (let i = 0; i < n; i++) {
//     let something = prompt('enter something');
//     arr.push(something);
//   }
//   return arr;
// }

// let sum = addToArr(3);
// let numOrZero = num => isNaN(num) ? 0 : num;
// alert(sum.reduce((a, b) => Number(numOrZero(a)) + Number(numOrZero(b))));


//done
// 9. Используя вложенные циклы, сформируйте двумерный массив, содержащий
// таблицу умножения:

// let arr = [];
// let count = 10;

// for(let i = 1; i < count; i++) {
//   let temp = [];
//   for(let j = 1; j < count;j++) {
//     temp.push(`${i}x${j}=${i*j}`);
//   }
//   arr.push(temp)
// }

// console.log(arr);


//done
//10. Создайте структуру данных, полностью описывающую html-разметку картинки.

// <img src="https://www.google.com.ua/images/branding/googlelogo/1x/
// googlelogo_color_272x92dp.png" alt="" style="border: 1px solid
// #ccc" width="200" />

// let tagImg = {
//   src: 'https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
//   alt: '',
//   style: 'border: 1px solid #ccc',
//   width: '200'
// }