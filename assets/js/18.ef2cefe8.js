(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{282:function(t,e,a){"use strict";a.r(e);var s=a(13),r=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"下单sign签名规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下单sign签名规则"}},[t._v("#")]),t._v(" 下单sign签名规则")]),t._v(" "),e("ul",[e("li",[t._v("参数列表中，除去 sign 参数外，其他所有参数都要参与签名。")]),t._v(" "),e("li",[t._v("参与签名的参数顺序按照首字母从小到大（a 到 z）的顺序排列， 如果遇到相同首字母则按第二个字母从小到大的顺序排列，以此类推。如果参数值为空则不参与签名，merchantKey参数追加到所有参数最后。")]),t._v(" "),e("li",[t._v("签名结果用 MD5 32位大写加密。")]),t._v(" "),e("li",[t._v("商户密钥(merchantKey) ，请登录商户后台进行查看。")])]),t._v(" "),e("h3",{attrs:{id:"示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("callbackUrl=http://127.0.0.1:8080/callback&customerRequestedIp=1.1.1.1&merchantNumber=10001&merchantOrderNumber=DDBH132467890&paymentMethod=1&paymentPlatform=1&requestedAmount=100&merchantKey=1234567890\n")])])]),e("p",[t._v("sign 加密结果: 42B277A4837A8AAD3953D9CB0909E730")])])}),[],!1,null,null,null);e.default=r.exports}}]);