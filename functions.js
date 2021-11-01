//DONE
// 1. Напишите функцию max, которая сравнивает два числа и возвращает
// большее:
// console.log( max(0, -1) ); // 0

// function max(a,b) {
//   return Math.max(a,b);
// }

// console.log(max(0,-1))

//done
// 2. Напишите функцию-аналог Math.min(). Функция принимает любое количество
// чисел и возвращает меньшее из них:console.log( min(0, -1, 100, 500, 100500) ); // -1

//  function min(...arguments) {
//   let sortedArr = arguments.sort((a, b) => a - b);
//   return sortedArr[0];
//  }


// console.log(min(1,2,-10, 3,-1));


//done
// 3. Изучите перебирающие методы массивов: forEach, filter, map. Создайте
// массив объектов users (~10 объектов), каждый объект имеет поля firstname,
// lastname, age с разными значениями. Используя встроенные функции массивов:
// a. Отфильтруйте пользователей младше 18 лет
// b. Добавьте каждому объекту поле fullName, которое является
// конкатенацией имени и фамилии
// c. Сформируйте новый массив, который содержит только полное имя
// пользователей

// let arr = [
//   userA = {
//     firstName: 'vasya',
//     lastName: 'rtrt',
//     age: 1
//   },
//   userB = {
//     firstName: 'vasya',
//     lastName: 'rtrt',
//     age: 1
//   },
//   userC = {
//     firstName: 'vasya',
//     lastName: 'rtrt',
//     age: 10
//   },
//   userD = {
//     firstName: 'lena',
//     lastName: 'rtyv',
//     age: 100
//   },
//   userE = {
//     firstName: 'vitya',
//     lastName: 'nmgg',
//     age: 17
//   },
//   userF = {
//     firstName: 'kostya',
//     lastName: 'rtyy',
//     age: 18
//   },
//   userG = {
//     firstName: 'olya',
//     lastName: 'yyt',
//     age: 19
//   },
//   userH = {
//     firstName: 'galya',
//     lastName: 'cgcg',
//     age: 15
//   },
//   userI = {
//     firstName: 'vova',
//     lastName: 'oco',
//     age: 21
//   },
//   userJ = {
//     firstName: 'vanya',
//     lastName: 'wpwp',
//     age: 122
//   }
// ]

// let grownUps = arr.filter(i => i.age > 18);
// console.log(grownUps);
// let pushfullName = arr.map(i => {
//   i.fullName = i.firstName + ' ' + i.lastName;
//   return i;
//})
//console.log(pushfullName);

// let onlyFullName = pushfullName.map(i => {
//   delete i.firstName;
//   delete i.lastName;
//   delete i.age;
//   return i;
// });
// console.log(onlyFullName);


//done
// 4. Напишите функцию аналог метода массива shift. Функция удаляет из
// переданного в параметре массива первый элемент.

// function shift(arr) {
//   arr.splice(0,1);
//   return arr;
// }

// let arr2 = [0,1,2,3,4,5];

// console.log(shift(arr2))


//done
// 5. Напишите функцию аналог метода массива push. Функция добавляет в конец
// переданного в параметре массив произвольное количество элементов.

// function push(arr,...arguments) {
//   let pushed = [...arr,...arguments];
//   return pushed;
// }
// let arr = [0,1,2]
// console.log(push(arr,3,4,5))

// 6. Напишите функцию аналог метода Object.assign(). Первый параметр функции -
// целевой объект, поля которого будут изменены или расширены. Остальные
// параметры - объекты-источники, полями которых будет расширяться целевой
// объект.
// var source = {firstname: 'Tom', age: 10}
// var s = extend(source, {firstname: 'John'}, {lastname: 'Doe'});
// console.log(s); // {firstname: 'John', age: 10, lastname: 'Doe'}

// function objAssign(...arguments) {
//   let assignedObj = {...arguments }
//   return assignedObj;
// }

// let source = {firstname: 'Tom', age: 10}

// console.log(objAssign(source, {firstname: 'John'}, {lastname: 'Doe'})); // {firstname: 'John', age: 10, lastname: 'Doe'}


//done
// 7. Напишите функцию setComment с параметрами: date, message, author. Дата и
// текст сообщения - обязательные параметры, если какой-то из них или оба
// отсутствуют, то выполнение функции должно обрываться, а пользователю
// выдаваться предупреждение (alert) о том, что данные переданы некорректно.
// Параметр author - опциональный, но должна происходить проверка: если
// параметр не передан, то вместо него подставляется значение ‘Anonymous’.
// Функция распечатывает в консоле текст в формате:
// <имя_автора>, <дата>
// <текст_сообщения>
// setComment('2016-11-02', 'Everything is ok', 'John');
// John, 2016-12-22
// Everything is ok
// setComment('2016-11-02', 'You could do it better!');
// Anonymous, 2016-12-22
// You could do it better!


// function setComment(date, message, author='Anonumus') {
//   let date1 = date;
//   let message1 = message;
//   let author1 = author;
//   if (date == null || message == null) {
//     alert('wrong!')
//   } else {
//     console.log(`${author1}, ${date1} ${message1}`)
//   }
// }

// setComment(12,'ggg', 'ira');

//done
// 1. Используя замыкание, напишите функцию createTimer, которая использует
// метод performance.now() для получения текущей временной метки и служит
// для замера времени выполнения другого кода(код менять, видоизменять
// нельзя, как написан так и должен остаться):
// let timer = createTimer();
// alert('!') // код, время выполнения которого нужно измерить
// alert( timer() ); // время в мкс от начала выполнения createTimer()
// до момента вызова timer()


//done
// function createTimer() {
//   let time1 = performance.now()
//     return function() {
//       let time2 = performance.now()
//       return alert(`${time2 - time1}`)
//   }
// }

// let timer = createTimer();
// alert('!');
// timer();

//2. done
// Используя замыкания, создайте функцию createAdder(), которая принимает на
// вход любой примитивный параметр и возвращает функцию, которая добавляет
// к первому параметру второй. Функция работает по следующему принципу:
// var hello = createAdder('Hello, ');
// alert( hello('John') ); // Hello, John
// alert( hello('Harry') ); // Hello, Harry
// var plus = createAdder(5);
// alert( plus(1) ); // 6
// alert( plus(5) ); // 10


// function createAdder(a) {
//   return function(b) {
//     return a + b;
//   }
// }

// let hello = createAdder('Hello, ');
// alert( hello('John') ); // Hello, John
// alert( hello('Harry') ); // Hello, Harry
// let plus = createAdder(5);
// alert( plus(1) ); // 6
// alert( plus(5) ); // 10
