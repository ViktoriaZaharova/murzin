// phone mask
$('[name="phone"]').mask('+7 (999) 999-99-99');

// slick sliders
$('.product-slider-preview').slick({
	slidesToShow: 3,
	vertical: true,
	focusOnSelect: true,
	infinite: false,
	asNavFor: '.product-slider-max',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-bottom"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-bottom"></use></svg></button>',
	responsive: [
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 3,
				vertical: false,
				infinite: true,
			}
		},
		{
			breakpoint: 420,
			settings: {
				slidesToShow: 2,
				vertical: false,
				infinite: true,
			}
		}
	]
});

$('.product-slider-max').slick({
	slidesToShow: 1,
	arrows: false,
	fade: true,
	asNavFor: '.product-slider-preview',
});

// slick slider in modal
$('.modal').on('shown.bs.modal', function (e) {
	$('.slick-slider').slick('setPosition');
});

// $(window).scroll(function () {
// 	// проверка на докрутку до определенного элемента
// 	var scroll_picca = $('header').offset().top;

// 	//если мы докрутили до нужного элемента
// 	if ($(this).scrollTop() > scroll_picca) {
// 		// создаем эффекты и анимацию
// 		$("header").addClass('fixed');
// 		$("body").addClass('fixed-header');

// 	} else {
// 		$("header").removeClass('fixed');
// 		$("body").removeClass('fixed-header');
// 	}
// });

$(function () {
	menu_top = $('header').offset().top;        // запоминаем положение меню
	$(window).scroll(function () {             // отслеживаем событие прокрутки страницы
		if ($(window).scrollTop() > menu_top) {  // если прокрутка дошла до меню
			if ($('header').css('position') != 'fixed') {  // проверяем, если меню еще не зафиксировано
				$("header").addClass('fixed');
				$("body").addClass('fixed-header');
				// $('.menu').css('position', 'fixed');  // задаем блоку меню свойство position = fixed
				// $('.menu').css('top', '0');           // положение в самом верху
				// $('.content').css('margin-top', '80px'); // делаем отступ, чтобы контент не "скакал" в момент фиксации меню
			}
		} else {                                 // прокрутка страницы обратно вверх достигла место "перехода" меню
			if ($('header').css('position') == 'fixed') {  // если меню зафиксировано
				// $('.menu').css('position', '');
				// $('.menu').css('top', '');
				// $('.content').css('margin-top', '');
				$("header").removeClass('fixed');
						$("body").removeClass('fixed-header');
			}
		}
	});
});

// animate.css + wow.js
new WOW().init();

var rellax = new Rellax('.rellax');

// mobile menu
$('.btn-burger').on('click', function (e) {
	e.preventDefault();
	$('header .nav-menu').fadeToggle()
});

$('.nav-menu__close').on('click', function () {
	$('header .nav-menu').fadeOut()
});

// animate scroll menu
$('.go_to').click(function (e) {
	e.preventDefault();
	var scroll_el = $(this).attr('href');
	if ($(scroll_el).length !== 0) {
		$('html, body').animate({
			scrollTop: $(scroll_el).offset().top
		}, 500);
	}
	return false;
});

// filter mobile
$('.btn-filter').on('click', function (e) {
	e.preventDefault();
	$('.filter-wrapper').fadeToggle();
});

$('.filter-wrapper__close').on('click', function () {
	$('.filter-wrapper').fadeOut();
});


// animate background color scroll
const span = document.querySelector('.parallax-text');

window.addEventListener('scroll', () => {
	const t = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
	span.style.backgroundPosition = `${-t * 800}% 0`;
});

