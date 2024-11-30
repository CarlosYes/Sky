const colorArray = [
  'lightgrey',
  'white',
  'rgb(224, 224, 224)',
]

gsap.fromTo('.snow circle', {
  attr: {
    cx: 0,
    cy: 'random(0, 200)',
    r: 'random(0, 4)'
  },
  x: 'random(0, 1300)',
  y: -250,
  fill: gsap.utils.wrap(colorArray)
}, {
  duration: 'random(3, 7)',
  y: 400,
  ease: 'none',
  stagger: {
    each: 2,
    repeat: -1,
    repeatRefresh: true,
  }
}).seek(100);

let t1 = gsap.timeline();

t1
.fromTo('h1', {
   x: '1500',
   y: '-50',
   autoAlpha: 0
}, {
  duration: 1.5,
  y: '-50',
  x: 0,
  autoAlpha: 1,
  ease: Back.easeOut.config(1.5)
})
.fromTo('#man', {
  xPercent: -100,
  y: '-50',
  autoAlpha: 1,
}, {
  duration: 8,
  y: '-50',
  xPercent: 100,
  repeat: -1,
  repeatDelay: 2, 
  autoAlpha: 1,
  ease: "slow(0.7, 0.7)"
})
.fromTo('#reverseMan', {
  scaleX: -1,
  xPercent: 100,
  y: '-50',
  autoAlpha: 1,
}, {
  duration: 9,
  y: '-50',
  xPercent: -100,
  repeat: -1,
  repeatDelay: 3, 
  autoAlpha: 1,
  ease: "slow(0.7, 0.7)"
});

gsap.to("h1", { 
  duration: 2,
  delay: 2,
  autoAlpha: 0
});

gsap.to('.right-leg', {
  transformOrigin: '15% 10px',
  rotation: 40,
  repeat: -1,
  yoyo: true,
  ease: Sine.easeInOut,
  duration: 0.9,
  delay: 1
});

gsap.to('.left-leg', {
  transformOrigin: '85% 10px',
  rotation: -40,
  repeat: -1,
  yoyo: true,
  ease: Sine.easeInOut,
  duration: 0.7,
});