# JS基础知识整理

JS是一种面向对象的动态语言，它包含类型，运算符，标准内置对象和方法。

## 类型

- Number
- String
- Boolean
- Symbol
- Object
  - Function
  - Array
  - Date
  - RegExp
- Null
- Undefined

## 运算符

- 加法
- 减法
- 取模（取余）
- 内置对象Math（数学对象）

### Math对象

- Math.sin()
- Math.PI
  
### 内置函数

- parseInt():将字符串转为整型
- parseFloat():解析浮点字符串

#### 单元运算符+

> 把数字字符串转换成数值。  
> 如果给定的字符串不存在数值形式，函数会返回一个特殊的值 NaN（Not a Number 的缩写）。  
> 如果把 NaN 作为参数进行任何数学运算，结果也会是 NaN。  
> 可以使用内置函数 isNaN() 来判断一个变量是否为 NaN。

#### 特殊值

> Infinity（正无穷）和 -Infinity（负无穷）  
> 使用内置函数 isFinite() 来判断一个变量是否是一个有穷数， 如果类型为Infinity, -Infinity 或 NaN则返回false.

## 字符串

### 字符串方法

- str.charAt()
- str.replace()
- str.toUpperCase()

## 布尔类型

- false:false,0,空字符串(''),NaN,undefined被转换为false。
- true:其它值被转换为true。

## 变量

