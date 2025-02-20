/* -----------------------------------------------------------------------------
File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var Aminova = {
		init: function() {
			this.Basic.init();  
		},

		Basic: {
			init: function() {
				this.preloader();
				this.BackgroundImage();
				this.Animation();
				this.APBCHeaderSticky();
				this.APBCSrollToSection(); 
				this.APBCScrollTop();
			},
			preloader: function (){
				$(window).on('load', function() {
					$(".loading-preloader").fadeOut();
				});
			},

			BackgroundImage: function (){
				$('[data-background]').each(function() {
					$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
				});
			},

            Animation: function (){
				$(window).on("load", function(){
					if($('.wow').length){
						new WOW({
							offset: 100,
							mobile: true
						}).init()
					}
				});
				
			},

			APBCHeaderSticky: function (){

				//Sticky Header 
				$(window).on("scroll", function(){
					var ScrollBarLocation = $(this).scrollTop(); 
					if ( ScrollBarLocation > 150 ) {
						$(".apbc-header-section").addClass("apbc-header-sticky");
					} else {
						$(".apbc-header-section").removeClass("apbc-header-sticky"); 
					}
				});

				//SideBar 
				$(".apbc-sidebar-btn a").on("click", function(e){
					e.preventDefault();
					$(".apbc-body-overlay").addClass("apbc-body-overlay-on");
					$(".apbc_sidebar_info_content").addClass("apbc-sidebar-on");
					
				});

				$(".apbc-body-overlay").on("click", function(){
					$(".apbc_sidebar_info_content").removeClass("apbc-sidebar-on");
					$(this).removeClass("apbc-body-overlay-on");
				});

				$(".apbc-sidebar-info .close-menu").on("click", function(){
					$(".apbc_sidebar_info_content").removeClass("apbc-sidebar-on");
					$(".apbc-body-overlay").removeClass("apbc-body-overlay-on");
				});

				//Mobile Menu 
				$(".apbc-mobile-menu-open").on("click", function(e){
					e.preventDefault(); 
					$(".apbc-mobile-navigation").addClass("apbc-mobile-menu-on");
					$(".apbc-body-overlay").addClass("apbc-body-overlay-on");
				}); 
				
				$(".apbc-mobile-menu-close").on("click", function(e){
					e.preventDefault();
					$(".apbc-mobile-navigation").removeClass("apbc-mobile-menu-on");
					$(".apbc-body-overlay").removeClass("apbc-body-overlay-on");
				});

				$(".apbc-body-overlay").on("click", function(){
					$(".apbc-mobile-navigation").removeClass("apbc-mobile-menu-on");
					$(this).removeClass("apbc-body-overlay-on");
				});

				$(".apbc-mobile-navigation li.has-submenu a").each(function(){
					$(this).on("click", function(){
						$(this).siblings('ul').slideToggle();
						$(this).parent().toggleClass('abpc-submenu-icon-ratate');
					});
				});

			},

			APBCSrollToSection: function (){
				$('.apbc-nav-menu ul li a').on("click", function(){
					if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
						var target = $(this.hash);
						target = target.length ? target : $('[name="DCSext.Level"' + this.hash.slice(1) +']');
						if (target.length) {
							$('html, body').animate({
								scrollTop: target.offset().top -50
							}, 1000);
							return false;
						}
					}
				});
			},

			APBCScrollTop: function (){
				$(window).on("scroll", function(){
					var ScrollBarLocation = $(this).scrollTop();
					if( ScrollBarLocation > 150 ) {
						$(".apbc-scroll-top").fadeIn(); 
					} else {
						$(".apbc-scroll-top").fadeOut();
					}
				});

				$(".apbc-scroll-top").on("click", function(e){
					e.preventDefault(); 
					$("body,html").animate({
						scrollTop: 0,
					});
				});
			},


			APBCFeedBack: function (){
				$(".apbc-client-feedback").slick({
					slidesToShow: 1, 
					prevArrow: '<button type="button" class="prev-arrow"><i class="flaticon-left-arrow"></i></button>',
					nextArrow: '<button type="button" class="next-arrow"><i class="flaticon-right-arrow"></i></button>',
					autoplay: true, 
					dots: true, 
				});
			}, 
			APBCSkillsProgress: function (){
				$(window).on("load", function(){
					$(".progress-bar").ProgressBar();
				});
			}, 

		}	
	}
	jQuery(document).ready(function (){
		Aminova.init();
	});

})();
