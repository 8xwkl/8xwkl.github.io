(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{456:function(t,r,e){"use strict";e.r(r);var v=e(42),_=Object(v.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"from-memory-cache与from-disk-cache详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#from-memory-cache与from-disk-cache详解"}},[t._v("#")]),t._v(" ⭐️from memory cache与from disk cache详解")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#三种区别在哪"}},[t._v("三种区别在哪")])]),e("li",[e("a",{attrs:{href:"#chrome采取措施的准则"}},[t._v("chrome采取措施的准则")])]),e("li",[e("a",{attrs:{href:"#不同浏览器策略是否一致"}},[t._v("不同浏览器策略是否一致")])])])]),t._v("\n在chrome浏览器中的控制台Network中size栏通常会有三种状态"),e("p"),t._v(" "),e("blockquote",[e("ul",[e("li",[e("code",[t._v("from memory cache")])]),t._v(" "),e("li",[e("code",[t._v("from disk cache")])]),t._v(" "),e("li",[t._v("资源本身的大小(如: 1.5k)")])])]),t._v(" "),e("p",[t._v("那么问题来了")]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("三种区别在哪里?")])]),t._v(" "),e("li",[e("strong",[t._v("浏览器采取不同措施的原则是什么?")])]),t._v(" "),e("li",[e("strong",[t._v("其他浏览器的策略?")])])]),t._v(" "),e("h2",{attrs:{id:"三种区别在哪"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三种区别在哪"}},[t._v("#")]),t._v(" 三种区别在哪")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("from memory cache")]),t._v(": 字面理解是从内存中, 其实也是字面的含义, 这个资源是直接从内存中拿到的, 不会请求服务器一般已经加载过该资源且缓存在了内存当中, 当关闭该页面时, 此资源就被内存释放掉了, 再次重新打开相同页面时不会出现"),e("code",[t._v("from memory cache")]),t._v("的情况")]),t._v(" "),e("li",[e("code",[t._v("from disk cache")]),t._v(": 同上类似, 此资源是从磁盘当中取出的, 也是在已经在之前的某个时间加载过该资源, 不会请求服务器但是此资源不会随着该页面的关闭而释放掉, 因为是存在硬盘当中的, 下次打开仍会"),e("code",[t._v("from disk cache")])]),t._v(" "),e("li",[t._v("资源本身大小数值: 当http状态为200是实实在在从浏览器获取的资源, 当http状态为304时该数字是与服务端通信报文的大小, 并不是该资源本身的大小, 该资源是从本地获取的")])]),t._v(" "),e("h2",{attrs:{id:"chrome采取措施的准则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chrome采取措施的准则"}},[t._v("#")]),t._v(" chrome采取措施的准则")]),t._v(" "),e("p",[t._v("什么时候是"),e("code",[t._v("from memory cache")]),t._v(" 什么时候是"),e("code",[t._v("from disk cache")]),t._v(" 呢？")]),t._v(" "),e("p",[t._v("即哪些资源会放在内存当中, 哪些资源浏览器会放在磁盘上呢, 结果如下下表所示")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("状态")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Status:"),e("strong",[t._v("200")])]),t._v(" "),e("td",[e("code",[t._v("form memory cache")])]),t._v(" "),e("td",[t._v("不请求网络资源, 资源在内存当中, 一般"),e("strong",[t._v("脚本、字体、图片")]),t._v("会存在内存当中")])]),t._v(" "),e("tr",[e("td",[t._v("Status:"),e("strong",[t._v("200")])]),t._v(" "),e("td",[e("code",[t._v("form disk ceche")])]),t._v(" "),e("td",[t._v("不请求网络资源, 在磁盘当中, 一般"),e("strong",[t._v("非脚本")]),t._v("会存在内存当中, 如css等")])]),t._v(" "),e("tr",[e("td",[t._v("Status:"),e("strong",[t._v("200")])]),t._v(" "),e("td",[t._v("资源大小数值")]),t._v(" "),e("td",[t._v("从服务器下载最新资源")])]),t._v(" "),e("tr",[e("td",[t._v("Status:"),e("strong",[t._v("304")])]),t._v(" "),e("td",[t._v("报文大小")]),t._v(" "),e("td",[t._v("请求服务端发现资源没有更新, 使用本地资源")])])])]),t._v(" "),e("p",[t._v("由此可见样式表一般在磁盘中, 不会缓存到内存中去, 因为css样式加载一次即可渲染出网页; 但是脚本却可能随时会执行, 如果脚本在磁盘当中, 在执行该脚本需要从磁盘中取到内存当中来, 这样的IO开销是比较大的, 有可能会导致浏览器失去响应.")]),t._v(" "),e("h2",{attrs:{id:"不同浏览器策略是否一致"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#不同浏览器策略是否一致"}},[t._v("#")]),t._v(" 不同浏览器策略是否一致")]),t._v(" "),e("p",[t._v("以上的数据及统计都是在chrome浏览器下进行的"),e("br"),t._v("\n在Firefox下并没有"),e("code",[t._v("from memory cache")]),t._v("以及"),e("code",[t._v("from disk cache")]),t._v("的状态展现, 相同的资源在chrome下是"),e("code",[t._v("from disk/memory cache")]),t._v(", 但是Firefox统统是304状态码, 即Firefox下会缓存资源, 但是每次都会请求服务器对比当前缓存是否更改, chrome不请求服务器, 直接拿过来用, 这也是为啥chrome比较快的原因之一吧."),e("br"),t._v("\n当然以上是粗略的研究chrome资源的获取策略, 至于chrome如何保证资源的更新, 即什么时候200, 什么时候304还需要更深入的研究.")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/garrettzxd/article/details/80684880",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文链接"),e("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=_.exports}}]);