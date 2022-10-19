(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{279:function(t,s,a){"use strict";a.r(s);var r=a(13),e=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"提款代付查询-尚未开放-无法使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提款代付查询-尚未开放-无法使用"}},[t._v("#")]),t._v(" 提款代付查询 (尚未开放 无法使用)")]),t._v(" "),s("h3",{attrs:{id:"endpoint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#endpoint"}},[t._v("#")]),t._v(" Endpoint")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("GET https://mg6956.com/api/withdrawalquery\n")])])]),s("h3",{attrs:{id:"request-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-parameters"}},[t._v("#")]),t._v(" Request Parameters")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Header")]),t._v(" "),s("th")])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Content-Type")]),t._v(" "),s("td",[t._v("multipart/form-data")])])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("URL Parameters")]),t._v(" "),s("th",[t._v("Desc")]),t._v(" "),s("th",[t._v("Required")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("systemOrderNumber")]),t._v(" "),s("td",[t._v("系统订单号 (与商户订单号至少传入一个)")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("merchantOrderNumber")]),t._v(" "),s("td",[t._v("商户订单号 (与系统订单号至少传入一个)")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("merchantNumber")]),t._v(" "),s("td",[t._v("商户编号")]),t._v(" "),s("td",[t._v("*")])]),t._v(" "),s("tr",[s("td",[t._v("paymentMethod")]),t._v(" "),s("td",[t._v("代付类型    1=银行卡转账")]),t._v(" "),s("td",[t._v("*")])]),t._v(" "),s("tr",[s("td",[t._v("sign")]),t._v(" "),s("td",[t._v("签名认证")]),t._v(" "),s("td",[t._v("*")])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("系统订单号与商户订单号至少传入一个")])]),t._v(" "),s("h3",{attrs:{id:"request-sample"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-sample"}},[t._v("#")]),t._v(" Request Sample")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("https://aac27.com/api/withdrawalquery?systemOrderNumber=19120314514474593458&merchantOrderNumber=B19120314514126661195&merchantNumber=10001&paymentMethod=1&sign=3A4B004088274603B592C8F9A82008AD\n")])])]),s("h3",{attrs:{id:"response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),s("p",[t._v("请求成功")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("Status Code"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" OK\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"S00"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"获取成功"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"systemOrderNumber"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"19120314514474593458"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"merchantOrderNumber"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"B19120314514126661195"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"callbackNoticeStatus"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"requestedAmount"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("300.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"actualAmount"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"createdAt"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-12-03T14:51:44.2076529+08:00"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"completedAt"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0001-01-01T08:00:00+08:00"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("请求失败")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("Status Code"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),t._v(" Not Found\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"E00"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"商户参数错误"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"response-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-parameters"}},[t._v("#")]),t._v(" Response Parameters")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameters")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Desc")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("code")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("状态码，S00：查询成功，E00：查询失败")])]),t._v(" "),s("tr",[s("td",[t._v("message")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("返回消息说明")])]),t._v(" "),s("tr",[s("td",[t._v("data")]),t._v(" "),s("td",[t._v("object")]),t._v(" "),s("td",[t._v("数据对象")])]),t._v(" "),s("tr",[s("td",[t._v("status")]),t._v(" "),s("td",[t._v("int")]),t._v(" "),s("td",[t._v("订单状态,-1 未知，0=支付失败，1=支付成功，2=进行中")])]),t._v(" "),s("tr",[s("td",[t._v("callbackNoticeStatus")]),t._v(" "),s("td",[t._v("int")]),t._v(" "),s("td",[t._v("回调通知状态,0=未回调，1=回调成功，2=回调失败")])]),t._v(" "),s("tr",[s("td",[t._v("requestedAmount")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("提交金额")])]),t._v(" "),s("tr",[s("td",[t._v("actualAmount")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("实际到账金额")])]),t._v(" "),s("tr",[s("td",[t._v("createdAt")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("订单创建日期")])]),t._v(" "),s("tr",[s("td",[t._v("completedAt")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("订单完结日期")])])])]),t._v(" "),s("h3",{attrs:{id:"签名方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#签名方法"}},[t._v("#")]),t._v(" 签名方法")]),t._v(" "),s("ol",[s("li",[t._v("参数列表中，除去 sign 参数外，其他所有参数都要参与签名。")]),t._v(" "),s("li",[t._v("参与签名的参数顺序按照首字母从小到大（a 到 z）的顺序排列， 如果遇到相同首字母则按第二个字母")]),t._v(" "),s("li",[t._v("从小到大的顺序排列，以此类推。如果参数值为空则不参与签名，merchantKey参数追加到所有参数最后。 4、 签名以 MD5 32位大写加密。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);