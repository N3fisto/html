(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{254:function(t,e,i){"use strict";i.r(e);var n=i(2),s=i.n(n),r=i(1),a=i.n(r),o=i(5),c=i.n(o),l=i(791),h=i(3),d=i(782);function u(t,e,i,n){t.removeClass("hide"),t.each((function(t,n){var r=a()(n),o=r.data("category"),c=r.data("difficulty"),l=!0;e.length&&!s.a.includes(e,o)&&(l=!1);var h=!0;i.length&&!s.a.includes(i,c)&&(h=!1),l&&h||r.addClass("hide")})),n.refreshCarousel()}function f(t){t.removeClass("loading"),t.find(".carouselNav").each((function(t,e){var i=a()(e),n=i.find(".similarProjectsFilters"),s=i[0],r=new l.a(s,{offset:-24});n.length&&function(t,e,i){var n=e.find(".carouselNav__listItem"),s=i.find(".similarProjectsFiltersInput--difficulty"),r=i.find(".similarProjectsFiltersSelect--category"),o=[],l=[],f=[];n.each((function(t,e){var i=a()(e).data("category");o.includes(i)||(o.push(i),r.append(a()("<option/>",{value:i,text:a()("<span/>").html(i).text()})))})),r.on("change",(function(e){var i=a()("option:selected",e.target);l=i.length&&i.val()?i.val():o,u(n,l,f,t)})),c()(h.o).subscribe((function(e,r){if(Object(d.a)(r,s)){var o=i.find(".similarProjectsFiltersInput--difficulty:checked"),c=i.find(".similarProjectsFiltersInput--difficulty:not(:checked)");o.parent().addClass("similarProjectsFiltersInput--checked"),c.parent().removeClass("similarProjectsFiltersInput--checked"),f=[],o.length&&(f=o.map((function(t,e){return a()(e).val()}))),u(n,l,f,t)}}))}(r,i,n),r.render()})),c()(h.sb).broadcast()}function p(t){t.addClass("initialized");var e=t.data("endpoint");if(null==e||"null"===e)return!1;var i=t.data("recommendations-request-data")||"{}",n=JSON.parse(decodeURIComponent(i));return n.autoadvanceIds=a()(".component.auto-advance").data("auto"),n.projectRecirc=t.data("project-recirc"),n.recircTitle=t.data("recirc-title"),n.injectContent=t.data("inject-content"),n.configType=t.data("config-type"),n.content_graph_id=t.data("content-graph-id"),n.variant=t.data("variant"),a.a.get(e,n,(function(e){!function(t,e){t.html(e.html),t.addClass("enabled"),t.attr("data-request-data",e.request_data),t.find(".outbrain").length&&a.a.getScript("//widgets.outbrain.com/outbrain.js",(function(){c()(h.W).broadcast()})),f(t),c()(h.pb).broadcast()}(t,e)})).always((function(){t.removeClass("loading")})),!0}function v(){a()(".component.recirculation[data-endpoint]:not(.initialized)").each((function(){p(a()(this))}))}e.default=function(){v(),c()(h.f).subscribe((function(){v()}))}},782:function(t,e,i){"use strict";e.a=function(t,e){return t.is(e)||e.has(t).length>0}},791:function(t,e,i){"use strict";i.d(e,"a",(function(){return f}));var n=i(5),s=i.n(n),r=i(1),a=i.n(r),o=i(2),c=i.n(o),l=i(3),h=i(56);function d(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var u=function(t){var e=t.getBoundingClientRect(),i=document.body;return{top:e.top+i.scrollTop,left:e.left+i.scrollLeft,width:e.width}};var f=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options={viewportSelector:".carouselNav__listWrapper",listSelector:".carouselNav__list",linkSelector:".carouselNav__link",prevSelector:".carouselNav__prev",nextSelector:".carouselNav__next",itemSelector:".carouselNav__listItem",focusableSelector:"a, button",selectedSelector:".carouselNav__listItem--selected",scrollAnimationDuration:500,defaultScrollDistance:200,offset:0},this.elements={viewport:e.querySelector(this.options.viewportSelector),prevLink:e.querySelector(this.options.prevSelector),nextLink:e.querySelector(this.options.nextSelector)},i&&(this.options=Object.assign(this.options,i)),this.$context=a()(e),this.$slidePrev=this.$context.find(this.options.prevSelector),this.$slideNext=this.$context.find(this.options.nextSelector),this.root=e,this.wrapper=e.querySelector(this.options.listSelector),this.selectedElement=this.wrapper.querySelector(this.options.selectedSelector),this.items=this.wrapper.querySelectorAll(this.options.itemSelector),this.minItem=this.items[0];var n=parseInt(a()(this.minItem).find(this.options.focusableSelector).css("padding-left"),10);this.elements.buffer=parseInt(2*n,10),this.maxItem=this.items[this.items.length-1],this.activeIndex=0,this.touchStartX=0,this.touchEndX=0,this.firstInViewItem=null,this.lastInViewItem=null,this.isTouchDevice="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}var e,i,n;return e=t,(i=[{key:"refreshCarousel",value:function(){var t=a()(this.wrapper).find("".concat(this.options.itemSelector,":visible")),e=this.minItem,i=this.maxItem;t.length&&(e=t.get(0),i=t.get(t.length-1)),e&&(this.minItem=e),i&&(this.maxItem=i),this.checkEnds(),s()(l.xb).broadcast()}},{key:"markFirst",value:function(){var t=Object(h.a)(),e=this.root.querySelector(this.options.viewportSelector),i=u(this.minItem).left-u(e).left,n=this.root.querySelector(this.options.prevSelector),s=a()(n);i>=0||"mobile"===t&&this.isTouchDevice?s.css({display:"none"}).attr("aria-hidden","true").attr("tabindex","-1"):s.css({display:"flex"}).attr("aria-hidden","false").attr("tabindex","0")}},{key:"markLast",value:function(){var t=Object(h.a)(),e=this.root.querySelector(this.options.viewportSelector),i=u(this.maxItem).left,n=Math.floor(i-u(e).left+this.maxItem.offsetWidth),s=this.root.querySelector(this.options.nextSelector),r=a()(s);n<=e.offsetWidth||"mobile"===t&&this.isTouchDevice?r.css({display:"none"}).attr("aria-hidden","true").attr("tabindex","-1"):r.css({display:"flex"}).attr("aria-hidden","false").attr("tabindex","0")}},{key:"getDistance",value:function(){return this.root.querySelector(this.options.viewportSelector).offsetWidth-this.options.offset}},{key:"updateItemsAccessibility",value:function(){var t=this,e=Object(h.a)(),i={left:0,right:0};a()(this.elements.prevLink).is(":visible")&&(i.left=u(this.elements.prevLink).width),a()(this.elements.nextLink).is(":visible")&&(i.right=u(this.elements.nextLink).width),Array.prototype.forEach.call(this.items,(function(n,s){var r=a()(n),o=r.find(t.options.focusableSelector).not("[aria-hidden]");(function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{left:0,right:0},n=u(t),s=u(e);return n.left+n.width>s.left+i.left&&n.left<s.left+(s.width-i.right)})(n,t.elements.viewport,i)||"mobile"===e&&t.isTouchDevice?(r.attr("aria-hidden",!1),o.removeAttr("tabindex"),t.activeIndex=s):(r.attr("aria-hidden",!0),o.attr("tabindex","-1"))}));var n="".concat(this.options.itemSelector,'[aria-hidden="false"]'),r=this.$context.find(n);this.firstInViewItem=r.get(0),this.lastInViewItem=r.get(r.length-1),s()(l.vb).broadcast()}},{key:"checkEnds",value:function(){this.markFirst(),this.markLast(),this.updateItemsAccessibility()}},{key:"end",value:function(t,e){this.wrapper.scrollLeft=t+e,this.checkEnds()}},{key:"animatedScroll",value:function(t){var e,i,n=this.wrapper.scrollLeft,r=this.options.scrollAnimationDuration,a=this;function o(c){var h,d,u;i=c-e,a.wrapper.scrollLeft=(h=i,d=n,u=t,(h/=r/2)<1?u/2*h*h+d:-u/2*(--h*(h-2)-1)+d),i<r?requestAnimationFrame(o):(a.wrapper.scrollLeft=n+t,a.checkEnds(),s()(l.xb).broadcast())}requestAnimationFrame((function(t){e=t,o(t)}))}},{key:"scroll",value:function(t,e){var i=e;i||(i=this.options.defaultScrollDistance),"left"===t&&(i=e?-e:-i),this.animatedScroll(i)}},{key:"trackSwipeGestures",value:function(){this.touchEndX<this.touchStartX&&s()(l.i).broadcast("left",this.activeIndex),this.touchEndX>this.touchStartX&&s()(l.i).broadcast("right",this.activeIndex)}},{key:"render",value:function(){var t=this;if(this.selectedElement&&this.minItem!==this.selectedElement){var e=u(this.selectedElement),i=u(this.wrapper),n=e.left-i.left;this.maxItem!==this.selectedElement&&(n-=this.options.offset),this.scroll("right",n)}else this.checkEnds();var r=this;s()(l.o).subscribe((function(e,i){i.closest(t.$slidePrev).length&&(e.preventDefault(),r.scroll("left",r.getDistance())),i.closest(t.$slideNext).length&&(e.preventDefault(),r.scroll("right",r.getDistance()))})),this.wrapper.addEventListener("scroll",c.a.throttle((function(){r.checkEnds(),s()(l.xb).broadcast()})),100),this.wrapper.addEventListener("touchstart",(function(t){r.touchStartX=t.changedTouches[0].screenX,r.touchStartY=t.changedTouches[0].screenY}),!1),this.wrapper.addEventListener("touchend",(function(t){r.touchEndX=t.changedTouches[0].screenX,r.touchEndY=t.changedTouches[0].screenY,r.trackSwipeGestures()}),!1),this.wrapper.addEventListener("keydown",(function(e){var i=a()(e.target);if(i.attr("id")&&a()(t.firstInViewItem).find("[id]").length&&a()(t.lastInViewItem).find("[id]").length){var n=a()(t.firstInViewItem).find("[id]").first().attr("id"),s=a()(t.lastInViewItem).find("[id]").first().attr("id"),r=i.closest(t.options.itemSelector),o=parseInt(r.css("margin-right"),10)||0,c=r.width()+o,l=i.attr("id");"ArrowRight"===e.key&&l===s&&t.scroll("right",c),"ArrowLeft"===e.key&&l===n&&t.scroll("left",c)}}),!1),s()(l.Bb).subscribe((function(){r.checkEnds()}))}}])&&d(e.prototype,i),n&&d(e,n),t}()}}]);
//# sourceMappingURL=55-55.js.map