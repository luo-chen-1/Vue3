//展开语法 ES6


//ES6语法

let arr1 = [1,2,3]
let arr2 = [...arr1]
arr1.push(4)
console.log(arr1);
console.log(arr2);
//出错了，下课研究


// const obj = {a:1,b:2}
// let copyObj = {...obj}
// console.log(obj);
// console.log(copyObj);
//研究一下 a:1 和 {...obj} 是什么

// const arr = [...'hello']
// console.log(arr);
// console.log(arr.length);


// const arr1 = [1,2]
// const arr2 = ['a',...arr1]
// const arr3 = [...arr1,...arr2]
// console.log(arr3);

//展开语法 的参数 依次赋值
// function sum(x,y,z){
//     return x+y+z
// }

// const data = [1,2,3]
// console.log(sum(...data));