'use strict';
const objects = [
    {
        id: 1,
        displayName: 'Object John',
        date: '10-12-2020',
        enabled: true,
        relation: null
    },
    {
        id: 2,
        displayName: 'Object Kate',
        date: '21-06-2020',
        enabled: false,
        relation: {
            relationId: 1
        }
    },
    {
        id: 3,
        displayName: 'Object Bob',
        date: '03-04-2020',
        enabled: true,
        relation: {
            relationId: 1
        }
    },
    {
        id: 4,
        displayName: 'Object Alex',
        date: '12-12-2021',
        enabled: false,
        relation: null
    },
    {
        id: 5,
        displayName: 'Object Pooja',
        date: '30-07-2019',
        enabled: true,
        relation: {
            relationId: 4
        }
    },
    {
        id: 6,
        displayName: 'Object Scott',
        date: '15-02-2021',
        enabled: true,
        relation: {
            relationId: 2
        }
    },
    {
        id: 7,
        displayName: 'Object Sergey',
        date: '06-01-2020',
        enabled: true,
        relation: {
            relationId: 5
        }
    },
    {
        id: 8,
        displayName: 'Object Adhey',
        date: '21-03-2021',
        enabled: true,
        relation: {
            relationId: 5
        }
    },
    {
        id: 9,
        displayName: 'Object Travis',
        date: '10-08-2021',
        enabled: true,
        relation: {
            relationId: 1
        }
    },
    {
        id: 10,
        displayName: 'Object Artem',
        date: '24-09-2021',
        enabled: false,
        relation: {
            relationId: 4
        }
    },
    {
        id: 11,
        displayName: 'Object Stuart',
        date: '01-04-2020',
        enabled: true,
        relation: {
            relationId: 7
        }
    },
    {
        id: 12,
        displayName: 'Object Keith',
        date: '08-05-2020',
        enabled: true,
        relation: {
            relationId: 10
        }
    },
    {
        id: 13,
        displayName: 'Object Bill',
        date: '17-10-2020',
        enabled: true,
        relation: {
            relationId: 9
        }
    },
    {
        id: 14,
        displayName: 'Object Chuck',
        date: '15-04-2020',
        enabled: true,
        relation: null
    },
    {
        id: 15,
        displayName: 'Object Joel',
        date: '09-12-2020',
        enabled: true,
        relation: null
    },
    {
        id: 16,
        displayName: 'Object Tim',
        date: '12-01-2020',
        enabled: true,
        relation: {
            relationId: 15
        }
    },
    {
        id: 17,
        displayName: 'Object Tony',
        date: '05-09-2020',
        enabled: true,
        relation: {
            relationId: 7
        }
    },
    {
        id: 18,
        displayName: 'Object Jessica',
        date: '19-07-2021',
        enabled: true,
        relation: {
            relationId: 12
        }
    },
    {
        id: 19,
        displayName: 'Object Monica',
        date: '08-02-2021',
        enabled: true,
        relation: {
            relationId: 14
        }
    },
    {
        id: 20,
        displayName: 'Object Tony',
        date: '05-09-2020',
        enabled: true,
        relation: {
            relationId: 7
        }
    }
];

