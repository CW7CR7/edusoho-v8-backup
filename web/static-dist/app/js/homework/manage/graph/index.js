!function(r){var a={};function n(t){if(a[t])return a[t].exports;var e=a[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=r,n.c=a,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/static-dist/",n(n.s=617)}({617:function(t,e){var r=echarts.init(document.getElementById("line-data")),a=$.parseJSON($("#data").val());r.setOption({color:["#0E4D93","#687F92"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{bottom:"5%",containLabel:!0},xAxis:[{type:"category",name:Translator.trans("homework_manage.result_graph.status_distribution"),nameLocation:"middle",nameGap:25,data:a.xScore,axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value",name:Translator.trans("testpaper_manage.result_graph.person_num"),minInterval:1}],series:[{name:Translator.trans("homework_manage.result_graph.first_status_num"),type:"bar",data:a.yFirstNum},{name:Translator.trans("homework_manage.result_graph.max_status_num"),type:"bar",data:a.yMaxNum}]})}});