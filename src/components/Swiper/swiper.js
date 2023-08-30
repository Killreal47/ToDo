// https://swiperjs.com/get-started
// <link rel = "stylesheet" href = "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"/>
// <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
function swiper() {
	const swiper = new Swiper('.swiper', {

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		// And if we need scrollbar
		scrollbar: {
			el: '.swiper-scrollbar',
		},

		//   // Responsive breakpoints
		//   breakpoints: {
		//   // when window width is >= 320px
		//   320: {
		//     slidesPerView: 3,
		//     spaceBetween: 20
		//   },
		//   // when window width is >= 480px
		//   480: {
		//     slidesPerView: 3,
		//     spaceBetween: 30
		//   },
		// }
	});
}

export default swiper;