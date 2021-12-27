"use strict";

$(document).ready(function () {
	console.log("hello");
	const isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (
				isMobile.Android() ||
				isMobile.BlackBerry() ||
				isMobile.iOS() ||
				isMobile.Opera() ||
				isMobile.Windows());
			}
		}
		if (isMobile.any()){
			$('body').addClass('_touch');
			const menuIcon = $('.menu_icon');
			const menuBody = $('.menu_body');
			menuIcon.click(function () {
				menuBody.toggleClass("_active");
			});
			const menuArrow = $('.menu_arrow');
			menuArrow.each(function () {
				$(this).click(function () {
					$(this).parent().toggleClass("_active");
				});
			});
		}
		else {
			$('body').addClass('_pc');
		}
		$('.question').each(function (i, element) {
		$('.question_title', this).click(function () {
			$('.question').each(function (i2, element2){
				if((!$('.answer', element2).is(':hidden')))
				{
					$('.question_title', element2).css('color', '#000');
					$(element2).css('outline-color', 'transparent');
					$('.answer', element2).slideToggle(300);
				}
			});
			if ($('.answer', element).is(':hidden')) {
				$(this).css('color', 'var(--orange)');
				$(element).css('outline-color', 'var(--orange)');
				$('.answer', element).slideToggle(300);
			}
		});
		});
		const slider9 = $('.slider');
		const slider9Number = $('.slide_current');
		slider9.slick({
		appendArrows: ".slide_number",
		adaptiveHeight: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		zIndex: 10,
		mobileFirst: true,
        });
	    slider9Number.text((slider9).slick('slickCurrentSlide') + 1);
	    $('.slide_length').text($('.slider_item').length);
	    slider9.on('afterChange', function (event, slick, currentSlide) {
		slider9Number.text((slider9).slick('slickCurrentSlide') + 1);
	    });
		const slider10 = $('.slick_slider');
		slider10.slick({
			mobileFirst :false, 
            autoplay :true,
			infinite: true,
			pauseOnHover :false,
			arrows:false,
			slidesToShow:5,
			centerMode: true,
			centerPadding: '10%',
			autoplaySpeed: 2000,
			responsive:[{
			breakpoint:1023,settings:
			{
            autoplay:true,
            pauseOnHover:false,
            arrows:false,
            slidesToShow:3,
            waitForAnimate:false
			}
			},
			{
			breakpoint:767,settings:
			{
            autoplay:true,
            pauseOnHover:false,
            arrows:false,
            slidesToShow:2,
            waitForAnimate:false
			}
			}]
			});
		$("#agree_checkbox").change(function () {
        if ($("#agree_checkbox").is(":checked")) {
            $("#submit_button").prop("disabled", false);
        } else {
            $("#submit_button").prop("disabled", true);
        }
        });
		$(".ajaxForm").submit(function (e) { //Обработка данных формы
		e.preventDefault();
		let href = $(this).attr("action");
		$.ajax({
			type: "POST",
			dataType: "json",
			url: href,
			data: $(this).serialize(),
			success: function (response) {
				if (response.status == "success") {
					alert("Заявка отправлена!");
					$('#contactform')[0].reset();
				} else {
					alert("Произошла ошибка: " + response.message);

				}
			}
		});
	});
});