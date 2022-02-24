function $(id) {
	return document.getElementById(id)
}

function lerp(start, end, amt) {
	return Math.round(((1 - amt) * start + amt * end) * 100) / 100;
}

function easeInOutQuad(x) {
	return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
}

function easeInOutExpo(x) {
	return x === 0 ?
		0 :
		x === 1 ?
			1 :
			x < 0.5 ?
				Math.pow(2, 20 * x - 10) / 2 :
				(2 - Math.pow(2, -20 * x + 10)) / 2;
}

function easeInOutQuart(x) {
	return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
}

function bounce(x) {
	const n1 = 7.5625;
	const d1 = 2.75;
	if (x < 1 / d1) {
		return n1 * x * x;
	} else if (x < 2 / d1) {
		return n1 * (x -= 1.5 / d1) * x + 0.75;
	} else if (x < 2.5 / d1) {
		return n1 * (x -= 2.25 / d1) * x + 0.9375;
	} else {
		return n1 * (x -= 2.625 / d1) * x + 0.984375;
	}
}

function linear(x) {
	return x;
}
var saveData = {
	data: [
		[331, 351],
		[38, 351],
		[331, 14],
		[38, 14],
	],
	presets: [{
		name: "Default",
		data: [
			[30, 250],
			[250, 250],
			[30, 30],
			[250, 30]
		],
		show: null
	}, {
		name: "Bow",
		data: [
			[143, 323],
			[482, 25],
			[54, 21],
			[113, 373],
			[231, 298],
			[482, 25],
			[54, 21],
			[279, 300],
			[371, 381],
			[483, 25],
			[54, 20],
			[357, 324]
		],
		show: null
	}, {
		name: "Cursive f",
		data: [
			[193, 313],
			[513, 246],
			[42, 42],
			[410, 6],
			[120, 586],
			[567, 521],
			[53, 339],
			[332, 283]
		],
		show: null
	}, {
		name: "Infinity Warp",
		data: [[683, 396], [592, 368], [737, 382], [799, 228], [764, 49], [639, 8], [456, 144], [260, 331], [97, 398], [9, 282], [16, 91], [118, 0], [288, 93], [486, 284], [618, 384], [775, 330], [796, 142], [719, 8], [565, 50], [370, 230], [158, 393], [48, 367], [0, 198], [50, 31], [185, 19], [373, 174], [568, 353], [722, 391], [796, 254], [774, 67], [660, 2], [483, 119], [285, 310], [115, 400], [15, 306], [10, 114], [100, 2], [263, 71], [460, 259], [642, 393], [765, 349], [799, 168], [735, 17], [589, 34], [396, 204], [205, 370], [62, 380], [1, 225], [38, 46], [163, 9]],
		show: {
			"lines": false,
			"midpoints": true,
			"trail": false,
			"controlpoints": false,
			"finalmidpoint": false
		}
	},
	{
		name: "Circle Warp",
		data: [
			[300, 600], [552, 462], [573, 175], [342, 3], [73, 104], [12, 385], [216, 588], [495, 528], [597, 256], [424, 27], [137, 48], [0, 301], [139, 553], [426, 572], [597, 341], [495, 72], [214, 13], [12, 217], [75, 498], [345, 597], [574, 422], [551, 136], [297, 0], [46, 140], [28, 427], [260, 597], [529, 494], [587, 212], [381, 11], [101, 76], [4, 346], [179, 574], [465, 550], [600, 296], [459, 45], [172, 29], [2, 262], [107, 530], [389, 587], [589, 380], [524, 100], [252, 4], [25, 180], [50, 467], [305, 600], [555, 458], [571, 170], [337, 2], [70, 108], [14, 390], [221, 589], [501, 523], [596, 251], [419, 25], [132, 51], [0, 307], [144, 556], [431, 570], [598, 336], [491, 69], [209, 14], [10, 223], [78, 502], [350, 596], [576, 418], [548, 131], [292, 0], [43, 145], [31, 432], [266, 598], [532, 490], [585, 207], [376, 10], [97, 79], [4, 352], [184, 577], [470, 547], [600, 291], [454, 43], [167, 31], [2, 267], [111, 533], [394, 585], [591, 375], [520, 96], [247, 5], [23, 185], [53, 471], [311, 600], [558, 453], [568, 166], [332, 2], [66, 112], [16, 395], [226, 591], [505, 519], [595, 246], [414, 22], [128, 54], [0, 312]
		],
		show: {
			"lines": false,
			"midpoints": true,
			"trail": false,
			"controlpoints": false,
			"finalmidpoint": false
		}
	}],
	show: {
		"lines": false,
		"midpoints": true,
		"trail": false,
		"controlpoints": false,
		"finalmidpoint": false
	},
	settings: {
		speed: 0.002,
		ease: 'easeInOutQuad',
		show: {
			lines: true,
			midpoints: true,
			trail: true,
			controlpoints: true,
			finalmidpoint: true
		},
		colorAlgorithm: 'goldenAngle'
	}
};
let buttonStates = {
	play: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
                    <polygon fill="#ffffff" class="play-btn__svg" points="9.33 6.69 9.33 19.39 19.3 13.04 9.33 6.69" />
                <path fill="#ffffff" class="play-btn__svg"
                    d="M26,13A13,13,0,1,1,13,0,13,13,0,0,1,26,13ZM13,2.18A10.89,10.89,0,1,0,23.84,13.06,10.89,10.89,0,0,0,13,2.18Z" />
                    </svg>`,
	pause: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                    viewBox="0 0 267 267" style="enable-background:new 0 0 26 26;">
                    <g>
                        <path style="fill:#ffffff;"
                            d="M135.977,271.953c75.097,0,135.977-60.879,135.977-135.977S211.074,0,135.977,0S0,60.879,0,135.977    S60.879,271.953,135.977,271.953z M135.977,21.756c62.979,0,114.22,51.241,114.22,114.22s-51.241,114.22-114.22,114.22    s-114.22-51.241-114.22-114.22S72.992,21.756,135.977,21.756z" />
                        <path style="fill:#ffffff;"
                            d="M110.707,200.114c7.511,0,13.598-6.086,13.598-13.598V83.174c0-7.511-6.086-13.598-13.598-13.598    c-7.511,0-13.598,6.086-13.598,13.598v103.342C97.109,194.028,103.195,200.114,110.707,200.114z" />
                        <path style="fill:#ffffff;"
                            d="M165.097,200.114c7.511,0,13.598-6.086,13.598-13.598V83.174c0-7.511-6.086-13.598-13.598-13.598    S151.5,75.663,151.5,83.174v103.342C151.5,194.028,157.586,200.114,165.097,200.114z" />
                    </g>
                </svg>`
}
let computed = []
let root = document.documentElement;
var save = {
	getData: function () {
		return JSON.parse(localStorage.getItem("bezierSaveData"));
	},
	set: function () {
		showSaveData()
		return localStorage.setItem("bezierSaveData", JSON.stringify(saveData));
	},
};
if (!save.getData()) {
	save.set();
} else {
	saveData = save.getData()
}
let colorAlgorithms = [
	'goldenAngle',
	'rainbow',
	'grayscale'
]
function goldenAngle(number) {
	const hue = number * 137.50776405; // use golden angle approximation
	return `hsl(${hue},100%,50%)`;
}

