const slider = tns({
	container: '.my-slider',
	items: 1,
	slideBy: 'page',
	autoplay: false,
	nav: false,
	controls: false,
});

document.querySelector('.prev').addEventListener('click', function () {
	slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
	slider.goTo('next');
});