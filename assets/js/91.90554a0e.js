(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{445:function(t,e,s){"use strict";s.r(e);var a=s(42),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"proxy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#proxy"}},[t._v("#")]),t._v(" ⭐️Proxy")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#概述"}},[t._v("概述")])]),s("li",[s("a",{attrs:{href:"#api"}},[t._v("API")])]),s("li",[s("a",{attrs:{href:"#参数"}},[t._v("参数")])]),s("li",[s("a",{attrs:{href:"#方法"}},[t._v("方法")])]),s("li",[s("a",{attrs:{href:"#handler对象的方法"}},[t._v("handler对象的方法")])]),s("li",[s("a",{attrs:{href:"#实践"}},[t._v("实践")]),s("ul",[s("li",[s("a",{attrs:{href:"#_1-get-的利用"}},[t._v("1). get()的利用")])])])]),s("li",[s("a",{attrs:{href:"#this-问题"}},[t._v("this问题")])]),s("li",[s("a",{attrs:{href:"#与-object-defineproperty-的对比"}},[t._v("与Object.defineProperty的对比")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("p",[t._v("Proxy可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。")]),t._v(" "),s("h2",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" proxy "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Proxy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("target")]),t._v("：要使用 Proxy 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。")]),t._v(" "),s("li",[s("code",[t._v("handler")]),t._v("：一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 p 的行为。")])]),t._v(" "),s("h2",{attrs:{id:"方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),s("p",[s("code",[t._v("Proxy.revocable()")]),t._v("：创建一个可撤销的"),s("code",[t._v("Proxy")]),t._v("对象。")]),t._v(" "),s("h2",{attrs:{id:"handler对象的方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#handler对象的方法"}},[t._v("#")]),t._v(" handler对象的方法")]),t._v(" "),s("p",[t._v("handler对象是一个容纳一批特定属性的占位符对象。它包含有Proxy的各个捕获器（trap）。所有的陷阱是可选的。如果没有定义某个陷阱，那么就会保留源对象的默认行为。")]),t._v(" "),s("ul",[s("li",[s("strong",[s("code",[t._v("handler.getPrototypeOf()")])]),t._v("："),s("code",[t._v("Object.getPrototypeOf")]),t._v("方法的陷阱。\n"),s("ul",[s("li",[t._v("@params："),s("code",[t._v("target")])]),t._v(" "),s("li",[t._v("@returns：对象或者"),s("code",[t._v("null")])]),t._v(" "),s("li",[t._v("在 JavaScript 中，下面这五种操作（方法/属性/运算符）可以触发 JS 引擎读取一个对象的原型，也就是可以触发"),s("code",[t._v("getPrototypeOf()")]),t._v("代理方法的运行\n"),s("ul",[s("li",[s("code",[t._v("Object.getPrototypeOf()")])]),t._v(" "),s("li",[s("code",[t._v("Reflect.getPrototypeOf()")])]),t._v(" "),s("li",[s("code",[t._v("__proto__")])]),t._v(" "),s("li",[s("code",[t._v("Object.prototype.isPrototypeOf()")])]),t._v(" "),s("li",[s("code",[t._v("instanceof")])])])])])]),t._v(" "),s("li",[s("strong",[s("code",[t._v("handler.setPrototypeOf()")])]),t._v("："),s("code",[t._v("Object.setPrototypeOf")]),t._v("方法的陷阱。\n"),s("ul",[s("li",[t._v("@params："),s("code",[t._v("target")]),t._v(" "),s("code",[t._v("prototype")])]),t._v(" "),s("li",[t._v("@returns：如果成功修改了"),s("code",[t._v("[[Prototype]]")]),t._v(", "),s("code",[t._v("setPrototypeOf")]),t._v("方法返回"),s("code",[t._v("true")]),t._v(",否则返回"),s("code",[t._v("false")])]),t._v(" "),s("li",[t._v("这个方法可以拦截以下操作：\n"),s("ul",[s("li",[s("code",[t._v("Object.setPrototypeOf()")])]),t._v(" "),s("li",[s("code",[t._v("Reflect.setPrototypeOf()")])])])])])]),t._v(" "),s("li",[s("strong",[s("code",[t._v("handler.isExtensible()")])]),t._v("："),s("code",[t._v("Object.isExtensible")]),t._v("方法的陷阱。\n"),s("ul",[s("li",[t._v("@params："),s("code",[t._v("target")])]),t._v(" "),s("li",[t._v("@returns：必须返回一个"),s("code",[t._v("Boolean")]),t._v("值或可转换成"),s("code",[t._v("Boolean")]),t._v("的值")]),t._v(" "),s("li",[t._v("该方法会拦截目标对象的以下操作：\n"),s("ul",[s("li",[s("code",[t._v("Object.isExtensible()")])]),t._v(" "),s("li",[s("code",[t._v("Reflect.isExtensible()")])])])])])]),t._v(" "),s("li",[s("strong",[s("code",[t._v("handler.preventExtensions()")])]),t._v("："),s("code",[t._v("Object.preventExtensions")]),t._v("方法的陷阱。\n"),s("ul",[s("li",[t._v("@params："),s("code",[t._v("target")])]),t._v(" "),s("li",[t._v("@returns："),s("code",[t._v("Boolean")])]),t._v(" "),s("li",[t._v("这个陷阱可以拦截这些操作：\n"),s("ul",[s("li",[s("code",[t._v("Object.preventExtensions()")])]),t._v(" "),s("li",[s("code",[t._v("Reflect.preventExtensions()")])])])]),t._v(" "),s("li",[s("code",[t._v("Object.isExtensible")]),t._v("与"),s("code",[t._v("Object.preventExtensions")]),t._v("结果互斥")])])]),t._v(" "),s("li",[s("strong",[s("code",[t._v("handler.getOwnPropertyDescriptor()")])]),t._v("："),s("code",[t._v("Object.getOwnPropertyDescriptor")]),t._v("方法的陷阱。\n"),s("ul",[s("li",[t._v("@params："),s("code",[t._v("target")]),t._v(" "),s("code",[t._v("prop")])]),t._v(" "),s("li",[t._v("@returns：必须返回一个"),s("code",[t._v("object")]),t._v("或"),s("code",[t._v("undefined")])]),t._v(" "),s("li",[t._v("这个陷阱可以拦截这些操作：\n"),s("ul",[s("li",[s("code",[t._v("Object.getOwnPropertyDescriptor()")])]),t._v(" "),s("li",[s("code",[t._v("Reflect.getOwnPropertyDescriptor()")])])])])])]),t._v(" "),s("li",[s("strong",[s("code",[t._v("handler.defineProperty()")])]),t._v("："),s("code",[t._v("Object.defineProperty")]),t._v("方法的陷阱。\n"),s("ul",[s("li",[t._v("@params："),s("code",[t._v("target")]),t._v(" "),s("code",[t._v("property")]),t._v(" "),s("code",[t._v("descriptor")])]),t._v(" "),s("li",[t._v("@returns：必须以一个"),s("code",[t._v("Boolean")]),t._v("返回，表示定义该属性的操作成功与否")]),t._v(" "),s("li",[t._v("该方法会拦截目标对象的以下操作：\n"),s("ul",[s("li",[s("code",[t._v("Object.defineProperty()")])]),t._v(" "),s("li",[s("code",[t._v("Reflect.defineProperty()")])]),t._v(" "),s("li",[s("code",[t._v("proxy.property='value'")])])])]),t._v(" "),s("li",[t._v("只有以下属性才有用，非标准的属性将会被无视：\n"),s("ul",[s("li",[s("code",[t._v("enumerable")])]),t._v(" "),s("li",[s("code",[t._v("configurable")])]),t._v(" "),s("li",[s("code",[t._v("writable")])]),t._v(" "),s("li",[s("code",[t._v("value")])]),t._v(" "),s("li",[s("code",[t._v("get")])]),t._v(" "),s("li",[s("code",[t._v("set")])])])])])]),t._v(" "),s("li",[s("strong",[s("code",[t._v("handler.has()")])]),t._v("："),s("code",[t._v("in")]),t._v("操作符的陷阱。\n"),s("ul",[s("li",[t._v("@params："),s("code",[t._v("target")]),t._v(" "),s("code",[t._v("prop")])]),t._v(" "),s("li",[t._v("@returns："),s("code",[t._v("Boolean")])]),t._v(" "),s("li",[t._v("这个钩子可以拦截下面这些操作：\n"),s("ul",[s("li",[t._v("属性查询："),s("code",[t._v("foo in proxy")])]),t._v(" "),s("li",[t._v("继承属性查询："),s("code",[t._v("foo in Object.create(proxy)")])]),t._v(" "),s("li",[s("code",[t._v("with")]),t._v(" 检查："),s("code",[t._v("with(proxy) { (foo); }")])]),t._v(" "),s("li",[s("code",[t._v("Reflect.has()")])])])])])]),t._v(" "),s("li",[s("strong",[s("code",[t._v("handler.get()")])]),t._v("：属性读取操作的陷阱。\n"),s("ul",[s("li",[t._v("@params："),s("code",[t._v("target")]),t._v(" "),s("code",[t._v("property")]),t._v(" "),s("code",[t._v("receiver")])]),t._v(" "),s("li",[t._v("@returns：任何值")]),t._v(" "),s("li",[t._v("该方法会拦截目标对象的以下操作：\n"),s("ul",[s("li",[t._v("访问属性："),s("code",[t._v("proxy[foo]")]),t._v("和 "),s("code",[t._v("proxy.bar")])]),t._v(" "),s("li",[t._v("访问原型链上的属性："),s("code",[t._v("Object.create(proxy)[foo]")])]),t._v(" "),s("li",[s("code",[t._v("Reflect.get()")])])])])])]),t._v(" "),s("li",[s("strong",[s("code",[t._v("handler.set()")])]),t._v("：属性设置操作的陷阱。\n"),s("ul",[s("li",[t._v("@params："),s("code",[t._v("target")]),t._v(" "),s("code",[t._v("property")]),t._v(" "),s("code",[t._v("value")]),t._v(" "),s("code",[t._v("receiver")])]),t._v(" "),s("li",[t._v("@returns："),s("code",[t._v("set()")]),t._v("方法应当返回一个布尔值。`\n"),s("ul",[s("li",[t._v("返回"),s("code",[t._v("true")]),t._v("代表属性设置成功。")]),t._v(" "),s("li",[t._v("在严格模式下，如果"),s("code",[t._v("set()")]),t._v("方法返回"),s("code",[t._v("false")]),t._v("，那么会抛出一个"),s("code",[t._v("TypeError")]),t._v("异常。")])])]),t._v(" "),s("li",[t._v("该方法会拦截目标对象的以下操作：\n"),s("ul",[s("li",[t._v("指定属性值："),s("code",[t._v("proxy[foo] = bar")]),t._v("和"),s("code",[t._v("proxy.foo = bar")])]),t._v(" "),s("li",[t._v("指定继承者的属性值："),s("code",[t._v("Object.create(proxy)[foo] = bar")])]),t._v(" "),s("li",[s("code",[t._v("Reflect.set()")])])])])])]),t._v(" "),s("li",[s("strong",[s("code",[t._v("handler.deleteProperty()")])]),t._v("："),s("code",[t._v("delete")]),t._v("操作符的陷阱。\n"),s("ul",[s("li",[t._v("@params："),s("code",[t._v("target")]),t._v(" "),s("code",[t._v("property")])]),t._v(" "),s("li",[t._v("@returns：必须以一个"),s("code",[t._v("Boolean")]),t._v("返回，表示了该属性是否被成功删除")]),t._v(" "),s("li",[t._v("该方法会拦截以下操作：\n"),s("ul",[s("li",[t._v("删除属性："),s("code",[t._v("delete proxy[foo]")]),t._v("和"),s("code",[t._v("delete proxy.foo")])]),t._v(" "),s("li",[s("code",[t._v("Reflect.deleteProperty()")])])])])])]),t._v(" "),s("li",[s("strong",[s("code",[t._v("handler.ownKeys()")])]),t._v("："),s("code",[t._v("Object.getOwnPropertyNames")]),t._v("方法和"),s("code",[t._v("Object.getOwnPropertySymbols")]),t._v("方法的陷阱。\n"),s("ul",[s("li",[t._v("@params："),s("code",[t._v("target")])]),t._v(" "),s("li",[t._v("@returns：必须返回一个可枚举对象")]),t._v(" "),s("li",[t._v("该拦截器可以拦截以下操作：\n"),s("ul",[s("li",[s("code",[t._v("Object.getOwnPropertyNames()")])]),t._v(" "),s("li",[s("code",[t._v("Object.getOwnPropertySymbols()")])]),t._v(" "),s("li",[s("code",[t._v("Object.keys()")])]),t._v(" "),s("li",[s("code",[t._v("Reflect.ownKeys()")])])])])])]),t._v(" "),s("li",[s("strong",[s("code",[t._v("handler.apply()")])]),t._v("：函数调用操作的陷阱。\n"),s("ul",[s("li",[t._v("@params："),s("code",[t._v("target")]),t._v(" "),s("code",[t._v("thisArg")]),t._v(" "),s("code",[t._v("argumentsList")])]),t._v(" "),s("li",[t._v("@returns：任何值")]),t._v(" "),s("li",[t._v("该方法会拦截目标对象的以下操作:\n"),s("ul",[s("li",[s("code",[t._v("proxy(...args)")])]),t._v(" "),s("li",[s("code",[t._v("Function.prototype.apply()")]),t._v(" 和 "),s("code",[t._v("Function.prototype.call()")])]),t._v(" "),s("li",[s("code",[t._v("Reflect.apply()")])])])])])]),t._v(" "),s("li",[s("strong",[s("code",[t._v("handler.construct()")])]),t._v("："),s("code",[t._v("new")]),t._v("操作符的陷阱。\n"),s("ul",[s("li",[t._v("@params："),s("code",[t._v("target")]),t._v(" "),s("code",[t._v("argumentsList")]),t._v(" "),s("code",[t._v("newTarget")])]),t._v(" "),s("li",[t._v("@returns：必须返回一个对象")]),t._v(" "),s("li",[t._v("该拦截器可以拦截以下操作:\n"),s("ul",[s("li",[s("code",[t._v("new proxy(...args)")])]),t._v(" "),s("li",[s("code",[t._v("Reflect.construct()")])])])])])])]),t._v(" "),s("h2",{attrs:{id:"实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实践"}},[t._v("#")]),t._v(" 实践")]),t._v(" "),s("h3",{attrs:{id:"_1-get-的利用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-get-的利用"}},[t._v("#")]),t._v(" 1). "),s("code",[t._v("get()")]),t._v("的利用")]),t._v(" "),s("p",[s("strong",[t._v("利用 Proxy，可以将读取属性的操作（get），转变为执行某个函数，从而实现属性的链式操作")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("pipe")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fnStack "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" proxy "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Proxy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" property"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("property "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'get'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" fnStack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reduce")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      fnStack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("property"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" proxy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" proxy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("double")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("pow")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("reverseInt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reverse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pipe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("double"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reverseInt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 63")]),t._v("\n")])])]),s("h2",{attrs:{id:"this问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#this问题"}},[t._v("#")]),t._v(" "),s("code",[t._v("this")]),t._v("问题")]),t._v(" "),s("p",[t._v("虽然"),s("code",[t._v("Proxy")]),t._v("可以代理针对目标对象的访问，但它不是目标对象的透明代理，即不做任何拦截的情况下，也无法保证与目标对象的行为一致。主要原因就是在"),s("code",[t._v("Proxy")]),t._v("代理的情况下，目标对象内部的"),s("code",[t._v("this")]),t._v("关键字会指向"),s("code",[t._v("Proxy")]),t._v("代理。")]),t._v(" "),s("h2",{attrs:{id:"与object-defineproperty的对比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#与object-defineproperty的对比"}},[t._v("#")]),t._v(" 与"),s("code",[t._v("Object.defineProperty")]),t._v("的对比")]),t._v(" "),s("ul",[s("li",[t._v("Proxy直接代理对象的增删改等操作，相对于"),s("code",[t._v("Object.defineProperty")]),t._v("的"),s("code",[t._v("getter")]),t._v("与"),s("code",[t._v("setter")]),t._v("强大很多；")]),t._v(" "),s("li",[t._v("可以代理数组，代理函数，并且可以实现多达13种类型的拦截操作；")]),t._v(" "),s("li",[t._v("Proxy作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利。")])])])}),[],!1,null,null,null);e.default=r.exports}}]);