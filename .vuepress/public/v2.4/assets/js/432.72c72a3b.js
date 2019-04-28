(window.webpackJsonp=window.webpackJsonp||[]).push([[432],{504:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("p",[e._v("Through the openHAB "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/REST_API",target:"_blank",rel:"noopener noreferrer"}},[e._v("REST API"),a("OutboundLink")],1),e._v(" most aspects of the openHAB system can be readily accessed by other programs."),a("br"),e._v("\nThis includes for example, the access to all data related to Items, Things and Bindings as well as the capabilities to invoke actions that can change the state of Items or influence the behavior of other elements of openHAB.\nInteractions with the REST API are based on the http protocol.\nAccess over the Internet to the REST API is possible, but this represents a significant security risk.\nUsers are encouraged to "),a("router-link",{attrs:{to:"/docs/installation/security.html"}},[e._v("ensure safe and secure connections")]),e._v(".\nBe aware that the documentation of the REST API may not be automatically installed, but once installed it is accessible through the openHAB dashboard.")],1),e._v(" "),e._m(1),e._v(" "),a("ul",[a("li",[e._v("Retrieve openHAB data from external applications")]),e._v(" "),a("li",[e._v("Inject data and trigger events in openHAB from external applications (for example, some motion detectors or surveillance cameras)")]),e._v(" "),a("li",[e._v("Inspect openHAB Bindings/Things or Items, learn about current states, parameters or problems")]),e._v(" "),a("li",[e._v("Interacting with openHAB from other programs; many programming languages and automation tools can easily make use of REST API")]),e._v(" "),a("li",[e._v("Using third party software on cell phones, such as tasker to "),a("a",{attrs:{href:"https://community.openhab.org/t/triggering-items-using-openhab-2s-rest-api-from-tasker/14027",target:"_blank",rel:"noopener noreferrer"}},[e._v("open your garage door"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("The openHAB REST API is excellently documented with detailled use instructions.\nIt would vastly exceed this space to present all possible examples.\nNevertheless, here is some examples using "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/CURL",target:"_blank",rel:"noopener noreferrer"}},[e._v("curl"),a("OutboundLink")],1),e._v(", a common command line tool available for many platforms:")]),e._v(" "),a("ul",[a("li",[e._v("Switching "),a("code",[e._v("My_Item")]),e._v(" OFF by issuing an http "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/POST_(HTTP)",target:"_blank",rel:"noopener noreferrer"}},[e._v("POST"),a("OutboundLink")],1),e._v(" request:")])]),e._v(" "),e._m(2),e._m(3),e._v(" "),e._m(4),e._m(5),e._v(" "),e._m(6),a("p",[e._v("The commands above have been copied from the REST API documentation for illustration.")]),e._v(" "),e._m(7),e._v(" "),a("p",[e._v("The REST API documentation is available on your openHAB installation as a custom user interface.")]),e._v(" "),a("p",[e._v('You can add it by opening the PaperUI interace, clicking "Add-ons", selecting "Misc". You will see an addon called "REST Documentation" that can be easily installed.')]),e._v(" "),a("p",[e._v('On the welcome screen of openHAB, you will now see a new interface called "REST API" where you can easily see the documentation of the REST API and test it!')]),e._v(" "),a("p",[e._v('All available commands will be displayed in the REST API documentation as a response to the button "Try me out" (may require some user input for mandatory fields).')]),e._v(" "),e._m(8),e._v(" "),a("p",[e._v("The REST API also supports server-push supporting subscriptions on change notification for certain resources.")]),e._v(" "),a("p",[e._v("One final remark - when openHAB’s REST API is accessed from another domain the following error may be encountered: "),a("a",{attrs:{href:"https://community.openhab.org/t/cors-problem-at-rest-api/3712/10",target:"_blank",rel:"noopener noreferrer"}},[e._v("No 'Access-Control-Allow-Origin' header is present on the requested resource"),a("OutboundLink")],1),e._v(".\nIn this case, it may be necessary to add the line org.eclipse.smarthome.cors:enable=true in the file services/runtime.cfg.")]),e._v(" "),a("DocPreviousVersions"),e._v(" "),a("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"openhab-rest-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#openhab-rest-api","aria-hidden":"true"}},[this._v("#")]),this._v(" openHAB REST API")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"rest-api-examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rest-api-examples","aria-hidden":"true"}},[this._v("#")]),this._v(" REST API Examples")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[e._v("curl "),a("span",{attrs:{class:"token operator"}},[e._v("-")]),e._v("X POST "),a("span",{attrs:{class:"token operator"}},[e._v("--")]),e._v("header "),a("span",{attrs:{class:"token string"}},[e._v('"Content-Type: text/plain"')]),e._v(" "),a("span",{attrs:{class:"token operator"}},[e._v("--")]),e._v("header "),a("span",{attrs:{class:"token string"}},[e._v('"Accept: application/json"')]),e._v(" "),a("span",{attrs:{class:"token operator"}},[e._v("-")]),e._v("d "),a("span",{attrs:{class:"token string"}},[e._v('"OFF"')]),e._v(" "),a("span",{attrs:{class:"token string"}},[e._v('"http://ip_openHAB_host:8080/rest/items/My_Item"')]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Retrieving a list of all Items and Groups by issuing a GET request:")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[e._v("curl "),a("span",{attrs:{class:"token operator"}},[e._v("-")]),e._v("X GET "),a("span",{attrs:{class:"token operator"}},[e._v("--")]),e._v("header "),a("span",{attrs:{class:"token string"}},[e._v('"Accept: application/json"')]),e._v(" "),a("span",{attrs:{class:"token string"}},[e._v('"http://ip_openHAB_host:8080/rest/items?recursive=false"')]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Retrieving a list of all sitemaps by issuing a GET request:")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[e._v("curl "),a("span",{attrs:{class:"token operator"}},[e._v("-")]),e._v("X GET "),a("span",{attrs:{class:"token operator"}},[e._v("--")]),e._v("header "),a("span",{attrs:{class:"token string"}},[e._v('"Accept: application/json"')]),e._v(" "),a("span",{attrs:{class:"token string"}},[e._v('"http://192.168.1.35:8080/rest/sitemaps"')]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"rest-api-documentation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rest-api-documentation","aria-hidden":"true"}},[this._v("#")]),this._v(" REST API documentation")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"additional-considerations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#additional-considerations","aria-hidden":"true"}},[this._v("#")]),this._v(" Additional Considerations")])}],!1,null,null,null);n.options.__file="restdocs.md";t.default=n.exports}}]);