function rainbow(number) {
	return (`hsl(${number * 20},100%,50%)`)
}

function grayscale(number) {
	let newnum = `hsl(0,0%,${number / saveData.data.length * 100}%)`
	return newnum
}
var colors = []

for (let i = 0; i < saveData.data.length; i++) {
	colors.push(window[saveData.settings.colorAlgorithm](i))
}
function toast(msg, theme) {
	let toast = document.createElement('DIV')
	toast.classList.add('toast')
	toast.innerHTML = msg
	toast.classList.add(theme)
	setTimeout(function () {
		toast.classList.add('showing')
		setTimeout(function () {
			toast.classList.remove('showing')
			setTimeout(function () {
				toast.remove()
			}, 500)
		}, 3000)
	})
	document.body.appendChild(toast)
}
let iterationCount = saveData.data.length - 1;
var playing = true;
var canvas = {
	element: $("canvas"),
	context: $("canvas").getContext("2d"),
	clear: function () {
		canvas.context.clearRect(0, 0, canvas.element.width, canvas.element.height);
	},
}
var trail = {
	element: $("canvas2"),
	context: $("canvas2").getContext("2d"),
	clear: function () {
		trail.context.clearRect(0, 0, canvas.element.width, canvas.element.height);
	}
}
var t = 0,
	colorIteration = 1

