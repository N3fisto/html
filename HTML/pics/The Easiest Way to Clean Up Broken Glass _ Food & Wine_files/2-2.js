(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{183:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),i=a(2),s=a.n(i);e.default=function(){r()(".component.amazon-price[data-buylink]").each((function(){var t=r()(this);if(t.data("buylink")){var e=t.data("buylink").match(/https?:\/\/(www.)?(.*)amazon.([a-z.]{2,5})\/(.*)\/?(?:dp|o|gp|-)\/(aw\/d\/|product\/)?(B[0-9]{2}[0-9A-Z]{7}|[0-9]{9}(?:X|[0-9]))/),a=e?e.splice(-1)[0]:null;if(a){var n="/amazon/product-info/".concat(a);r.a.get(n,(function(e){if(e){var a=s.a.get(e,"[0].Offers[0].Offer[0].OfferListing[0].Price[0].FormattedPrice[0]","Price Varies");t.children("span.price").text(a)}})).fail((function(){t.children("span.price").text("Price Varies")}))}}}))}},185:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),i=a(11),s=a.n(i),o=a(5),c=a.n(o),u=a(3);function d(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var l=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.partnerCookie=s.a.get("mdp_partner"),this.checkCookie(),this.setPageAuthState(),this.registerListener()}var e,a,n;return e=t,(a=[{key:"checkCookie",value:function(){this.partnerCookie?this.isAuthenticated=!0:this.isAuthenticated=!1}},{key:"setPageAuthState",value:function(){this.isAuthenticated?document.body.classList.add("authenticated"):document.body.classList.remove("authenticated")}},{key:"registerListener",value:function(){var t=this;c()(u.o).subscribe((function(e,a){t.$logOutButton=a.closest(".logged-in"),t.$logOutButton.length&&(e.preventDefault(),s.a.remove("mdp_partner",{path:""}),document.body.classList.remove("authenticated"))}))}}])&&d(e.prototype,a),n&&d(e,n),t}();e.default=function(){return r()(".component.atg").each((function(){return new l(r()(this))}))}},190:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return h}));var n=a(1),r=a.n(n),i=a(5),s=a.n(i),o=a(3),c=r()(".component.breadcrumbs"),u=r()(".breadcrumbs__container"),d=u.parent(),l=r()(".breadcrumbs__list"),f=!1;function b(t,e){e.hasClass("breadcrumbs-align-shift")&&(c.hasClass("breadcrumbAligned")?(c.removeClass("breadcrumbAligned"),l.animate({left:0})):(c.addClass("breadcrumbAligned"),l.animate({left:u.width()-l.width()})))}function g(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=l.width()>u.width()?"too-long":"fits",a=r()(window).width()>360?"desktop":"mobile";"mobile"===a||"fits"===e?(c.removeClass("breadcrumbs-scroll"),d.removeClass("breadcrumbs-trimmed"),s()(o.R).unsubscribe(b),f=e):e!==f&&(c.addClass("breadcrumbs-scroll"),d.addClass("breadcrumbs-trimmed"),t||s()(o.R).subscribe(b),f=e)}function h(){s()(o.Bb).subscribe((function(){g()})),s()(o.f).subscribe((function(t){c=r()(".component.breadcrumbs",t),u=r()(".breadcrumbs__container",t),d=u.parent(),l=r()(".breadcrumbs__list",t),f=!1,g(!0)})),g()}},194:function(t,e,a){"use strict";a.r(e),e.default=function(){var t=document.querySelectorAll(".js-button-pdf--gated"),e=document.querySelector("body").getAttribute("data-element-login-registration"),a=sessionStorage.getItem("gatedPDFLink");var n=new MutationObserver((function(t){t[0].target.classList.contains("authenticated")&&a&&(sessionStorage.removeItem("gatedPDFLink"),window.open(a,"_blank"),n.disconnect())}));n.observe(document.body,{attributes:!0}),t.forEach((function(t){var n=t.getAttribute("href"),r=function(t){var a=t.getAttribute("data-reg-source");return e?"".concat(window.location.origin,"/account/signin?regSource=").concat(a,"&returnURL=").concat(encodeURIComponent(window.location.href)):"https://secure.bhg.com/common/profile/regStep1.jsp?regSource=".concat(a)}(t);t.addEventListener("click",(function(e){document.body.classList.contains("authenticated")||(e.target.classList.contains("embedded-auth-modal-trigger")?a=n:(sessionStorage.setItem("gatedPDFLink",n),t.setAttribute("href",r),t.setAttribute("target","_self")))}))}))}},195:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n);e.default=function(){r()(".buyContent__showMoreInfo").on("click",(function(t){var e=r()(t.currentTarget),a=e.find(".showMoreInfo__label");e.next().toggleClass("hidden"),e.hasClass("collapsed")?(e.removeClass("collapsed"),a.text("show less info")):(e.addClass("collapsed"),a.text("show more info"))}))}},214:function(t,e,a){"use strict";a.r(e);var n=a(11),r=a.n(n),i=a(1),s=a.n(i);e.default=function(){1===Number(r.a.get("mdp.privacy.loc"))&&(s()("body").addClass("euUser"),setTimeout((function(){s()(".euDisabled").hide(),s()(".euEnabled").show()}),0))}},220:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),i=a(5),s=a.n(i),o=a(3),c=function(){var t=r()(".fontSizeSlider__sliderInput"),e=r()(".fontSizeSlider__selectionArea"),a=r()(".fontSizeSlider").data("type"),n=["Small","Medium","Large"],i="1",c=e.data("current-size")||"Small",u=r()(".".concat(e.data("resize-area")));function d(t){if(t!==c&&s()(o.A).broadcast(t),"addClass"===a){var r=n.join(" ");u.removeClass(r),e.removeClass(r),u.addClass(t),e.addClass(t)}else!function(){var t,e,a=u[0],n=document.createNodeIterator(a,NodeFilter.SHOW_TEXT);for("0"===i?t=.8:"1"===i?t=1:"2"===i&&(t=1.3);null!=(e=n.nextNode());){var r=e.parentElement;if(r.getAttribute("data-default-font-size"))r.getAttribute("data-default-font-size")&&(r.style.fontSize="".concat(parseFloat(r.getAttribute("data-default-font-size")*t),"px")),r.getAttribute("data-default-line-height")&&(r.style.lineHeight="".concat(r.getAttribute("data-default-line-height")*t,"px"));else{var s=window.getComputedStyle(e.parentElement),o=s.getPropertyValue("font-size"),c=s.getPropertyValue("line-height"),d=parseFloat(o),l=parseFloat(c);r.setAttribute("data-default-font-size",d),r.setAttribute("data-default-line-height",l)}}}()}t.on("change input",(function(t){var a,r;t.preventDefault(),a=t.currentTarget,r=n[a.value],a.setAttribute("aria-valuenow",a.value),a.setAttribute("aria-valuetext","".concat(r," font")),d(r),i=a.value,c=r,e.attr("data-current-size",n[t.currentTarget.value])}));var l=n[0];e.data("current-size")?l=e.data("current-size"):e.attr("data-current-size",n[0]),d(l)};e.default=function(){c()}},246:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return c}));var n=a(5),r=a.n(n),i=a(1),s=a.n(i),o=a(3);function c(){r()(o.dc).subscribe((function(t,e){if("success"===t.status){var a=s()(".component.project-ratings[data-uuid=".concat(e.id,"]")),n=s()(".project-ratings-rating-title",a);n.length&&n.text("You have rated this project.")}})),r()(o.o).subscribe((function(t,e){var a="";if(e.hasClass("project-ratings-rating-label")?a=e.prevAll(".project-ratings-rating-value"):e.hasClass("project-ratings-accessible-submit")&&(a=e.parent().find(".project-ratings-rating-value:checked")),a.length){var n=e.parents(".component.project-ratings"),r=e.parents(".component.ugc-comments"),i=a.val(),o=n.data("uuid"),c=s()(".component.project-ratings[data-uuid=".concat(o,"]")),u=s()(".project-ratings-rating-value[value=".concat(i,"]"),c);sessionStorage.setItem("ratingValue",i),u.length&&u.each((function(t,e){s()(e).prop("checked",!0)}));var d=e.parents(".ugc-upload-modal.modal").length;setTimeout((function(){if(!d&&r.length){var t=s()(".ugc-comments-add-comment",r);t.length&&(s()("body").hasClass("authenticated")?t.click():t.focus())}}),25)}}))}},253:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),i=a(5),s=a.n(i),o=a(3),c=a(56);e.default=function(){var t=r()("body"),e=r()(".logo-row").height()||0,a=r()(".ad-wrapper.karma-leaderboard-docking-element"),n=a.height(),i="recirculation-toaster--active",u=0;s()(o.Cb).subscribe((function(){if("mobile"===Object(c.a)()){var d=r()(window).scrollTop(),l=e+(a.hasClass("docked")?0:n);0===d||d<l?t.removeClass(i):u>d&&!t.hasClass(i)&&(t.addClass(i),s()(o.Zb).broadcast()),u=d}}))}},268:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),i=a(5),s=a.n(i),o=a(3),c=a(56);function u(){var t=Object(c.a)(),e=r()(".sweepstakesEntry__description"),a=r()(".js-hideMe");"mobile"===t?(e.addClass("truncated"),a.addClass("hide")):(e.removeClass("truncated"),a.removeClass("hide")),s()(o.xb).broadcast()}e.default=function(){u(),s()(o.o).subscribe((function(t,e){e.hasClass("sweepstakesEntry__descriptionReadMoreLink")&&(t.preventDefault(),r()(".sweepstakesEntry__description").removeClass("truncated"),r()(".js-hideMe").removeClass("hide"),s()(o.xb).broadcast())})),s()(o.h).subscribe((function(){u()}))}}}]);
//# sourceMappingURL=2-2.js.map