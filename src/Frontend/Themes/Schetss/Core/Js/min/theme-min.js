var jsTheme={init:function(){jsTheme.mobileNav.init(),jsTheme.forms.init(),jsTheme.mediaQuery.init()}};jsTheme.mobileNav={init:function(){jsTheme.mobileNav.enableMobileNav(),jsTheme.mobileNav.buildMobileNav()},enableMobileNav:function(){$("html").addClass("mobile-nav")},buildMobileNav:function(){var e=$(".navigation");e.prepend('<span class="main-nav-trigger">menu</span>');var i=$(".main-nav-trigger"),t=$(".main-nav");i.on("click",function(){t.toggle(),$(this).toggleClass("trigger-active")})}},jsTheme.forms={init:function(){$(".alert-box").on("click",function(e){e.preventDefault(),$(this).closest(".alert-box").fadeOut(300)})}},jsTheme.mediaQuery={init:function(){$(window).width()<680?$("#nav-row").removeClass("row"):$("#nav-row").addClass("row")}},$(jsTheme.init);var pixelRatio=window.devicePixelRatio?window.devicePixelRatio:1;$(window).on("load",function(){pixelRatio>1&&$(".retina").each(function(){$(this).attr("src",$(this).attr("src").replace(".","@2x."))}),$(function(){$(".main-nav ul a").bind("click",function(e){var i=$(this);$("html, body").animate({scrollTop:$(i.attr("href")).offset().top+"px"},1e3),e.preventDefault()})}),$(function(){$(".back-to-top a").bind("click",function(e){var i=$(this);$("html, body").animate({scrollTop:$(i.attr("href")).offset().top+"px"},1e3),e.preventDefault()})}),$(function(){var e=window.location.search.split("?identifier=")[1];"contact"===e&&$(function(){var e=$("#contact");$("html, body").animate({scrollTop:$(e).offset().top+"px"},1e3),event.preventDefault()})});var e=window.matchMedia("(max-width: 680px)");$(window).resize(function(){e.matches?$("#nav-row").removeClass("row"):$("#nav-row").addClass("row")})});