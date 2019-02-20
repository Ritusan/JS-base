// JS中的this

// 全局环境:window

// 事件处理函数:DOM事件处理函数；内联事件处理函数（行间事件处理函数）

// 函数内部：函数直接执行，非严格模式下默认指向全局对象，严格模式下（undefined）
// call/apply/bind: 把this的值从一个执行环境传入另一个执行环境
// call和apply的参数差异：
// 如果传入的不是对象会调用相对的构造函数进行隐式转换
// bind：返回一个新函数(不影响原函数)，内部this指向被修改；只会改变一次

// 箭头函数内部：与定义时的环境中this一致（点击元素定时改变）
// 在箭头函数中，bind和call不能修改其内部this指向
// 全局中定义箭头函数（全局对象）
// 对象内函数定义箭头函数
// 对象内函数返回箭头函数

// 对象方法内部：
// 当函数作为对象里的方法被调用时：调用该函数的对象
// 对象后续附属上的方法调用：调用该函数的对象
// 作为函数内嵌套多层的方法调用：就近绑定

// 构造函数中：
// 构造函数中没有显示return
// 构造函数中显示return
// return对象：
// return非对象：

// 原型链上的this：调用该函数的对象

// getter和setter中：
// get访问
// set设置


//------------------------------------------------------------
// 全局环境中指window
// console.log(this)  //window

// 函数直接执行：指window
// node运行环境中指global
// function fn(){
//     console.log(this);
// }
// fn()

// call
// 函数.call：会直接调用该函数，并且call的第0个参数就是函数执行时候的this，call后面的参数是函数执行时候的参数
// function fn(m,n){
//     console.log(this.a,m,n)
// }
// fn.call({a:1},2,3)

// bind:改指向，不会直接执行
// 函数执行完之后会返回一个新的函数 
// function fn(){
//     console.log(this.a)
// }
// var fn1 = fn.bind({a:1})
// fn1()

// function fn(){
//     console.log(this)
// }
// var fn1 = fn.bind(1)
// fn1()

//--------------------------------------------------------------
// 箭头函数
// var fn =()=>{
//     console.log(this)
// }
// fn()  //window

// 对象方法内部
var a = 1
var fn5 = function(){
    console.log(this.a)
}
var obj = {
    a: 2,
    fn1: ()=>{
        console.log(this.a)
    },
    fn2: function(){
        console.log(this.a)
    },
    fn3: function(){
        return function(){
            console.log(this.a)
        }
    },
    fn4: ()=>{
        return ()=>{
            console.log(this.a)
        }
    }
}
obj.fn1()  //1
obj.fn2()  //2
obj.fn2.bind({a:'rain'})()  //rain
obj.fn3()()  //1
obj.fn4()()  //1
obj.fn5 = fn5
obj.fn5()  //2

// var innerfn3 = obj.fn3()
// innerfn3()  //1 和obj.fn3()()一样

//--------------------------------------------------------------------
// 多层嵌套
var b = 10
var bobj = {
    b: 20,
    bo: {
        b: 30,
        fn: function(){
            console.log(this.b)
        }
    }
}
bobj.bo.fn()  //30
var temp = bobj.bo.fn
temp()  //10

//--------------------------------------------------------------------
// 构造函数
function Fn(){
    this.a = 100
    // return 1  //返回非null的对象，那么实例化结果就是返回出的对象
    return {}
}
var f = new Fn()  //new构造器执行完之后返回的是一个对象，实例化（类似于生娃的过程，构造器类似于parent）
// console.log(f)

//--------------------------------------------------------------------
// 原型链上的函数
var p = {
    a: 1000,
    fn: function(){
        console.log(this.a)
    }
}
var r = Object.create(p)
console.log(r.__proto__)
r.fn()

//--------------------------------------------------------------------
// getter和setter
var test = {
    m: 1,
    n: 2,
    get sum(){
        console.log('正在尝试访问  sum')
        return this.m+this.n
    },
    set sum(val){
        console.log('正在尝试设置  sum')
        this.m = val/2
        this.n = val/2
    }
}
console.log(test.sum)
test.sum = 10
console.log(test.m)
console.log(test.n)
console.log(test.sum)