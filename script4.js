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

console.log(fields);
console.log(objects)


//DONE
// 1. Необходимо сформироать массив который будет
// содержать только те поля которые имеют permissions.view:
// true

// const permissionTrue = fields.filter(i => i.permissions.view);
// console.log(permissionTrue);


//DONE
// 2. Необходимо сформировать массив который будет
// содержать только те поля которые имеют все ключи
// пермиссий false

// const permissionsAllFalse = fields.filter(i => {
//   return !i.permissions.edit && !i.permissions.remove && !i.permissions.view;
// })

//console.log(permissionsAllFalse );


//DONE
// 3. Необходимо сформировать массив полей и заменить
// полям которые имеют objectRelation.objectId c айдишника
// объекта на полный объект данных об объекте .
// Взаимодействуем со вторым массивом

// const jointArr = [...objects, ...fields];
// console.log(jointArr)


// let objReletedId = [];

// for (let i = 0; i < jointArr.length; i++) {
//   if (jointArr[i].objectRelation) {
//     let index = jointArr[i].objectRelation.objectId -1;
//     jointArr[i].objectRelation.objectId = jointArr[index];
//     objReletedId.push(jointArr[i]);
//   }
// }

// console.log(objReletedId);


// let objReletedId = fields.map(i => {
//     if(i.objectRelation) {
//         let object = objects.find(({ id }) => id === i.objectRelation.objectId)
//         return {...i, objectRelation: { objectId: object }}
//     } else {
//         return i;
//     }
// })

//console.log(objReletedId)



//DONE+++++ANOTHER METHOD
// 4. Необходимо сформировать массив полей с
// проставленными пермиссиями в зависимости от того, что:
// - если у поля нет objectRelation, то пермиссии поля
// оставляем без изменений
// • если у поля есть objectRelation, то ставим все пермисии
// true, если объект objectRelation имеет enabled: true. Если
// же enabled: false, то ставим все пермиссии false

// const fieldsNullObjRelation = fields.filter(i => !i.objectRelation);
// const newArr = [...objReletedId];

// for (let i = 0; i < newArr.length; i++) {
//   if (newArr[i].objectRelation.objectId.enabled) {
//     newArr[i].permissions.view = true;
//     newArr[i].permissions.edit = true;
//     newArr[i].permissions.remove = true;
//   }
// }

// let oneArr = [...newArr, ...fieldsNullObjRelation]
// console.log(oneArr);



// let newArr = fields.map(i => {
//     if (i.objectRelation) {
//         let object = objects.find(j => j.id === i.objectRelation.objectId);
//         if (object.enabled) {
//             return {...i, permissions: {
//                 view: true, edit: true, remove: true
//                 }}
//         } else {
//             return {...i, permissions: {
//                     view: false, edit: false, remove: false
//                 }}
//         }
//     } else {
//         return {...i};
//     }
// })
//
// console.log(newArr);



//DONE
//5.Необходимо сформировать массив объектов только тех у
// которых есть поля в objectRelation

// const arrbOjectRelation = [...fields].filter(i => i.objectRelation ? i : null);
// console.log(arrbOjectRelation);

//DONE+++++ANOTHER METHOD
// 6. Необходимо сформировать объект такого формата
// {
// [id объекта у которого есть поля]: [
// {
// [id поля]: {
// объект пермиссий поля
// }
// },
// ...
// ],
// …
// }

// let commonObj = [...objects, ...fields]
//
// let object = {};
// for (let i of commonObj) {
//   if (i.objectRelation) {
//     object[i.objectRelation.objectId] = [];
//     for (let j of commonObj) {
//       if (i.objectRelation.objectId === j.id) {
//         object[i.objectRelation.objectId].push({[i.id] : i.permissions})
//       }
//     }
//   }
// }
//
// console.log(object)
//
//
// let obj3 = fields.reduce((acc, item) => {
//     if (item.objectRelation) {
//         let index = item.objectRelation.objectId;
//         if (acc[index]) {
//             return {...acc, [index]: [...acc[index], {[item.id] : item.permissions}]}
//         } else {
//             return {...acc, [index]: [{[item.id] : item.permissions}]}
//         }
//     } else {
//         return acc;
//     }
// }, {})
//
// console.log(obj3)

// let obj2 = fields.filter(r => r.objectRelation ? r : null).map(i => {
//     let object1 = objects.find(j => j.id === i.objectRelation.objectId);
//     let index = i.objectRelation.objectId;
//     if (object1) {
//         return { index : {[i.id] : i.permissions} }
//     }
// })

// let obj2 = fields.reduce((acc, i) => {
//     if (i.objectRelation) {
//         let index = i.objectRelation.objectId;
//         console.log(index);
//         let object1 = objects.find(j => j.id === i.objectRelation.objectId);
//         if (object1) {
//             return {
//                 ...acc, [index] : [...acc[index], i.permissions]
//             }
//         }
//     }
// },{})
//
// console.log(obj2)


//DONE
// 7. Необходимо сформировать массив полей в котором будет
// изменен ключ edit на true, в том случае когда у нас view тоже
// true


// const newArr = [...fields];
//
// for (let i = 0; i < newArr.length; i++) {
//   if (newArr[i].permissions.view) {
//     newArr[i].permissions.edit = true;
//   }
// }
//
// console.log(newArr);
//

// let editChange = newArr.map(i => {
//     if (i.permissions.view) {
//         return {...i, edit: true}
//     } else {}
//     return {...i, edit: false}
// })
//
// console.log(editChange);



//DONE
// 8. Необходимо сформировать массив полей который будет содержать только те поля у которых
// есть objectRelation и
// проставить всем этим полям дополнительный ключ relations:
// true

// const newArr = [...fields];

// for (let i = 0; i < newArr.length; i++) {
//   if (newArr[i].objectRelation !== null){
//     newArr[i].relation = true
//   }
// }
// console.log(newArr)



// const objRelation = fields.filter(i => i.objectRelation ? i : null).map(j => {
//     return {...j, relation: true}
// })
//
// console.log(objRelation)

//DONE
// 9. Необходимо получить массив полей отсортированных по
// fieldName

// const sortedByName = fields.sort((a,b) => {
//   if (a.fieldName < b.fieldName) {
//       return -1;
//     } else if (a.fieldName > b.fieldName) {
//       return 1
//     } else {
//       return 0
//     }
// });
// console.log(sortedByName);


//DONE
// 10. Необходимо получить ответ на понимание того есть ли у
// нас хоть одно поле у которого все пермиссии true


// const allTrue = fields.map(i => {
//   if (i.permissions.remove && i.permissions.view && i.permissions.edit) {
//     return console.log('yes')
//   }
// })
//const some = fields.some(i => i.permissions.remove && i.permissions.view && i.permissions.edit);

//console.log(some)