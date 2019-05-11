var changeSlide = 4; // mobile -1, desktop + 1
// Resize and refresh page. slider-two slideBy bug remove
var slide = changeSlide;

if ($(window).width() < 600) {
	var slide = changeSlide;
	slide--;
}
else if ($(window).width() > 999) {
	var slide = changeSlide;
	slide++;
}
else{
	var slide = changeSlide;
}

$(document).ready(function() {
	$('.one').owlCarousel({
		nav: true,
		items: 1,
		touchDrag: false,
		mouseDrag: false
	})

	$('.two').owlCarousel({
		nav: true,
		margin: 15,
		responsive: {
			0: {
				items: changeSlide - 1,
				slideBy: changeSlide - 1
			},
			600: {
				items: changeSlide,
				slideBy: changeSlide
			},
			1000: {
				items: changeSlide + 1,
				slideBy: changeSlide + 1
			}
		}
	})

	var owl = $('.one');
	owl.owlCarousel();

	owl.on('translated.owl.carousel', function(event) {
		$(".right").removeClass("nonr");
		$(".left").removeClass("nonl");
		if ($('.one .owl-next').is(".disabled")) {
			$(".slider .right").addClass("nonr");
		}
		if ($('.one .owl-prev').is(".disabled")) {
			$(".slider .left").addClass("nonl");
		}
		$('.slider-two .item').removeClass("active");
		var c = $(".slider .owl-item.active").index();
		$('.slider-two .item').eq(c).addClass("active");
		var d = Math.ceil((c + 1) / (slide)) - 1;
		$(".slider-two .owl-dots .owl-dot").eq(d).trigger('click');
	})

	$('.right').click(function() {
		$(".slider .owl-next").trigger('click');
	});

	$('.left').click(function() {
		$(".slider .owl-prev").trigger('click');
	});

	$('.slider-two .item').click(function() {
		var b = $(".item").index(this);
		$(".slider .owl-dots .owl-dot").eq(b).trigger('click');
		$(".slider-two .item").removeClass("active");
		$(this).addClass("active");
	});

	var owl2 = $('.two');
	owl2.owlCarousel();

	owl2.on('translated.owl.carousel', function(event) {
		$(".right-t").removeClass("nonr-t");
		$(".left-t").removeClass("nonl-t");
		if ($('.two .owl-next').is(".disabled")) {
			$(".slider-two .right-t").addClass("nonr-t");
		}
		if ($('.two .owl-prev').is(".disabled")) {
			$(".slider-two .left-t").addClass("nonl-t");
		}
	})

	$('.right-t').click(function() {
		$(".slider-two .owl-next").trigger('click');
	});

	$('.left-t').click(function() {
		$(".slider-two .owl-prev").trigger('click');
	});

	// $('.owl-carousel-2').owlCarousel({
	// 	dots: false,
	// 	nav: false
	// })
});


// Modal Slideshow
function openModal() {
	document.getElementById('myModal').style.display = "block";
}

function closeModal() {
	document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("demo");
	var captionText = document.getElementById("caption");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
	captionText.innerHTML = dots[slideIndex-1].alt;
}
