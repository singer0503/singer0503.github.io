(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{277:function(t,s,a){"use strict";a.r(s);var r=a(13),n=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"代付回调-商户接口说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代付回调-商户接口说明"}},[t._v("#")]),t._v(" 代付回调_商户接口说明")]),t._v(" "),s("h3",{attrs:{id:"简要描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简要描述"}},[t._v("#")]),t._v(" 简要描述：")]),t._v(" "),s("p",[t._v("🥭芒果 → 商户")]),t._v(" "),s("ul",[s("li",[t._v("支付回调接口，需要商户提供可访问的公网接口地址，在“商家支付接口中的 CallbackUrl 参数传给平台”。")])]),t._v(" "),s("h3",{attrs:{id:"接口请求方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口请求方式"}},[t._v("#")]),t._v(" 接口请求方式：")]),t._v(" "),s("ul",[s("li",[t._v("Method：POST")]),t._v(" "),s("li",[t._v("Content-Type： application/json")])]),t._v(" "),s("h3",{attrs:{id:"商户接口响应结果要求说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#商户接口响应结果要求说明"}},[t._v("#")]),t._v(" 商户接口响应结果要求说明")]),t._v(" "),s("p",[t._v('当群付平台回调商户接口，需要商户返回处理结果，处理成功请返回 “SUCCESS”，处理失败请返回“FAIL”，返回结果不区分字母大小写。若商户接口未返回任何内容或未满足条件的结果，支付平台都视为失败处理。失败后，平台会再重试3次，分别5分钟，10分钟，30分钟再次通知商户接口。直到重试3次后都未成功通知的订单，则不会再进行通知。特别说明：支付平台会重复发起回调通知，请商户对接该接口处理好相关验证，避免重复添加余额的问题。\nsign 签名认证，请参考 "SIGN 签名说明" --\x3e "回调接口 sign 签名规则"')]),t._v(" "),s("h3",{attrs:{id:"代付付平台提交入参"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代付付平台提交入参"}},[t._v("#")]),t._v(" 代付付平台提交入参：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("code")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("S00：支付成功，E00：支付未成功")])]),t._v(" "),s("tr",[s("td",[t._v("message")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("通知消息")])]),t._v(" "),s("tr",[s("td",[t._v("orderNumber")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("平台交易流水编号")])]),t._v(" "),s("tr",[s("td",[t._v("merchantOrderNumber")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("平台交易流水编号")])]),t._v(" "),s("tr",[s("td",[t._v("actualAmount")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("到账金额")])]),t._v(" "),s("tr",[s("td",[t._v("withdrawMethod")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("支付收款类型：1=銀行卡     代付类型： 1=銀行卡")])]),t._v(" "),s("tr",[s("td",[t._v("sign")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("签名认证，请参考“回调接口 sign 签名规则”")])])])]),t._v(" "),s("h3",{attrs:{id:"返回示例-response-sample"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回示例-response-sample"}},[t._v("#")]),t._v(" 返回示例 (Response Sample)")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"E00"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"支付失败"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"orderNumber"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"19061910205663580446"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"merchantOrderNumber"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"20190619102055364"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"actualAmount"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.00"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"withdrawMethod"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sign"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"F9B55FA4229499C5BA179E4DCEED063D"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"S00"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"支付成功"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"orderNumber"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"19061910205663580446"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"merchantOrderNumber"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"20190619102055364"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"actualAmount"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"888.00"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"withdrawMethod"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sign"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"F9B55FA4229499C5BA179E4DCEED063D"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("说明：\n当接口返回支付失败的时候，实际金额返回是：0.00")])])])}),[],!1,null,null,null);s.default=n.exports}}]);