const target = document.getElementById('logo')
let targetTop = 0;
let targetLeft = 0;

let directionTop = 1;
let directionLeft = 1;

function updateColor() {
	const hutRotate = Math.round(Math.random() * 359);
	target.style.filter = `invert(1) sepia(38%) saturate(2000%) hue-rotate(${hutRotate}deg) brightness(100%) contrast(100%)`
}

function setup() {
	const maxTop = window.innerHeight - target.clientHeight - 5;
	const maxLeft = window.innerWidth - target.clientWidth - 5;
	const randomStartTop = Math.round(Math.random() * maxTop);
	const randomStartLeft = Math.round(Math.random() * maxLeft);
	targetTop = randomStartTop;
	targetLeft = randomStartLeft;
	target.style.top = `${targetTop}px`;
	target.style.left = `${targetLeft}px`;
	const randomDirectionTop = Math.random() < 0.5 ? -1 : 1;
	const randomDirectionLeft = Math.random() < 0.5 ? -1 : 1;
	directionTop = randomDirectionTop;
	directionLeft = randomDirectionLeft;
	updateColor();
}

setup();

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