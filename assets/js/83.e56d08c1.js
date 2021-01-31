(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{440:function(t,a,s){"use strict";s.r(a);var n=s(42),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"字符串的新增方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字符串的新增方法"}},[t._v("#")]),t._v(" ⭐️字符串的新增方法")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#string-fromcodepoint"}},[t._v("String.fromCodePoint()")])]),s("li",[s("a",{attrs:{href:"#string-raw"}},[t._v("String.raw()")])]),s("li",[s("a",{attrs:{href:"#实例方法-codepointat"}},[t._v("实例方法：codePointAt()")])]),s("li",[s("a",{attrs:{href:"#实例方法-normalize"}},[t._v("实例方法：normalize()")])]),s("li",[s("a",{attrs:{href:"#实例方法-includes-startswith-endswith"}},[t._v("实例方法：includes(), startsWith(), endsWith()")])]),s("li",[s("a",{attrs:{href:"#实例方法-repeat"}},[t._v("实例方法：repeat()")])]),s("li",[s("a",{attrs:{href:"#实例方法-padstart-padend"}},[t._v("实例方法：padStart()，padEnd()")])]),s("li",[s("a",{attrs:{href:"#实例方法-trimstart-trimend"}},[t._v("实例方法：trimStart()，trimEnd()")])]),s("li",[s("a",{attrs:{href:"#实例方法-matchall"}},[t._v("实例方法：matchAll()")])]),s("li",[s("a",{attrs:{href:"#实例方法-indexof"}},[t._v("实例方法：indexOf()")]),s("ul",[s("li",[s("a",{attrs:{href:"#使用-indexof-统计一个字符串中某个字母出现的次数"}},[t._v("使用 indexOf 统计一个字符串中某个字母出现的次数")])])])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"string-fromcodepoint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#string-fromcodepoint"}},[t._v("#")]),t._v(" String.fromCodePoint()")]),t._v(" "),s("p",[t._v("静态方法返回使用指定的代码点序列创建的字符串。"),s("br"),t._v("\nES5提供"),s("code",[t._v("String.fromCharCode()")]),t._v("方法，用于从"),s("code",[t._v("Unicode")]),t._v("码点返回对应字符，但是这个方法不能识别码点大于"),s("code",[t._v("0xFFFF")]),t._v("的字符。ES6提供了"),s("code",[t._v("String.fromCodePoint()")]),t._v("方法，可以识别大于"),s("code",[t._v("0xFFFF")]),t._v("的字符，弥补了"),s("code",[t._v("String.fromCharCode()")]),t._v("方法的不足。在作用上，正好与下面的"),s("code",[t._v("codePointAt()")]),t._v("方法相反。")]),t._v(" "),s("h2",{attrs:{id:"string-raw"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#string-raw"}},[t._v("#")]),t._v(" String.raw()")]),t._v(" "),s("p",[t._v("处理模板字符串的方法：")]),t._v(" "),s("ul",[s("li",[t._v("会再次转义模板字符串，除模板字符串外，会返回字符串转义之前的值")]),t._v(" "),s("li",[t._v("会替换变量")])]),t._v(" "),s("p",[s("strong",[t._v("API")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 作为函数调用\n * @param callSite 调用点对象{ raw: ['foo', 'bar', 'baz'] }\n * @param substitutions 任意个内插表达式对应的值\n */")]),t._v("\nString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("raw")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("callSite"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("substitutions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 通过模板字符串调用\n */")]),t._v("\nString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("raw"),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("templateString")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n")])])]),s("p",[s("strong",[t._v("USAGE")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("raw"),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("Hi\\n")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'Hi\\n5!'，Hi 后面的字符不是换行符，\\ 和 n 是两个不同的字符")]),t._v("\n\nString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("raw "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("Hi\\u000A!")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("             \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "Hi\\u000A!"，同上，这里得到的会是 \\、u、0、0、0、A 6个字符，')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 任何类型的转义形式都会失效，保留原样输出，不信你试试.length")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Bob"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("raw "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("Hi\\n")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("             \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "Hi\\nBob!"，内插表达式还可以正常运行')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 正常情况下，你也许不需要将 String.raw() 当作函数调用。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 但是为了模拟 `t${0}e${1}s${2}t` 你可以这样做:")]),t._v("\nString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("raw")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" raw"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 't0e1s2t'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意这个测试, 传入一个 string, 和一个类似数组的对象")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 下面这个函数和 `foo${2 + 3}bar${'Java' + 'Script'}baz` 是相等的.")]),t._v("\nString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("raw")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  raw"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'baz'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Java'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Script'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'foo5barJavaScriptbaz'")]),t._v("\n")])])]),s("h2",{attrs:{id:"实例方法-codepointat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例方法-codepointat"}},[t._v("#")]),t._v(" 实例方法：codePointAt()")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("codePointAt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("JavaScript 内部，字符以 UTF-16 的格式储存，每个字符固定为2个字节。对于那些需要4个字节储存的字符（Unicode 码点大于0xFFFF的字符），JavaScript 会认为它们是两个字符。对于这种4个字节的字符，JavaScript 不能正确处理，字符串长度会误判为2，而且charAt()方法无法读取整个字符，charCodeAt()方法只能分别返回前两个字节和后两个字节的值。ES6 提供了codePointAt()方法，能够正确处理 4 个字节储存的字符，返回一个字符的码点。")]),t._v(" "),s("h2",{attrs:{id:"实例方法-normalize"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例方法-normalize"}},[t._v("#")]),t._v(" 实例方法：normalize()")]),t._v(" "),s("p",[t._v("许多欧洲语言有语调符号和重音符号。为了表示它们，Unicode 提供了两种方法。一种是直接提供带重音符号的字符，比如Ǒ（\\u01D1）。另一种是提供合成符号（combining character），即原字符与重音符号的合成，两个字符合成一个字符，比如O（\\u004F）和ˇ（\\u030C）合成Ǒ（\\u004F\\u030C）。")]),t._v(" "),s("p",[t._v("这两种表示方法，在视觉和语义上都等价，但是 JavaScript")]),t._v(" "),s("p",[t._v("ES6 提供字符串实例的normalize()方法，用来将字符的不同表示方法统一为同样的形式，这称为 Unicode 正规化。")]),t._v(" "),s("h2",{attrs:{id:"实例方法-includes-startswith-endswith"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例方法-includes-startswith-endswith"}},[t._v("#")]),t._v(" 实例方法：includes(), startsWith(), endsWith()")]),t._v(" "),s("p",[t._v("传统上，JavaScript 只有indexOf方法，可以用来确定一个字符串是否包含在另一个字符串中。ES6 又提供了三种新方法。")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("includes()")]),t._v("：返回布尔值，表示是否找到了参数字符串。")]),t._v(" "),s("li",[s("strong",[t._v("startsWith()")]),t._v("：返回布尔值，表示参数字符串是否在原字符串的头部。")]),t._v(" "),s("li",[s("strong",[t._v("endsWith()")]),t._v("：返回布尔值，表示参数字符串是否在原字符串的尾部。")])]),t._v(" "),s("h2",{attrs:{id:"实例方法-repeat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例方法-repeat"}},[t._v("#")]),t._v(" 实例方法：repeat()")]),t._v(" "),s("p",[t._v("repeat方法返回一个新字符串，表示将原字符串重复n次。")]),t._v(" "),s("h2",{attrs:{id:"实例方法-padstart-padend"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例方法-padstart-padend"}},[t._v("#")]),t._v(" 实例方法：padStart()，padEnd()")]),t._v(" "),s("p",[t._v("ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("padStart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ab'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'ababx'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("padStart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ab'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'abax'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("padEnd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ab'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'xabab'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("padEnd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ab'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'xaba'")]),t._v("\n")])])]),s("h2",{attrs:{id:"实例方法-trimstart-trimend"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例方法-trimstart-trimend"}},[t._v("#")]),t._v(" 实例方法：trimStart()，trimEnd()")]),t._v(" "),s("p",[t._v("ES2019 对字符串实例新增了trimStart()和trimEnd()这两个方法。它们的行为与trim()一致，trimStart()消除字符串头部的空格，trimEnd()消除尾部的空格。它们返回的都是新字符串，不会修改原始字符串。")]),t._v(" "),s("h2",{attrs:{id:"实例方法-matchall"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例方法-matchall"}},[t._v("#")]),t._v(" 实例方法：matchAll()")]),t._v(" "),s("h2",{attrs:{id:"实例方法-indexof"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例方法-indexof"}},[t._v("#")]),t._v(" 实例方法：indexOf()")]),t._v(" "),s("p",[t._v("indexOf() 方法返回调用它的 String 对象中第一次出现的指定值的索引，从 fromIndex 处进行搜索。如果未找到该值，则返回 -1。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("indexOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("searchValue "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fromIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"使用-indexof-统计一个字符串中某个字母出现的次数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-indexof-统计一个字符串中某个字母出现的次数"}},[t._v("#")]),t._v(" 使用 indexOf 统计一个字符串中某个字母出现的次数")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 翻译：生存还是毁灭？这是个问题。（莎士比亚《哈姆雷特》）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'To be, or not to be, that is the question.'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" pos "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("indexOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'e'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pos "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  count"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  pos "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("indexOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'e'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pos "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// displays 4")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);