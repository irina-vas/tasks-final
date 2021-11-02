'use strict';

//done
// 1. В переменную x записывается число, введенное пользователем в диалоговое
// окно. Проверить и вывести на экран, x – отрицательное число, положительное
// или ноль.

// let x = +prompt('enter the number');
// if (x > 0) {
//   alert ('positive')
// } else if (x == 0) {
//   alert('zero')
// } else {
//   alert('negative')
// }

//done
// 2. У вас и у вашего друга в кармане столько денег, сколько было указано в окнах
// prompt. В зависимости от общей суммы ваших сбережений вы можете полететь
// на Майорку или выпить пива. С помощью условного оператора определите
// ваши возможности и отобразите на экране в alert.

// let money = +prompt('how much money do you have, enter the number in $?');

// if (money > 3000) {
//   alert('you`re so reach! lets go to  Mallorca')
// } else {
//   alert('lets take a beer')
// }


//done
// 3. В переменную age запишите возраст человека. Если значение больше или
// равно 20 и меньше 27, в alert выводится “Выслать повестку”.

// let age = +prompt('how old are you?');

// if (age >= 20 && age < 27) {
//   alert('выслать повестку');
// }


//done
// 4. Чтобы добраться домой, вас устраивают маршрутки номер 7, 225 и 255. Какая
// маршрутка приехала – определяется в prompt. Если ваша, то вы едете домой, в
// противном случае – ожидаете.

// let taxi = +prompt('the number of bus, that arrived');

// if (taxi === 7 || taxi === 225 || taxi === 255) {
//   console.log('i can go home')
// } else (
//   console.log('not mine')
// )


//done
// 5. В переменную day записан текущий день недели. Если это не суббота и не
// воскресенье, выведите в alert сообщение о необходимости идти на работу.

// let day = 'sunday';

// if (day !== 'saturday' && day !== 'sunday') {
//   alert('you should go to the work!')
// } else {
//   alert('yeah! take a rest')
// }


//done
// 6. Запросите из prompt переменные x и y значения от -20 до 20. Если переменная
// x равна или меньше 1, а переменная y больше или равна 3 или меньше 0, то
// выведите сумму этих переменных, иначе выведите 'Неверно!'.


// let x = +prompt('enter a number for x variable from -20 to 20');
// let y = +prompt('enter a number for y variable from -20 to 20');

// if (x <= 1 && (y >=3 || y < 0)) {
//   console.log(x + y)
// } else {
//   console.log('wrong')
// }


//done
// 7. Если переменная x больше 2 и меньше 11, или переменная y больше или
// равна 6 и меньше 14, то увеличьте x на 2, иначе прибавьте к x число 5.
// Выведите новое значение переменной на экран.

// let x = +prompt('enter a number for x variable from -20 to 20');
// let y = +prompt('enter a number for y variable from -20 to 20');

// if ((x > 2 && x < 11) || (y >= 6 && y < 14)) {
//   console.log(x * 2);
// } else {
//   console.log(x + 5);
// }


//done
// 8. Получите из prompt значение для имени пользователя. Выведите на экран
// приветствие. Учтите вариант, что пользователь может не ввести ничего или
// нажать на Отмена.

// let name = prompt('what`s your name?');
// if(name) {
//   alert(`hi, ${name}`)
// }


//done
// 9. Создайте две переменные: greeting и lang. Переменная greeting – пустая
// строка. Переменная lang может принимать три значения: 'ru', 'en',
// 'de' (например, из prompt). Если она имеет значение 'ru', то в переменную
// greeting запишите приветствие на русском языке, если имеет значение 'en' – то
// на английском, если 'de' – на немецком. Выведите на экран приветствие в
// зависимости от значения переменной lang. Решите задачу через if-else и через
// switch-case.

// let greeting = '';
// let lang = prompt('ru ,en ,de?');
// if (lang === 'ru') {
//   console.log(greeting='привет')
// } else if (lang === 'en') {
//   console.log(greeting='hi')
// } else if (lang === 'de') (
//   console.log(greeting='hallo')
// )


//done
// 10. В переменной month хранится текущий месяц (new Date()). Определите в какую
// пору года попадает этот месяц (зима, лето, весна, осень).

// let date = new Date();
// let month = date.toString();
// console.log(month);

// if (month.includes('Sep') || month.includes('Oct') || month.includes('Nov')) {
//   console.log('autumn')
// } else if ((month.includes('Dec') || month.includes('Jan') || month.includes('Feb'))) {
//   console.log('winter')
// } else if (month.includes('Mar') || month.includes('Apr') || month.includes('May')) {
//   console.log('spring')
// } else if (month.includes('Jun') || month.includes('Jul') || month.includes('Aug')) {
//   console.log('summer')
// }


//done
// 11. Переменная lang может принимать два значения: 'ru' и 'en'. Переменная day
// принимает значение от 0 до 6-ти. Если lang имеет значение 'ru', то в
// переменную result запишите название дня недели на русском языке в
// соответствии со значением переменной day (0 – воскресенье, 1 – понедельник,
// 2 – вторник и т.д.). Если же lang имеет значение 'en' – то аналогично, но день
// недели будет на английском.

// let lang = prompt('ru, en');
// let day = +prompt('from 0 to 6');


// if (lang === 'ru') {
//   if (day === 0) {
//     console.log('воскресенье')
//   } else if (day === 1) {
//     console.log('понедельник')
//   } else if (day === 2) {
//     console.log('вторник');
//   } else if (day === 3) {
//     console.log('среда');
//   } else if (day === 4) {
//     console.log('четверг');
//   } else if (day === 5) {
//     console.log('пятница');
//   } else if (day === 6) {
//     console.log('суббота');
//   }
// } else if (lang === 'en') {
//   if (day === 0) {
//     console.log('sunday')
//   } else if (day === 1) {
//     console.log('monday');
//   } else if (day === 2) {
//     console.log('tuesday');
//   } else if (day === 3) {
//     console.log('wednesday');
//   } else if (day === 4) {
//     console.log('thursday');
//   } else if (day === 5) {
//     console.log('friday');
//   } else if (day === 6) {
//     console.log('saturday')
//   }
// }


//done
// 12. 1. Получить от пользователя имя и возраст. Записать это в разные переменные.
// 2. Написать конструкцию switch, которая проверяет 2 случая
// - Если имя === "John" и возраст === 29 вывести в консоль "Привет (имя)
// (возраст)"
// - Если имя === "Kate" и возраст === 15 вывести в консоль "Привет (имя)
// (возраст)"
// - Если не совпадает ни одно условие вывести в консоль "Пока"
// (Написать решение задачи еще и через оператор ?)

// let age = prompt('age?');
// let name = prompt('name?');
//
// switch (age|name) {
//     case 'John'|'29':
//         console.log(`hi, ${name}, ${age}`)
//         break;
//     case 'Kate'|'15':
//         console.log(`hi, ${name}, ${age}`)
//         break
// }