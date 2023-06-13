// var a = 'hello'
// var b = 123
// console.log('a的值是' + a + 'b的值是' + b);

// //字符串的拼接
// var str = '第一行内容\n' +
//     '第一行内容\n' +
//     '第一行内容\n';

//     console.log(str);


//ES6 模板字符串
// 的拼接
// let name = 'zhang'
// let school = 'njuit'
// console.log(`学校${school},姓名${name}`);


let str = `<h2>hello</h2>
            <div>world</div>
            <p>aaaa</p>`;
// console.log(str)

// let x = 1;
// let y = 2;
// console.log(`x+y=`+(x+y))//es5
// console.log(`x+y=${x+y}`);//es6
// const age =17
// console


//标签模板字符串
function isAdult(strArr,age){
    let s1 = strArr[0]
    let info = ''
    if(age>18){
        info = age + '岁成年了';
    }else
    {
        info = age+ '岁未成年'
    }
    return `${s1}${info}`;
}

const age = 7 
let res = isAdult`小明今年${age}`
console.log(res);