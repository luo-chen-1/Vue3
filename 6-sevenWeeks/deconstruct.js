// 解构赋值


// ES5
// var arr = [1,2,3];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

//ES6
// let [a,b,c] = [1,2,3] 
// console.log(a);
// console.log(b);
// console.log(c);

//解构同时可以赋值默认值
// let [a = 9, b = 10] = [1]
// console.log(a);
// console.log(b);

// let [a, b = 1] = [10, 'hello']
// console.log(a);
// console.log(b);

// let [x, y = 1] = [10, undefined]
// console.log(x);
// console.log(y);

// let [a=1] = [null]
// console.log(a);

//判断有值，需要严格等于
// console.log(null == undefined);
// console.log(null === undefined);

//使用解构 进行交换

// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a]
// console.log(a);
// console.log(b);

//忽略赋值 用逗号跳过
// let [a,,,b] = [1,2,3,4]
// console.log(b);

/*********************************************** */
//对象解构赋值

// var obj = {name:'zhangshan',age:22}
// var name = obj.name
// var age = obj.age

//对象的解构 与 数组的解构
// var obj = {name:'zhangshan',age:22}
// let {name,age} = obj;
// console.log(name)
// console.log(age)
// ************************************
//  对象是什么语法

// let { a = 10, b = 5 } = { a: 3 }
// console.log(a + "," + b)


//undefinde 和 null 与数组一样


// var { a: x = 8, b: y = 3 } = { a: 2 }
// console.log(x);
// console.log(y);


/************************************* */
//解构字符串

// const [a,b,c] = 'xyz';
// console.log(a+b+c);
// console.log(typeof a);

//length对象方法
// let {length: len} = 'hello'
// console.log(len);


//解构复杂类型
// let data = {
//     code: 1,
//     list: [
//         {
//             name: 'zhang',
//             age: 22
//         }, {
//             name: 'li',
//             age: 23
//         }
//     ]
// }

// let {
//     // a:newA;
//     // 输出会为定义，因为上面是code
//     code: newCode,
//     list: [
//         {
//             name: newName,
//             age: newAge
//         }
//     ]
// } = data
// //约定大于配置

// console.log(newCode);
// console.log(newName);
// console.log(newAge);