function addPoint(x, y) {
	colorIteration++
	colors.push(rainbow(colorIteration))
	if (!x) x = 0
	if (!y) y = 0
	saveData.data.push([x, y])
	iterationCount = saveData.data.length - 1;
	initialPoints()
	save.set()
}

function com(easedT) {
	/*This function computes all midpoints for the specified t-value. */
	iterationCount = saveData.data.length - 1;
	computed = [] // Reset computed midpoints
	for (let o = 0; o < iterationCount; o++) computed.push([])
	for (let iNumber = 0; iNumber < iterationCount; iNumber++) { // For each iteration of midpoints:
		for (let point = 0; point < iterationCount - iNumber; point++) {//For each point in the iteration of midpoints:
			if (iNumber === 0) { // If it's the first iteration
				computed[0].push( // Push the linearly interpolated values of the control points to the result
					[lerp(
						saveData.data[point][0],
						saveData.data[point + 1][0],
						easedT
					), lerp(
						saveData.data[point][1],
						saveData.data[point + 1][1],
						easedT
					),
					]
				);
			} else if (iNumber != 0 && point < iterationCount - iNumber) {
				// If it's not the first iteration
				computed[iNumber].push( // Push the linearly interpolated values of the previous linearly interpolated values (creating a linearly interpolated median)
					[
						lerp(
							computed[iNumber - 1][point][0],
							computed[iNumber - 1][point + 1][0],
							easedT
						), lerp(
							computed[iNumber - 1][point][1],
							computed[iNumber - 1][point + 1][1],
							easedT
						)
					]
				)
			}
		}
	}
}
canvas.element.setAttribute('height', window.innerHeight)
canvas.element.setAttribute('width', window.innerWidth)
trail.element.setAttribute('height', window.innerHeight)
trail.element.setAttribute('width', window.innerWidth)
onresize = () => {
	canvas.element.setAttribute('height', window.innerHeight)
	canvas.element.setAttribute('width', window.innerWidth)
	trail.element.setAttribute('height', window.innerHeight)
	trail.element.setAttribute('width', window.innerWidth);
	initialPoints()
}

function point(x, y, rad, col) {
	canvas.context.beginPath();
	canvas.context.arc(x, y, rad, 0, 2 * Math.PI, true);
	canvas.context.closePath();
	if (!col) canvas.context.fillStyle = "#ffffff";
	else canvas.context.fillStyle = col;
	canvas.context.fill();
}

function line(startx, starty, finishx, finishy) {
	canvas.context.beginPath();
	canvas.context.strokeStyle = "#ffffff";
	canvas.context.moveTo(startx, starty);
	canvas.context.lineTo(finishx, finishy);
	canvas.context.stroke(); // Bottom side line
}

function evaluatePlaying() {
	let playbtn = $('quickPlay')
	if (playing === true) window.requestAnimationFrame(advance), ($("playBtn").innerHTML = "Stop"), $('quickPlay').classList.add('playing');
	else window.cancelAnimationFrame(advance), ($("playBtn").innerHTML = "Play"), $('quickPlay').classList.remove('playing');

	if (playbtn.classList.contains('playing')) playbtn.innerHTML = buttonStates.pause
	else playbtn.innerHTML = buttonStates.play

}
evaluatePlaying()
updateCheckboxes()
function replay() {
	if (playing === true) window.cancelAnimationFrame(advance)
	else if (playing === false) window.requestAnimationFrame(advance)
	else window.cancelAnimationFrame(advance)
	t = 0;
	canvas.clear()
	trail.clear()
	playing = true;
	initialPoints()
}