const fields = [
    {
        id: 30,
        fieldName: 'Date',
        permissions: {
            view: true,
            edit: true,
            remove: true
        },
        objectRelation: null
    },
    {
        id: 31,
        fieldName: 'Name',
        permissions: {
            view: true,
            edit: false,
            remove: false
        },
        objectRelation: {
            objectId: 12
        }
    },
    {
        id: 32,
        fieldName: 'Time',
        permissions: {
            view: true,
            edit: true,
            remove: false
        },
        objectRelation: {
            objectId: 2
        }
    },
    {
        id: 33,
        fieldName: 'Rating',
        permissions: {
            view: false,
            edit: false,
            remove: false
        },
        objectRelation: {
            objectId: 4
        }
    },
    {
        id: 34,
        fieldName: 'Custom Name',
        permissions: {
            view: true,
            edit: false,
            remove: false
        },
        objectRelation: {
            objectId: 7
        }
    },
    {
        id: 35,
        fieldName: 'Email',
        permissions: {
            view: true,
            edit: true,
            remove: true
        },
        objectRelation: {
            objectId: 19
        }
    },
    {
        id: 36,
        fieldName: 'Decimal',
        permissions: {
            view: true,
            edit: true,
            remove: true
        },
        objectRelation: null
    },
    {
        id: 37,
        fieldName: 'Float',
        permissions: {
            view: true,
            edit: true,
            remove: false
        },
        objectRelation: {
            objectId: 15
        }
    },
    {
        id: 38,
        fieldName: 'Radio',
        permissions: {
            view: false,
            edit: false,
            remove: false
        },
        objectRelation: null
    },
    {
        id: 39,
        fieldName: 'Custom Rating',
        permissions: {
            view: true,
            edit: true,
            remove: true
        },
        objectRelation: {
            objectId: 1
        }
    },
    {
        id: 40,
        fieldName: 'Relation',
        permissions: {
            view: true,
            edit: false,
            remove: false
        },
        objectRelation: {
            objectId: 7
        }
    },
    {
        id: 41,
        fieldName: 'Checkbox',
        permissions: {
            view: true,
            edit: true,
            remove: false
        },
        objectRelation: {
            objectId: 9
        }
    },
    {
        id: 42,
        fieldName: 'Checkboxes',
        permissions: {
            view: true,
            edit: true,
            remove: true
        },
        objectRelation: {
            objectId: 9
        }
    },
    {
        id: 43,
        fieldName: 'Dropdown',
        permissions: {
            view: false,
            edit: false,
            remove: false
        },
        objectRelation: null
    },
    {
        id: 44,
        fieldName: 'Dynamic Tags',
        permissions: {
            view: true,
            edit: false,
            remove: false
        },
        objectRelation: {
            objectId: 17
        }
    },
    {
        id: 45,
        fieldName: 'Files',
        permissions: {
            view: true,
            edit: true,
            remove: true
        },
        objectRelation: {
            objectId: 4
        }
    },
    {
        id: 46,
        fieldName: 'Long Text',
        permissions: {
            view: true,
            edit: true,
            remove: true
        },
        objectRelation: {
            objectId: 20
        }
    },
    {
        id: 47,
        fieldName: 'Phone number',
        permissions: {
            view: true,
            edit: true,
            remove: false
        },
        objectRelation: null
    },
    {
        id: 48,
        fieldName: 'Price',
        permissions: {
            view: false,
            edit: false,
            remove: false
        },
        objectRelation: {
            objectId: 8
        }
    },
    {
        id: 49,
        fieldName: 'Status',
        permissions: {
            view: true,
            edit: true,
            remove: true
        },
        objectRelation: {
            objectId: 12
        }
    },
    {
        id: 50,
        fieldName: 'Text',
        permissions: {
            view: true,
            edit: true,
            remove: true
        },
        objectRelation: {
            objectId: 18
        }
    },
    {
        id: 51,
        fieldName: 'Yes/No',
        permissions: {
            view: true,
            edit: true,
            remove: true
        },
        objectRelation: {
            objectId: 15
        }
    }
];


console.log(objects)


//DONE
//1. Необходимо получить отсортированный массив объектов по дате.

// const sortedDate = [...objects].sort((a,b) => {
//   let dateA = a.date.split('-').reverse().join('')
//   let dateB = b.date.split('-').reverse().join('');
//   if (dateA < dateB) {
//     return -1;
//   } else if (dateA > dateB) {
//     return 1
//   } else {
//     return 0
//   }
// })

//  console.log(sortedDate );

//DONE
//2. Необходимо получить массив объектов которые имеют enabled: true

// const enabledTrueObj = [...objects].filter(i => {
//  return i.enabled === true;
// })

// console.log(enabledTrueObj)


//DONE
// 3. Необходимо получить объект объектов собранных по месяцам и годам.
// Формат должен быть
// (должно быть несколько решений, через циклы(for), map и другие
// перебирающие методы, reduce)
// {
// [год]: {
// [месяц]: [объект, объект...],
// [месяц]: [объект, объект...],
// },
// [год]: {
// [месяц]: [объект, объект...],
// [месяц]: [объект, объект...],
// },


let byYear = {};
let obj = [...objects];
let slicedYear = (obj) => obj.date.slice(6,10);
let slicedMonth = (obj) => obj.date.slice(3,5);
//
// for (let i of obj) {
//   let year = slicedYear(i);
//   byYear[year] = {};
// //
// //   for (let j of obj) {
// //     if (slicedYear(j) === year) {
// //       let month = slicedMonth(j);
// //       byYear[year][month] = [];
// //
// //       for (let a of obj) {
// //         if (slicedYear(a) === year && slicedMonth(a) === month) {
// //           byYear[year][month].push(a)
// //         }
// //       }
// //     }
// //   }
// // }
// // console.log(byYear);



