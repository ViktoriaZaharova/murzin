$('[name="phone"]').mask('+7 (999) 999-99-99');

$('.product-slider-preview').slick({
	slidesToShow: 3,
	vertical: true,
	focusOnSelect: true,
	infinite: false,
	asNavFor: '.product-slider-max',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-bottom"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-bottom"></use></svg></button>',
});

$('.product-slider-max').slick({
	slidesToShow: 1,
	arrows: false,
	fade: true,
	asNavFor: '.product-slider-preview',
});


$('.modal').on('shown.bs.modal', function (e) {
	$('.slick-slider').slick('setPosition');
});