function advance() {
	canvas.clear();
	if (!saveData.settings.ease) saveData.settings.ease = 'quadraticEaseInOut'
	$("speedometer").innerHTML =
		"t=" + window[saveData.settings.ease](t).toFixed(2);
	t += saveData.settings.speed;
	easedT = window[saveData.settings.ease](t);
	com(easedT);
	let final = drawMidPoints();
	drawTrail(final[0], final[1])
	window.cancelAnimationFrame(advance)
	initialPoints();
	if (t >= 1 || playing === false) {
		window.cancelAnimationFrame(advance); playing = false;
		$('playBtn').classList.remove('playing');
		evaluatePlaying()
	}
	else window.requestAnimationFrame(advance)
}

function resetCurve() {
	saveData.data = [
		[331, 351],
		[38, 351],
		[331, 14],
		[38, 14],
	]
	save.set();
}
var mouseIsDown = false;
var dragging = -1,
	draggingPoint = -1;
onmousedown = function () {
	mouseIsDown = true;
};
ontouchstart = function () {
	mouseIsDown = true;
};
onmouseup = function () {
	mouseIsDown = false;
	dragging = -1;
	draggingPoint = -1;
};
onmousemove = function (e) {
	pointHandler(e);
};
ontouchmove = function (e) {
	pointHandler(e.touches[0]);
};

function pointHandler(windowEvent) {
	if (mouseIsDown === true) {
		var x = windowEvent.clientX;
		var y = windowEvent.clientY;
		if (dragging != -1) {
			updatePoint(dragging);
			return;
		}
		for (var i = 0; i < saveData.data.length; i++) {
			if (intersectingPoints(x, y, i) === true) {
				if (dragging == -1) dragging = i
				if (x < 0) break;
				if (y < 0) break;
				if (x > window.innerWidth) break;
				if (y > window.innerHeight) break;
				updatePoint(i)
				break;
			}
		}
	}

	function updatePoint(pointIndex) {
		saveData.data[pointIndex][0] = x;
		saveData.data[pointIndex][1] = y;
		canvas.clear();
		initialPoints();
		save.set();
	}
}

function removePointHandler(evt) {
	var x = evt.clientX;
	var y = evt.clientY;
	var iter = 0
	for (var i = 0; i < saveData.data.length; i++) {
		if (intersectingPoints(x, y, i) === true && saveData.data.length <= 2) {
			toast('You can\'t have less than 2 points', 'info')
			break;
		}
		if (intersectingPoints(x, y, i) === true && saveData.data.length > 2) {
			dragging = i
			saveData.data = arrRemove(saveData.data, saveData.data[i])
			canvas.clear();
			save.set();
			iterationCount = saveData.data.length - 1
			initialPoints()
			dragging = -1
			break;
		} else {
			iter++
			if (i == saveData.data.length - 1 && iter == saveData.data.length - 1) {
				break
			} else if (i == saveData.data.length - 1 && iter == saveData.data.length) {
				addPoint(x, y)
				break
			}
		}
	}
}

function arrRemove(arr, value) {
	var index = arr.indexOf(value);
	if (index > -1) {
		arr.splice(index, 1);
	}
	return arr;
}
canvas.element.ondblclick = e => {
	removePointHandler(e)
}

function intersectingPoints(x, y, i) {
	return ((((x >= saveData.data[i][0] && x <= saveData.data[i][0] + 10) ||
		(x <= saveData.data[i][0] && x >= saveData.data[i][0] - 10)) &&
		((y >= saveData.data[i][1] && y <= saveData.data[i][1] + 10) ||
			(y <= saveData.data[i][1] && y >= saveData.data[i][1] - 10))) ||
		dragging === i)
}

function initialPoints() {
	if (saveData.settings.show.lines == true) {
		for (var i = 0; i < saveData.data.length - 1; i++) {
			line(
				saveData.data[i][0],
				saveData.data[i][1],
				saveData.data[i + 1][0],
				saveData.data[i + 1][1]
			);
		}
	}
	for (var i = 0; i < saveData.data.length; i++) {
		if (saveData.settings.show.controlpoints === true) point(saveData.data[i][0], saveData.data[i][1], 10, colors[i]); // Anchor dots
	}
}

