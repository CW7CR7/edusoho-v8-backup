!function(t){var n={};function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(e,r,t){a.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(r,e){if(1&e&&(r=a(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var n in r)a.d(t,n,function(e){return r[e]}.bind(null,n));return t},a.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(r,"a",r),r},a.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},a.p="/static-dist/",a(a.s=703)}({703:function(e,r){$("#approval-form").validate({rules:{idcard:"required idcardNumber",truename:{required:!0,chinese:!0,trim:!0,maxlength:25,minlength:2},faceImg:"required isImage limitSize",backImg:"required isImage limitSize"},messages:{faceImg:{required:Translator.trans("user.fields.idcard_front_placeholder")},backImg:{required:Translator.trans("user.fields.idcard_back_placeholder")}},submitHandler:function(e){var r=$(e).find('[type="submit"]');$(".js-input-val").each(function(){var e=$(this),r=e.val(),t=$.trim(r);e.val(t)}),r.button("loading"),e.submit()}}),cd.upload({el:".js-upload-input"}).on("success",function(e,r,t){var n=$(e.currentTarget),a=$(n.data("target"));a.addClass("done").css({"background-image":"url(".concat(t,")")}),a.find(".mask").length||a.append('<div class="mask"></div>')}).on("error",function(e){"FILE_SIZE_LIMIT"===e?cd.message({type:"danger",message:Translator.trans("uploader.size_2m_limit_hint")}):"FLIE_TYPE_LIMIT"===e&&cd.message({type:"danger",message:Translator.trans("uploader.type_denied_limit_hint")})})}});