//
// const obj2 = [...objects].reduce((acc, curr) => {
//     let year = slicedYear(curr);
//     let month = slicedMonth(curr);
//     if (acc[year]) {
//         if (acc[year][month]) {
//             return {
//                 ...acc,
//                 [year]:{...acc[year],
//                 [month]:[...acc[year][month], curr]}
//             }
//         } else {
//             return {
//                 ...acc,
//                 [year]:{...acc[year], [month]:[curr]}
//             };
//         }
//
//     } else {
//         return {
//             ...acc,
//             [year]:{[month]:[curr]}
//         };
//     }
//
// }, {})
//
// console.log(obj2);



//DONE
// 4. Необходимо получить массив объектов которым необходимо заменить
// relationId на полный объект данных.


// let obj = [...objects];
// let objRelationId = [];
// for (let i of obj){
//   if (i.relation){
//     let index = i.relation.relationId - 1;
//     console.log(index)
//     i.relation.relationId = obj[index];
//     objRelationId.push(i);
//   }
// }

// console.log(obj);


//DONE
// 5. Необходимо получить массив объектов у которых есть relation.

// const relationTrue = objects.filter(i => i.relation ? i : null);
// console.log(relationTrue);


//DONE
// 6. Необходимо получить получить объект в котором сформировать данные по
// relation объектам. Формат:
// (должно быть несколько решений, через циклы(for), map и другие
// перебирающие методы, reduce)
// {
// [id объекта на который ссылаются другие объекты по relation.relationId] :
// [массив объектов у которых relation.relationId тот который указан в этом ключе ],
// ....
// }


// let relationData = {};
// let obj = [...objects];


// for (let i of obj) {
//   if (i.relation) {
//     relationData[i.relation.relationId] = [];
//     for (let j of obj) {
//       if (j.relation && (j.relation.relationId === i.relation.relationId)) {
//         relationData[i.relation.relationId].push(j);
//       }
//     }
//   }
// }

//console.log(relationData)

// const obj1 = [...objects].reduce((acc, curr) => {
//     if (curr.relation) {
//         let index = curr.relation.relationId;
//         let object = acc[index];
//         if (object) {
//             return {...acc, [index]: [...acc[index], curr]};
//         } else {
//             return {...acc, [index]: [curr]};
//         }
//     }
//         return acc;
// }, {})
//
// console.log(obj1);



//DONE
//7. Необходимо получить массив объектов чья дата приходится на 2020 год и
// поменять ему ключ enabled на true. (должно быть несколько решений, через
// циклы(for), map и другие перебирающие методы, reduce)


// let a = (arr) => arr.map(n => n.enabled === false ? {...n, enabled: !n.enabled} : n)

// let arr2020Map = [...objects].map(i => i.date.slice(6,10) == '2020' ? i: null).filter(el => el ? el : null);
// let arr2020Filter = [...objects].filter(i => i.date.slice(6, 10) == '2020' ? i : null);

// console.log(a(arr2020Map))


//DONE
// 8. Необходимо получить массив объектов. Объект должен иметь значение
// enabled такое, что если у него нет relation, то значение false. Если relation есть,
// то значение enbaled берется от того значение которое указано в объекте по
// ссылке relationId

//берем обьект из 4 задания - obj;

// let trueObj = [...obj].filter(i => i.relation);
// let falseObj = [...obj].filter(i => !i.relation);

// for (let i = 0; i < trueObj.length; i++) {
//   trueObj[i].enabled = trueObj[i].relation.relationId.enabled;
// }

// for (let i = 0; i < falseObj.length; i++) {
//   falseObj[i].enabled = false;
// }

// const objChangedEnabled = [...trueObj, ...falseObj];

// console.log(objChangedEnabled);

//DONE
// 9. Необходимо получить понимание того, что есть ли у всех объектов relation
// или нет

// const propertyRelation = [...objects].every(i => i.relation);
// console.log(propertyRelation)


//DONE
// 10. Необходимо получить понимание есть ли объекты с enabled: true

// const enabledTrue = [...objects].reduce((acc, enab) => {
//   return { ...acc, [enab.enabled]: (acc[enab.enabled] || 0) +1};
// }, {})
// console.log(enabledTrue);
// const some = [...objects].some(i => i.enabled);
// console.log(some)