function drawMidPoints() {
	for (let i = 0; i < computed.length; i++) {
		for (let j = 0; j < computed[i].length; j++) {
			let radius = 3
			if (i === computed.length - 1 && saveData.settings.show.finalmidpoint === true) radius = 10
			if (saveData.settings.show.midpoints == true || (radius == 10 && saveData.settings.show.finalmidpoint == true)) {
				point(
					computed[i][j][0],
					computed[i][j][1],
					radius
				)
			}
			if (saveData.settings.show.lines == true) {
				if (j > 0) line(
					computed[i][j][0], computed[i][j][1],
					computed[i][j - 1][0], computed[i][j - 1][1]
				)
			}
			if (i === computed.length - 1) return [computed[i][j][0],
			computed[i][j][1]
			]
		}
	}
}

function drawTrail(x, y) {
	if (saveData.settings.show.trail == false) return
	trail.context.beginPath();
	trail.context.fillStyle = '#ffffff';
	trail.context.arc(x, y, 10, 0, 2 * Math.PI, true);
	trail.context.closePath();
	trail.context.fill();
}
$("easeOption").oninput = function () {
	saveData.settings.ease = $("easeOption").value;
	save.set()
};
$("colorOption").oninput = function () {
	saveData.settings.colorAlgorithm = $("colorOption").value;
	colors = []
	for (let i = 0; i < saveData.data.length; i++) {
		colors.push(window[saveData.settings.colorAlgorithm](i))
	}
	save.set()
};
oninput = e => {
	let target = e.target
	let toChange = target.getAttribute('id')
	saveData.settings.show[toChange] = !saveData.settings.show[toChange]
	save.set()
}

function computeTextColor(bgColor) {
	var color = (bgColor.value.charAt(0) === '#') ? bgColor.value.substring(1, 7) : bgColor.value;
	var r = parseInt(color.substring(0, 2), 16); // hexToR
	var g = parseInt(color.substring(2, 4), 16); // hexToG
	var b = parseInt(color.substring(4, 6), 16); // hexToB
	let final = (((r * 0.299) + (g * 0.587) + (b * 0.114)) > 186) ?
		'black' : 'white';
	if (document.body.classList.contains(final)) return
	else if (final == 'black' && document.body.classList.contains('white')) document.body.classList.remove('white')
	else if (final == 'white' && document.body.classList.contains('black')) document.body.classList.remove('black')
	else document.body.classList.add(final)
	return
}

function updateCheckboxes() {
	for (let i = 0; i < document.querySelectorAll('.showCheckbox').length; i++) {
		let cur = document.querySelectorAll('.showCheckbox')[i]
		let objKey = saveData.settings.show[Object.keys(saveData.settings.show)[i]]
		if (objKey === true) cur.checked = true
		else cur.checked = false
	}
}

function getColorSelectHTML() {
	let res = `<select id="colorOption">
      `
	for (let i = 0; i < colorAlgorithms.length; i++) {
		selected = ''
		if (saveData.settings.colorAlgorithm[i] === colorAlgorithms[i]) selected = 'selected'
		res += `<option value="${colorAlgorithms[i]}" name="${colorAlgorithms[i]}" ${selected}>${colorAlgorithms[i]}</option>
          `
	}
	res += `
      </select>`
	return res
}
$('animationSpeed').value = saveData.settings.speed * 1000
$('colorOptionWrapper').innerHTML = getColorSelectHTML()
/**********************
 * Saving Features
 * Development from:
 * Nov 16 - Nov 18
 **********************/
function showSaveData() {
	let ta = $('saveDataTextarea')
	ta.value = JSON.stringify(saveData)
}
function loadSaveData(element) {
	try {
		var toSave = JSON.parse(element.value)
	} catch (error) {
		toast('Invalid data structure<br><small style="font-weight:200"> ' + error + '</small>', 'error')
		return
	}

	if (toSave.data.length <= 1) return toast('Invalid save code: no data', 'error', 'error')
	for (let i = 0; i < toSave.data.length; i++) {
		if (toSave.data[i].length != 2) return toast('Invalid save code <br><small style="font-weight:200">Data point ' + (i + 1) + ' has invalid coordinates</small>', 'error')
	}
	saveData = toSave
	toast('Successfully loaded save code', 'success')
}

showSaveData()


/*********************
 * Quick Actions!
 ********************/


$('quickPlay').onclick = () => {
	if (t >= 0.99) {
		replay(); window.cancelAnimationFrame(advance)
	} else {
		playing = !playing
		evaluatePlaying()
	}
}