const thirdSlide = document.querySelector('.third-slide');
const activeSlide = Array.from(
	document.getElementsByClassName('activeSlide')
);
const animatedPhoto = Array.from(
	document.getElementsByClassName('grid-container')
);
let insertedSlide, currentSlide, clickedSlide;
const photos = Array.from(
	document.getElementsByClassName('slides')
);

photos.forEach((x, i) => {
	x.addEventListener('click', () => {
		thirdSlide.innerHTML = '';

    if (x != currentSlide) {
      console.log(1);
      activeSlide.forEach(x =>
  			x.classList.remove('activeSlide')
  		);
    }

		clickedSlide = document.querySelector(
			`.appearedSlide${i}`
		);

    insertedSlide = clickedSlide.cloneNode(true);

		insertedSlide.classList.add('activeSlide');
		thirdSlide.appendChild(insertedSlide);
		thirdSlide.classList.add('third-slide-height');
		animatedPhoto.classList.add('grid-container-2');
    currentSlide = x;
	});
});
