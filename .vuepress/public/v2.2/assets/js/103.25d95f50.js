(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{570:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),a("p",[e._v("The "),a("a",{attrs:{href:"https://github.com/rrd4j/rrd4j",target:"_blank",rel:"noopener noreferrer"}},[e._v("rrd4j"),a("OutboundLink")],1),e._v(" Persistence service is based on a round-robin database.")]),a("p",[e._v('In contrast to a "normal" database such as db4o, a round-robin database does not grow in size - it has a fixed allocated size, which is used. This is accomplished by doing data compression, which means that the older the data is, the less values are available. So while you might have a value every minute for the last 24 hours, you might only have one every day for the last year.')]),a("p",[e._v("This service cannot be directly queried, because of the data compression. You could not provide precise answers for all questions.")]),a("p",[e._v("NOTE: rrd4j is for storing numerical data only. Attempting to use rrd4j to store complex datatypes (eg. for restore-on-startup) will not work.")]),e._m(1),e._m(2),e._m(3),e._m(4),a("p",[e._v("where:")]),e._m(5),a("p",[e._v('Round-robin databases (RRDs) have fixed-length so-called "archives" for storing values. One RRD can have (in general) several datasources and each datasource can have several archives. openHAB only supports one datasource per RRD, which is named DATASOURCE_STATE.')]),e._m(6),a("p",[e._v("Depending on the data to be stored, several types for datasources exist:")]),e._m(7),e._m(8),a("p",[e._v('Each datasource also has a value for heartbeat, minimum and maximum. This heartbeat setting helps the database to detect "missing" values, i.e. if no new value is stored after "heartbeat" seconds, the value is considered missing when charting. Minimum and maximum define the range of acceptable values for that datasource.')]),e._m(9),e._m(10),a("p",[e._v("Sets the timeintervall(seconds) between consecutive readings.")]),e._m(11),a("p",[e._v("Steps are the number of consecutive readings that are used the create a single entry into the database for this timeintervall. The timeintervall covered is calculated by Step(seconds)*Steps.")]),a("p",[e._v('Now for the archives: As already said, each datasource can have several archives. Think of an archive as a drawer with a fixed number of boxes in it. Each steps*step seconds  (the step is globally defined for the RRD, 60s in our example) the most-left box is emptied, the content of all boxes is moved one box to the left and new content is added to the most right box. The "steps" value is defined per archive it is the third parameter in the archive definition. The number of boxes is defined as the fourth parameter.')]),a("p",[e._v("The purpose to have several archives is raised if a different granuality is needed while displaying data for different timespans. In the above examples data for each second are saved for the last hour (granularity 1), looking at the last four houres a granularity of 10 (i.e. 10 readings are consolidated to one reading) is used and so forth. For the first archive (and maybe the only one) a steps-size of one should be used. This way a sample is taken after each step. In this special case the selection of the consolidationfunction is of no effect (a single reading is equal to the MAX, MIN, AVERAGE and LAST of this reading).")]),e._m(12),a("p",[e._v('So in the above examples, we have 480 boxes, which each represent the value of one minute (Step is set to 60s, Granularity = 1). If more than one value is added to the database within (steps*step) second (and thus more than one value would be stored in one box), the "consolidation function" is used. OpenHAB uses AVERAGE as default for numeric values, so if you add 20 and 21 within one minute, 20.5 would be stored. 480 minutes is 8 hours, so we have a 8h with the granularity of one minute.')]),a("p",[e._v('The same goes for the next archives, for larger time spans, the stored values are less "exact". However, usually you are not interested in the exact temperature for a selected minute two years ago.')]),a("p",[e._v("services/rrd4j.cfg")]),e._m(13),e._m(14),e._m(15),e._m(16),a("p",[e._v('Restore of items after startup is taking some time. Rules are already started in parallel. Especially in rules that are started via "System started" trigger, it may happen that the restore is not completed resulting in defined items. In these cases the use of restored items has to be delayed by a couple of seconds. This delay has to be determined experimentally.')]),a("DocPreviousVersions"),a("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"rrd4j-persistence"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rrd4j-persistence","aria-hidden":"true"}},[this._v("#")]),this._v(" rrd4j Persistence")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"#configuration"}},[this._v("Configuration")]),t("ul",[t("li",[t("a",{attrs:{href:"#datasource-types"}},[this._v("Datasource types")])]),t("li",[t("a",{attrs:{href:"#heartbeat-min-max"}},[this._v("Heartbeat, MIN, MAX")])]),t("li",[t("a",{attrs:{href:"#steps"}},[this._v("Step(s)")])]),t("li",[t("a",{attrs:{href:"#example"}},[this._v("Example")])])])]),t("li",[t("a",{attrs:{href:"#troubleshooting"}},[this._v("Troubleshooting")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This service can be configured in the file "),t("code",[this._v("services/rrd4j.cfg")]),this._v(".")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[e._v("Property")]),a("th",[e._v("Default")]),a("th",{staticStyle:{"text-align":"center"}},[e._v("Required")]),a("th",[e._v("Description")])])]),a("tbody",[a("tr",[a("td",[a("code",[e._v("<dsname>")]),e._v(".def")]),a("td"),a("td",{staticStyle:{"text-align":"center"}}),a("td",[a("code",[e._v("<dstype>,<heartbeat>,[<min>|U],[<max>|U],<step>")]),e._v(".  For example, "),a("code",[e._v("COUNTER,900,0,U,300")])])]),a("tr",[a("td",[a("code",[e._v("<dsname>")]),e._v(".archives")]),a("td"),a("td",{staticStyle:{"text-align":"center"}}),a("td",[a("code",[e._v("<consolidationfunction>,<xff>,<steps>,<rows>")]),e._v(". For example, "),a("code",[e._v("AVERAGE,0.5,1,365:AVERAGE,0.5,7,300")])])]),a("tr",[a("td",[a("code",[e._v("<dsname>")]),e._v(".items")]),a("td"),a("td",{staticStyle:{"text-align":"center"}}),a("td",[a("code",[e._v("<list of items for this dsname>")]),e._v(". For example, "),a("code",[e._v("Item1,Item2")])])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("Sections in "),a("code",[e._v("[square brackets]")]),e._v(" are optional.")]),a("li",[a("code",[e._v("<dsname>")]),e._v(" is a name you choose for the datasource.")]),a("li",[e._v("See "),a("a",{attrs:{href:"#datasource-types"}},[e._v("Datasource types")]),e._v(" for an explanation of "),a("code",[e._v("<dstype>")]),e._v(".")]),a("li",[e._v("See "),a("a",{attrs:{href:"#heartbeat-min-max"}},[e._v("Heartbeat, MIN, MAX")]),e._v(" for an explanation of "),a("code",[e._v("<heartbeat>")]),e._v(", "),a("code",[e._v("<min>")]),e._v(", "),a("code",[e._v("<max>")]),e._v(" and "),a("code",[e._v("U")]),e._v(".")]),a("li",[e._v("See "),a("a",{attrs:{href:"#steps"}},[e._v("Step(s)")]),e._v(" for an explanation of "),a("code",[e._v("<step>")]),e._v(", "),a("code",[e._v("<consolidationfunction>")]),e._v(", "),a("code",[e._v("<xff>")]),e._v(", "),a("code",[e._v("<steps>")]),e._v(", and "),a("code",[e._v("<rows>")]),e._v(".")]),a("li",[a("code",[e._v("<list of items for this dsname>")]),e._v(" is explained in")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"datasource-types"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#datasource-types","aria-hidden":"true"}},[this._v("#")]),this._v(" Datasource types")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("strong",[e._v("COUNTER")]),e._v(" represents a ever-incrementing value (historically this was used for packet counters or traffic counters on network interfaces, a typical home-automation application would be your electricity meter). If you store the values of this counter in a simple database and make a chart of that, you'll most likely see a nearly flat line, because the increments per time are small compared to the absolute value (e.g. your electricity meter reads 60567 kWh, and you add 0.5 kWh per hour, than your chart over the whole day will show 60567 at the start and 60579 at the end of your chart. That is nearly invisible. RRD4J helps you out and will display the difference from one stored value to the other (depending on the selected size). Please note that the persistence extensions will return difference instead of the actual values if you use this type; this especially leads to wrong values if you try to restoreOnStartup!")]),a("li",[a("strong",[e._v("GAUGE")]),e._v(" represents the reading of e.g. a temperature sensor. You'll see only small deviation over the day and your values will be within a small range, clearly visible within a chart.")]),a("li",[a("strong",[e._v("ABSOLUTE")]),e._v(" is like a counter, but RRD4J assumes that the counter is reset when the value is read. So these are basically the delta values between the reads.")]),a("li",[a("strong",[e._v("DERIVE")]),e._v(" is like a counter, but it can also decrease and therefore have a negative delta.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"heartbeat-min-max"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#heartbeat-min-max","aria-hidden":"true"}},[this._v("#")]),this._v(" Heartbeat, MIN, MAX")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"step-s"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-s","aria-hidden":"true"}},[this._v("#")]),this._v(" Step(s)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Step (set in "),t("code",[this._v(".def=<dstype>,<heartbeat>,[<min>|U],[<max>|U],<step>")]),this._v(" with step in seconds)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("-Steps or Granularity (set in "),t("code",[this._v(".archives=<consolidationfunction>,<xff>,<steps>,<rows>")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("ctr5min.def=COUNTER,900,0,U,300\nctr5min.archives=AVERAGE,0.5,1,365:AVERAGE,0.5,7,300\nctr5min.items=Item1,Item2\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("All item- and event-related configuration is done in the file "),t("code",[this._v("persistence/rrd4j.persist")]),this._v(".  The strategy "),t("code",[this._v("everyMinute")]),this._v(" must be used, otherwise no data will be persisted (stored).")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"troubleshooting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting","aria-hidden":"true"}},[this._v("#")]),this._v(" Troubleshooting")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("From time to time, you may find that if you change the item type of a persisted data, you may experience charting or other problems. To resolve this issue, remove the old "),t("code",[this._v("<item_name>")]),this._v(".rrd file in the "),t("code",[this._v("${openhab_home}/etc/rrd4j")]),this._v(" folder or "),t("code",[this._v("/var/lib/openhab/persistence/rrd4j")]),this._v(" folder for apt-get installed openHABs.")])}],!1,null,null,null);t.default=r.exports}}]);