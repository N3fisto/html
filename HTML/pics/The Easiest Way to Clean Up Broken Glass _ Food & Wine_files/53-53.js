(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{1338:function(e,t,n){var a=n(165);e.exports=(a.default||a).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,a,o){var i,c=null!=t?t:e.nullContext||{},r=e.hooks.helperMissing,l=e.escapeExpression,s=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="favorite-collections-item">\n  <label class="checkbox-list" for="'+l("function"==typeof(i=null!=(i=s(n,"id")||(null!=t?s(t,"id"):t))?i:r)?i.call(c,{name:"id",hash:{},data:o,loc:{start:{line:2,column:36},end:{line:2,column:42}}}):i)+'">\n    <input class="checkbox-list-input" type="checkbox" value="'+l("function"==typeof(i=null!=(i=s(n,"name")||(null!=t?s(t,"name"):t))?i:r)?i.call(c,{name:"name",hash:{},data:o,loc:{start:{line:3,column:62},end:{line:3,column:72}}}):i)+'" id="'+l("function"==typeof(i=null!=(i=s(n,"id")||(null!=t?s(t,"id"):t))?i:r)?i.call(c,{name:"id",hash:{},data:o,loc:{start:{line:3,column:78},end:{line:3,column:84}}}):i)+'" />\n    <span class="checkbox-list-checkmark">\n      <span class="favorite-collections-item-name">'+l("function"==typeof(i=null!=(i=s(n,"name")||(null!=t?s(t,"name"):t))?i:r)?i.call(c,{name:"name",hash:{},data:o,loc:{start:{line:5,column:51},end:{line:5,column:61}}}):i)+"</span>\n    </span>\n  </label>\n</li>\n"},useData:!0})},261:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return A}));var a=n(1),o=n.n(a),i=n(5),c=n.n(i),r=n(781),l=n(3),s=n(782),d=n(777),u=n(993),f=n(1338),m=n.n(f),v=o()(document.body),p=v.data("save-with-collection"),h=v.data("save-with-success"),b=o()(".modal.favorite-collections-modal"),g=b.length?new r.a(b,"favorite-collections-modal"):null,y=o()(".modal.save-success-modal"),w=y.length?new r.a(y,"save-success-modal"):null;function x(e){var t=o()(".favorite-collections-modal .alert-banner");t.removeClass("hidden"),t.find(".alert-text").text(e)}function j(){var e=o()(".favorite-collections-modal .alert-banner");e.addClass("hidden"),e.find(".alert-text").text("")}function O(e){return!(e&&e.length>40)||(x("The collection name is too long (max 40 characters)"),!1)}function C(e,t,n){var a=Object(d.a)("/element-api/content-proxy/favorite");o.a.ajax({url:a,type:"GET",data:e,cache:!1,success:function(e,n,a){if(200===a.status){var o=JSON.parse(e);o.IsFavorite&&!0===o.IsFavorite&&(t.find(".icon-text").html("Saved"),t.addClass("saved"),c()(l.rb).broadcast())}}}).fail((function(a){500!==a.status||n||Object(u.a)(C,[e,t])})).always((function(){t.addClass("initialized")}))}function k(e,t){var n=Object(d.a)("/element-api/content-proxy/favorite-collections"),a=e,i=o()(".lead-content-wrapper .image-container .component.lazy-image");a.image_src=i.data("src"),a.image_width=i.data("original-width"),a.image_height=i.data("original-height"),a.title=o()(".intro.article-info .headline").text(),o.a.get(n,e,(function(e){e.html&&(g.open(e.html),c()(l.xb).broadcast(),c()(l.K).broadcast())})).fail((function(n){500!==n.status||t||Object(u.a)(C,[e])}))}function D(){g.close()}function S(e,t,n){var a=Object(d.a)("/element-api/content-proxy/favorite");t.addClass("saving"),o.a.post(a,e,(function(e){JSON.parse(e).recipeBoxItemID&&(t.find(".icon-text").html("Saved"),t.addClass("saved"),t.removeClass("saving"),c()(l.rb).broadcast())})).fail((function(a){t.removeClass("saving"),500!==a.status||n||Object(u.a)(S,[e,t])}))}function T(e,t,n){var a=Object(d.a)("/element-api/content-proxy/favorite");t.addClass("saving"),o.a.ajax({url:a,type:"DELETE",data:e,success:function(e,n,a){200===a.status&&(t.find(".icon-text").html("Save"),t.removeClass("saving"),t.removeClass("saved"),console.log("Removed successfully"),c()(l.rb).broadcast())},error:function(a){t.removeClass("saving"),500!==a.status||n||Object(u.a)(T,[e,t])}})}function A(){var e=o()(".shareicon-favorite-link"),t=e.data("content-id");function n(){e.length&&(v.hasClass("authenticated")?C({id:t},e):(e.attr("aria-label","".concat(e.attr("aria-label")||""," (opens in a new window)")),c()(l.rb).broadcast()))}n(),document.body.addEventListener(l.e,(function(){n()})),c()(l.o).subscribe((function(n,a){if(a.closest(e).length)if(n.preventDefault(),v.hasClass("authenticated")&&e.hasClass("initialized")&&!e.hasClass("saving")){var o={id:t};e.hasClass("saved")?p?k(o,!0):T(o,e):(S(o,e),p?k(o,!1):h&&w.open())}else{var i=e.data("content-login-url");setTimeout((function(){window.open(i,"_self")}),0)}}));var a=o()(".modal.share-icons"),i="";function d(e,t){e[0].target.classList.contains("modal-active")||(o()(".ugc-comments-add-comment").trigger("click"),t.disconnect())}function u(e,t){o()(".js-ugc-comments-outer-comment-wrap").hasClass("test-ugc-comments__hide")&&o()(window).trigger("revealComments"),e.preventDefault(),i.close();var n=t.data("content-id");document.querySelector(n).scrollIntoView(!0)}a.length&&(i=new r.a(a,"share-icons")),c()(l.o).subscribe((function(n,a){var c=o()(".shareicon-modal-toggle"),r=o()(".shareicon-print-link"),l=r.parents(".article-container"),f=o()(".js-view-comments-btn-comments"),v=o()(".js-view-comments-btn-nocomments"),p=o()(".favorite-collections-add-icon"),h=o()(".favorite-collections-footer-remove"),b=o()(".favorite-collections-footer-done");if(Object(s.a)(a,b))D();else if(Object(s.a)(a,h)){T({id:t},e),D()}else if(Object(s.a)(a,p)){var g=o()(".favorite-collections-add-input").val();(function(e){if(!O(e))return!1;if(!e)return x("A new collection name is required"),!1;var t=!1;return o()(".favorite-collections-item-name").each((function(n,a){return a.innerText!==e||(t=!0,!1)})),t?(x('The collection "'.concat(e,'" already exists')),!1):(j(),!0)})(g)&&function(e){var t=(new Date).getTime(),n=o()(m()({id:t,name:e}));n.find(".checkbox-list").attr("for",t),n.find(".checkbox-list-input").attr("id",t).val(e).attr("checked","checked"),n.find(".favorite-collections-item-name").text(e),o()(".favorite-collections-section").prepend(n),o()(".favorite-collections-add-input").val(""),o()(".favorite-collections-footer-done").focus()}(g)}else if(Object(s.a)(a,c)){n.preventDefault();var y=a.parents(".docked-sharebar").find(".sharebar-modal").html();!y&&a.parents(".longform-main-container").length&&(y=a.parents(".longform-main-container").find(".longform__shareModal").html());var w=a.parents(".shareicon-modal-toggle").data("share-id");w&&(y=o()("div[id='".concat(w,"']")).html(),w+="_share-new"),i.open(y),a.get(0).id=a.get(0).id||w||"share-id-".concat((new Date).getTime()),i.$modal.data("source-target-id",a.get(0).id)}else if(Object(s.a)(a,r))n.preventDefault(),i&&i.close(),l.addClass("print-article"),window.print(),l.removeClass("print-article");else if(Object(s.a)(a,f))u(n,f);else if(Object(s.a)(a,v)){if(n.preventDefault(),"#ugc-comments"===v.data("content-id"))if(n.stopPropagation(),o()("body").hasClass("authenticated"))new MutationObserver(d).observe(document.body,{attributes:!0}),i.close();else window.location=v.data("content-login-url");else u(n,v)}})),c()(l.O).subscribe((function(e,t){Object(s.a)(t,o()(".favorite-collections-add-input"))&&O(o()(".favorite-collections-add-input").val())&&j()})),c()(l.Kb).subscribe((function(e){var t=o()(".icon.icon-print").find("a[href$='?printview']");e.preventDefault(),t.click()}))}},777:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(2),o=n.n(a),i=n(1),c=n.n(i);function r(e){return c()(document.body).data("add-slash")&&!o.a.endsWith(e,"/")?"".concat(e,"/"):e}},993:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(2),o=n.n(a),i=n(1),c=n.n(i),r=n(777);function l(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function d(e,t){var n=Object(r.a)("/element-api/content-proxy/refresh-cookie");c.a.ajax({url:n,retry:!1,type:"GET",timeout:3e3,xhrFields:{withCredentials:!0},success:function(n){o.a.isArray(n)&&"function"==typeof e&&(o.a.forEach(n,(function(e){document.cookie=e})),e.apply(void 0,l(t).concat([!0])))}})}}}]);
//# sourceMappingURL=53-53.js.map