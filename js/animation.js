let creative = {};
let delayFrame = 4;


function init() {
	console.log("Ad Ready");
	addEventListeners();
	creative.viewport = document.getElementById('mainExit');
	creative.isi_height = document.getElementById('isi-copy').offsetHeight;
	scrollSpeed = creative.isi_height / 10;
	gsap.set(['#viewport', '#border'], { autoAlpha: 1 });
	frameOne();
}

function frameOne() {
	
	
	gsap.set(['.f1', '.gl', '.isi'], { autoAlpha: 1 });

	const tl = gsap.timeline({});
	tl
		// .from(['#gl-background'], {duration:2, scale:1.1, ease:"power2.out", transformOrigin:"231px 78px"})
		.from(['#f1-flashes-bg'], { duration: 2, stagger: 0.1, opacity: 0, scale: 1.1 })
		.from(['#gl-logo', '#gl-logo2', '#clickTag3'], { duration: 1, stagger: 0.8, opacity: 0, x: -100 }, 0)
		.from(['#f1-copy', '#isi-con'], { duration: 0.5, stagger: 0.3, y: -20, opacity: 0 }, '-=1.5')

	gsap.delayedCall(delayFrame, frameTwo);
	gsap.to(['.f1'], { delay: delayFrame, opacity: 0 });
}

function frameTwo() {
	gsap.set(['.f2', '.gl', '.isi'], { autoAlpha: 1 });

	const tl = gsap.timeline({});
	tl

	    .from(['#f5alt'], { duration: 4, stagger: 0.1, opacity: 0 })
		.from(['#f2-flashes-bg'], { duration: 2, stagger: 0.1, opacity: 0, scale: 1.1 })
		.from(['#f2-copy'], { duration: 0.5, stagger: 0.8, y: -20, opacity: 0 }, 0)
		.to(['#f1-flashes-bg'], { duration: 1, stagger: 0.1, opacity: 0, scale: 1.1 }, 0);


	gsap.delayedCall(delayFrame, frameThree);
	gsap.to(['.f2', '#gl-logo'], { delay: delayFrame, opacity: 0 });
}

function frameThree() {
	gsap.set(['.f3', '.gl', '.isi'], { autoAlpha: 1 });

	const tl = gsap.timeline({});
	tl  

	
	.from(['#f3-flashes-bg'], { duration: 2, stagger: 0.1, opacity: 0, scale: 1.1 })
	.from(['#f3-copy', '#clickTag3'], { duration: 0.8, stagger: 0.8, y: -20, opacity: 0 }, 0)
	.to(['#f3-flashes-bg'], { duration: 1, stagger: 0.1, opacity: 0, scale: 1.1 }, 0);
	
		

	gsap.delayedCall(delayFrame, frameFour);
	gsap.to(['.f3', '#gl-logo'], { delay: delayFrame, opacity: 0 });
}



function frameFour() {
	gsap.set(['.f4', '.gl', '.isi'], { autoAlpha: 1 });

	const tl = gsap.timeline({});
	tl
		.from(['#f4-bg'],  { duration: 2.5, stagger: 0.1, opacity: 0, scale: 1.1 })
		.from(['#f4-logo'], { duration: 1, stagger: 0.3, opacity: 0, x: -100 }, 0)
		.from(['#f4-copy', '#f4-copy2'], { duration: 0.8, ease: "power2.out", x: 545, opacity: 0 }, '=-0.5')

	ISIscroll();
}

// ISI Scroll
function ISIscroll() {
	gsap.delayedCall(1, timelineBegin);
	var timer = gsap.timeline();
	isiAnim = gsap.timeline()
	ISI = document.getElementById('isi-copy-con');
	timer.play();

	function timelineBegin() {
		isiAnim.to('#isi-copy-con', { duration: 1, scrollTo: { y: "+=10" }, ease: "none", repeat: scrollSpeed, repeatRefresh: true, z: 0.1, rotationZ: 0.01, force3D: true });
	}

	ISI.addEventListener('mouseover', mouseInner, false);
	function mouseInner() {
		ISI.removeEventListener('mouseover', mouseInner, false); timer.pause(); isiAnim.clear(); ISI.addEventListener('mouseout', mouseOuter, false); function mouseOuter() { ISI.addEventListener('mouseover', mouseInner, false); timer.play(); var currentTime = timer.totalTime(); if (currentTime < scrollSpeed - 1) { timelineBegin(); } }
	}
}

function addEventListeners() {
	function mainExitHandler(e) { Enabler.exit('MainExit'); }
	function vaersExitHandler(e) { Enabler.exit('clickTag2'); }
	function PIExitHandler(e) { Enabler.exit('clickTag3'); }
	document.getElementById('mainExit').addEventListener('click', mainExitHandler, false);
	document.getElementById('clickTag2').addEventListener('click', vaersExitHandler, false);
	document.getElementById('clickTag3').addEventListener('click', PIExitHandler, false);
}