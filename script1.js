// 'use strict';
// // bool type cast
// !!1
// !!2
// !true
// !false
// !true === false
// 1 !== 2
// !(1 === 1)
// !(1 !== 1)
// !0
// !!0
// // or
// 2 || 1 //2
// 2 || 0 //2
// //and
// 2 && 1 //1
// 1 && 2 //2
// 0 && 2 //0
// // or and and difference
// 0 || 1 || 2 //1
// 0 && 1 && 2 //0
// 2 || 1 || 0 //2
// 2 && 1 && 0 //0
// //null, undefined, so on
// null || 2 //2
// undefined && 1 //undefined
//     //brackets and complex expressions
//     (undefined || 2) && (3 || 0) //3
//     (2 && 1) || (null && 0) //2
//     (2 > 1) && "greater"//greater
//     (2 < 1) && null//false
// null && (2 < 1) //null
// // ternary operator
// 1 ? "one" : "not one"//one
// 0 ? "zero" : "not zero"//not zero
// "0" ? "\"zero\"" : "not `zero`"//zero
// parseInt("0") ? 'true' : 'false'//false
//     ("" || 2) && (3 || "3.5") || (4 && 5)//3
//     (-1 + 1) && "zero"//0
// "-1" + 1 && "oups"//oups
//     (typeof null === 'object') ? "null is object" : "null is null";//null is object
//
//
// (null >= 0) + 5//6
