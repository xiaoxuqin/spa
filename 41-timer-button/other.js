/**
 * JavaScript实现组件化的方式，以及各个方式的优缺点
 */
/**
 * 1、传统的代码编写
 * 全局变量、全局函数，各种变量混乱，没有很好的隔离作用域
 * 当涉及代码量较大时容易混乱，出现变量覆盖，或函数重复。
 * 2、组件化方式，作用域隔离：
 * 定义一个对象变量，在对象中定义属性方法，所有的代码就都在一个变量下面，
 * 代码更清晰，有统一的入口调用方法，缺点是没有私有方法，还是可能可能出现被覆盖的情况。
 * 3、组件化方式，立即执行函数返回对象：
 * 立即执行函数形成了独立作用域，返回一个对象，该对象包含了外部可访问的方法，
 * 而立即执行内部定义的其它私有方法，外部无法访问到。即课堂所授实现方式，相对较为灵活。
 * 4、组件化方式，通过类或构造函数的形式：
 * 在页面较复杂或制作一套组件时，可以借助于构造函数，原型与原型链的方式，
 * 来实现组件化过程，代码的格式会较统一。
 */