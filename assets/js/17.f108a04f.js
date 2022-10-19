(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{281:function(t,v,_){"use strict";_.r(v);var e=_(13),r=Object(e.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"代收-提款-sign-签名规则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#代收-提款-sign-签名规则"}},[t._v("#")]),t._v(" 代收/提款 sign 签名规则")]),t._v(" "),v("ul",[v("li",[t._v("参数列表中，除去 sign 参数外，其他所有参数都要参与签名。")]),t._v(" "),v("li",[t._v("参与签名的参数顺序按照首字母从小到大（a 到 z）的顺序排列， 如果遇到相同首字母则按第二个字母从小到大的顺序排列，以此类推。如果参数值为空则不参与签名，merchantKey参数追加到所有参数最后。")]),t._v(" "),v("li",[t._v("签名结果用 MD5 32位大写加密。")]),t._v(" "),v("li",[t._v("商户密钥(merchantKey) ，请登录商户后台进行查看。")])]),t._v(" "),v("h2",{attrs:{id:"代收-sign-签名示例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#代收-sign-签名示例"}},[t._v("#")]),t._v(" 代收 sign 签名示例")]),t._v(" "),v("p",[t._v("範例參數")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Header")]),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Content-Type")]),t._v(" "),v("td",[v("strong",[t._v("application/x-www-form-urlencoded")])])])])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Key")]),t._v(" "),v("th",[t._v("Value")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("paymentMethod")]),t._v(" "),v("td",[t._v("2")])]),t._v(" "),v("tr",[v("td",[t._v("merchantNumber")]),t._v(" "),v("td",[t._v("11527")])]),t._v(" "),v("tr",[v("td",[t._v("merchantOrderNumber")]),t._v(" "),v("td",[t._v("tmax20220728001")])]),t._v(" "),v("tr",[v("td",[t._v("requestedAmount")]),t._v(" "),v("td",[t._v("201")])]),t._v(" "),v("tr",[v("td",[t._v("callbackUrl")]),t._v(" "),v("td",[t._v("https://www.google.com/callback")])]),t._v(" "),v("tr",[v("td",[t._v("sign")]),t._v(" "),v("td",[v("strong",[t._v("待加密後將參數放入")])])]),t._v(" "),v("tr",[v("td",[t._v("customerRequestedIp")]),t._v(" "),v("td",[t._v("127.0.0.1")])]),t._v(" "),v("tr",[v("td",[t._v("paymentPlatform")]),t._v(" "),v("td",[t._v("1")])]),t._v(" "),v("tr",[v("td",[t._v("createType")]),t._v(" "),v("td",[t._v("1")])])])]),t._v(" "),v("p",[t._v("除去 sign 参数外，其他所有参数都要参与签名。 参与签名的参数顺序按照首字母从小到大（a 到 z）的顺序排列，在最後加上商户密钥 (merchantKey)")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("callbackUrl=https://www.google.com/callback&customerRequestedIp=127.0.0.1&createType=1&merchantNumber=10001&merchantOrderNumber=tmax20220728001&paymentMethod=1&paymentPlatform=1&requestedAmount=100&merchantKey=**you merchantKey **\n")])])]),v("p",[t._v("以 MD5 Hash 后转大写结果:")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("47E34CBE9DF1468AB744B855B93C56F1\n")])])]),v("p",[t._v("放入 sign 參數:")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Key")]),t._v(" "),v("th",[t._v("Value")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("paymentMethod")]),t._v(" "),v("td",[t._v("2")])]),t._v(" "),v("tr",[v("td",[t._v("merchantNumber")]),t._v(" "),v("td",[t._v("11527")])]),t._v(" "),v("tr",[v("td",[t._v("merchantOrderNumber")]),t._v(" "),v("td",[t._v("tmax20220728001")])]),t._v(" "),v("tr",[v("td",[t._v("requestedAmount")]),t._v(" "),v("td",[t._v("201")])]),t._v(" "),v("tr",[v("td",[t._v("callbackUrl")]),t._v(" "),v("td",[t._v("https://www.google.com/callback")])]),t._v(" "),v("tr",[v("td",[t._v("sign")]),t._v(" "),v("td",[t._v("47E34CBE9DF1468AB744B855B93C56F1")])]),t._v(" "),v("tr",[v("td",[t._v("customerRequestedIp")]),t._v(" "),v("td",[t._v("127.0.0.1")])]),t._v(" "),v("tr",[v("td",[t._v("paymentPlatform")]),t._v(" "),v("td",[t._v("1")])]),t._v(" "),v("tr",[v("td",[t._v("createType")]),t._v(" "),v("td",[t._v("1")])])])]),t._v(" "),v("h2",{attrs:{id:"提款代付-sign-签名示例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#提款代付-sign-签名示例"}},[t._v("#")]),t._v(" 提款代付 sign 签名示例")]),t._v(" "),v("p",[t._v("範例參數")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Header")]),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Content-Type")]),t._v(" "),v("td",[v("strong",[t._v("application/x-www-form-urlencoded")])])])])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Key")]),t._v(" "),v("th",[t._v("Value")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("callbackUrl")]),t._v(" "),v("td",[t._v("http://www.google.com/callback")])]),t._v(" "),v("tr",[v("td",[t._v("customerRequestedIp")]),t._v(" "),v("td",[t._v("52.229.159.160")])]),t._v(" "),v("tr",[v("td",[t._v("merchantNumber")]),t._v(" "),v("td",[t._v("10001")])]),t._v(" "),v("tr",[v("td",[t._v("merchantOrderNumber")]),t._v(" "),v("td",[t._v("B20220801001")])]),t._v(" "),v("tr",[v("td",[t._v("withdrawalMethod")]),t._v(" "),v("td",[t._v("1")])]),t._v(" "),v("tr",[v("td",[t._v("paymentPlatform")]),t._v(" "),v("td",[t._v("1")])]),t._v(" "),v("tr",[v("td",[t._v("requestedAmount")]),t._v(" "),v("td",[t._v("1000")])]),t._v(" "),v("tr",[v("td",[t._v("merchantKey")]),t._v(" "),v("td",[t._v("3E44A7EC8F2A7F5A5E48491EAE9795FB")])]),t._v(" "),v("tr",[v("td",[t._v("customerCardNumber")]),t._v(" "),v("td",[t._v("1231236046598712")])]),t._v(" "),v("tr",[v("td",[t._v("customerName")]),t._v(" "),v("td",[t._v("黄小明")])]),t._v(" "),v("tr",[v("td",[t._v("customerOpeningBank")]),t._v(" "),v("td",[t._v("HDFC0009350")])]),t._v(" "),v("tr",[v("td",[t._v("customerBankType")]),t._v(" "),v("td",[t._v("Indian Bank")])]),t._v(" "),v("tr",[v("td",[t._v("sign")]),t._v(" "),v("td",[v("strong",[t._v("待加密後將參數放入")])])])])]),t._v(" "),v("p",[t._v("除去 sign 参数外，其他所有参数都要参与签名。 参与签名的参数顺序按照首字母从小到大（a 到 z）的顺序排列，在最後加上商户密钥 (merchantKey)")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("callbackUrl=https://www.google.com/callback&customerBankType=Indian Bank&customerCardNumber=1231236046598712&customerName=黄小明&customerOpeningBank=HDFC0009350&customerRequestedIp=127.0.0.1&merchantNumber=10001&merchantOrderNumber=B20220801001&paymentPlatform=1&requestedAmount=1000&withdrawalMethod=1&merchantKey=**you merchantKey **\n")])])]),v("p",[t._v("以 MD5 Hash 后转大写结果:")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("67B06EA2D308E17A9A339882A84C3E5C\n")])])]),v("p",[t._v("放入 sign 參數:")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Key")]),t._v(" "),v("th",[t._v("Value")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("callbackUrl")]),t._v(" "),v("td",[t._v("http://www.google.com/callback")])]),t._v(" "),v("tr",[v("td",[t._v("customerRequestedIp")]),t._v(" "),v("td",[t._v("52.229.159.160")])]),t._v(" "),v("tr",[v("td",[t._v("merchantNumber")]),t._v(" "),v("td",[t._v("10001")])]),t._v(" "),v("tr",[v("td",[t._v("merchantOrderNumber")]),t._v(" "),v("td",[t._v("B20220801001")])]),t._v(" "),v("tr",[v("td",[t._v("withdrawalMethod")]),t._v(" "),v("td",[t._v("1")])]),t._v(" "),v("tr",[v("td",[t._v("paymentPlatform")]),t._v(" "),v("td",[t._v("1")])]),t._v(" "),v("tr",[v("td",[t._v("requestedAmount")]),t._v(" "),v("td",[t._v("1000")])]),t._v(" "),v("tr",[v("td",[t._v("merchantKey")]),t._v(" "),v("td",[t._v("3E44A7EC8F2A7F5A5E48491EAE9795FB")])]),t._v(" "),v("tr",[v("td",[t._v("customerCardNumber")]),t._v(" "),v("td",[t._v("1231236046598712")])]),t._v(" "),v("tr",[v("td",[t._v("customerName")]),t._v(" "),v("td",[t._v("黄小明")])]),t._v(" "),v("tr",[v("td",[t._v("customerOpeningBank")]),t._v(" "),v("td",[t._v("HDFC0009350")])]),t._v(" "),v("tr",[v("td",[t._v("customerBankType")]),t._v(" "),v("td",[t._v("Indian Bank")])]),t._v(" "),v("tr",[v("td",[t._v("sign")]),t._v(" "),v("td",[t._v("67B06EA2D308E17A9A339882A84C3E5C")])])])])])}),[],!1,null,null,null);v.default=r.exports}}]);