(window.webpackJsonp=window.webpackJsonp||[]).push([[335],{946:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"pilight-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pilight-binding","aria-hidden":"true"}},[t._v("#")]),t._v(" pilight Binding "),s("Badge",{attrs:{type:"warn",text:"v1"}})],1),t._v(" "),s("p",[t._v("The pilight binding allows openHAB to communicate with a "),s("a",{attrs:{href:"http://www.pilight.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("pilight"),s("OutboundLink")],1),t._v(" instance running pilight version 6.0 or greater.")]),t._v(" "),t._m(0),t._v(" "),s("p",[t._v("pilight is a cheap way to control 'Click On Click Off' devices. It started as an application for the Raspberry Pi (using the GPIO interface) but it's also possible now to connect it to any other PC using an Arduino Nano. You will need a cheap 433Mhz transceiver in both cases. See the "),s("a",{attrs:{href:"https://manual.pilight.org/electronics/wiring.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pilight manual"),s("OutboundLink")],1),t._v(" for more information.")]),t._v(" "),s("p",[t._v("The binding supports Switch, Dimmer, Contact, String, and Number items.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("Multiple pilight instances are supported. You must set the .host and .port values for each. In pilight,")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("The following syntax is supported since version 1.7:")]),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("items/pilight.items")]),t._v(" "),t._m(9),s("p",[t._v("sitemaps/fragment.sitemap")]),t._v(" "),t._m(10),t._m(11),t._v(" "),s("p",[t._v("For more information/questions:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://gathering.tweakers.net/forum/list_messages/1581828/4",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dutch pilight support thread"),s("OutboundLink")],1)])]),t._v(" "),s("DocPreviousVersions"),t._v(" "),s("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("pilight is a free open source full fledge domotica solution that runs on a Raspberry Pi, HummingBoard, BananaPi, Radxa, but also on *BSD and various linuxes (tested on Arch, Ubuntu and Debian). It's open source and freely available for anyone. pilight works with a great deal of devices and is frequency independent. Therefor, it can control devices working at 315Mhz, 433Mhz, 868Mhz etc. Support for these devices are dependent on community, because we as developers don't own them all.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This binding can be configured in the file "),e("code",[this._v("services/pilight.cfg")]),this._v(".")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Property")]),t._v(" "),s("th",[t._v("Default")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("<instance>")]),t._v(".host")]),t._v(" "),s("td"),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),s("td",[t._v("IP address of the pilight daemon")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("<instance>")]),t._v(".port")]),t._v(" "),s("td"),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),s("td",[t._v("port of the pilight daemon. You must explicitly configure the port or otherwise a random port will be used and the binding will not be able to connect.   For example, 5000.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("<instance>")]),t._v(".delay")]),t._v(" "),s("td"),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),s("td",[t._v("optional delay (in millisecond) between consecutive commands.  Recommended value without band pass filter: 1000. Recommended value with band pass filter: somewhere between 200-500")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("where "),e("code",[this._v("<instance>")]),this._v(" is a name you choose, being a simple word that you will reference from your item configurations.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"item-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('pilight="<instance>#<device>,property=value"\n')])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("where "),s("code",[t._v("<instance>")]),t._v(" is one of the instances you defined in the binding configuration, and "),s("code",[t._v("<device>")]),t._v(" is the same as specified in your pilight "),s("code",[t._v("config.json")]),t._v(" file. The "),s("code",[t._v("<property>=<value>")]),t._v(" part is only needed for String and Number items.  See the examples below.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("KakuDeskLamp")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Desk lamp"')]),t._v("            "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (Lamps)")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("pilight"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kaku#desklamp"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("KakuFloorLamp")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Floor lamp"')]),t._v("           "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (Lamps)")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("pilight"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kaku#floorlamp"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dimmer")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("KakuCeiling")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ceiling"')]),t._v("              "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (Lamps)")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("pilight"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kaku#ceiling"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("KakuTemperature")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Temperature"')]),t._v("          "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (Sensors)")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("pilight"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kaku#weather,property=temperature"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("KakuHumidity")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"KakuHumidity [%.0f%%]"')]),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (Sensors)")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("pilight"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kaku#weather,property=humidity"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("KakuBattery")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Battery [%s]"')]),t._v("         "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (Sensors)")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("pilight"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kaku#weather,property=battery"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Contact")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("KakuDoorSensor")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Door sensor [%s]"')]),t._v("     "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (Sensors)")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("pilight"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kaku#doorsensor"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("KakuDeskLamp\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("KakuFloorLamp\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Slider")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("KakuCeiling\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("KakuTemperature\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("KakuHumidity\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("KakuBattery\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("KakuDoorSensor\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"additional-info"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#additional-info","aria-hidden":"true"}},[this._v("#")]),this._v(" Additional info")])}],!1,null,null,null);e.default=n.exports}}]);