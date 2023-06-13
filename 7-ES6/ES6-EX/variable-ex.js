//let 和 var的区别在于

// const array = [1,2,3,4,5,6,7,8,9]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(index+":"+element)
// }


// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// for (let index = 0; index < array.length; index++) {
//     if (index >= 0) {
//         const element = array[index];
//         console.log(index + ":" + element)
//     }
// }


//暂时性死区
var tmp = 123;

if (true) {
    tmp = 'abc'; // ReferenceError
    let tmp;
    console.log(tmp)
}