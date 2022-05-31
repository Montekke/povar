
const dada = new DynamicAdapt("max");
dada.init();

var swiper = new Swiper(".lemonade-slider", {
	slidesPerView: 1,
	spaceBetween: 14,
	slidesPerGroup: 1,
	//loop: true,
	//loopFillGroupWithBlank: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		580: {
			slidesPerView: 2,
			spaceBetween: 14,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 14,
		},
		1200: {
			slidesPerView: 4,
			spaceBetween: 14,
		},
	},
});
var swiper22 = new Swiper(".interesting-slider", {
	slidesPerView: 1,
	spaceBetween: 10,
	slidesPerGroup: 1,
	//loop: true,
	//loopFillGroupWithBlank: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		580: {
			slidesPerView: 2,
			spaceBetween: 14,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 14,
		},
		1200: {
			slidesPerView: 4,
			spaceBetween: 14,
		},
	},
});

var swiper2 = new Swiper(".tea-slider", {
	slidesPerView: 1,
	spaceBetween: 14,
	slidesPerGroup: 1,
	//loop: true,
	//loopFillGroupWithBlank: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		580: {
			slidesPerView: 2,
			spaceBetween: 14,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 14,
		},
		1200: {
			slidesPerView: 4,
			spaceBetween: 14,
		},
	},
});

var swiper3 = new Swiper(".reviews-slider", {
	slidesPerView: 1,
	spaceBetween: 10,
	slidesPerGroup: 1,
	centeredSlides: true,
	initialSlide: 2,
	//loop: true,
	//loopFillGroupWithBlank: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		580: {
			slidesPerView: 2,
			spaceBetween: 19,
			centeredSlides: false,
			initialSlide: 1,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 14,
			centeredSlides: true,
			initialSlide: 2,
		},
	},
});

var swiper4 = new Swiper(".video-block", {
	slidesPerView: 1,
	spaceBetween: 10,
	slidesPerGroup: 1,
	//loop: true,
	//loopFillGroupWithBlank: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		580: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
});

var swiper4 = new Swiper(".sertificate-slider", {
	slidesPerView: 1,
	spaceBetween: 10,
	slidesPerGroup: 1,
	//loop: true,
	//loopFillGroupWithBlank: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		580: {
			slidesPerView: 3,
			spaceBetween: 15,
		},
		992: {
			slidesPerView: 4,
			spaceBetween: 24,
		},
	},
});


var swiper = new Swiper(".bottom-slider", {
	spaceBetween: 10,
	slidesPerView: 2,
	freeMode: true,
	watchSlidesProgress: true,
	breakpoints: {
		480: {
			slidesPerView: 1,
			centeredSlides: true,
			initialSlide: 1,
		},

	},
});
var swiper2 = new Swiper(".top-slider", {
	spaceBetween: 10,
	centeredSlides: true,
	initialSlide: 1,
	breakpoints: {
		480: {
			initialSlide: 1,
		},

	},
	navigation: {
		nextEl: ".item-slider .swiper-button-next",
		prevEl: ".item-slider .swiper-button-prev",
	},
	thumbs: {
		swiper: swiper,
	},
});




