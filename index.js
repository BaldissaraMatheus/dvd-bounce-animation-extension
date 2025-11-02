const target = document.getElementById('logo')
let targetTop = 0;
let targetLeft = 0;

let directionTop = 1;
let directionLeft = 1;

function updateColor() {
	const hutRotate = Math.round(Math.random() * 359);
	target.style.filter = `invert(1) sepia(38%) saturate(2000%) hue-rotate(${hutRotate}deg) brightness(100%) contrast(100%)`
}

function updatePositions() {
	setTimeout(() => {
		targetTop += directionTop;
		target.style.top = `${targetTop}px`;
		if (targetTop === 0 || targetTop + target.clientHeight > window.innerHeight) {
			directionTop *= -1;
			updateColor();
		}
		targetLeft += directionLeft;
		target.style.left = `${targetLeft}px`;
		if (targetLeft === 0 || targetLeft + target.clientWidth > window.innerWidth) {
			directionLeft *= -1;
			updateColor();
		}
		updatePositions();
	}, 10);
}

updatePositions();