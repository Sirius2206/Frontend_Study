let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
.to('.rock', 2, {y: -300})
.to('.girl', 3, {y: -200}, '-=2')
.fromTo('.bg1', 4, {y: -50}, {y: 00}, '-=3')
.to('.content', 3, {top: '0%'}, '-=4')

let scene = new ScrollMagic.Scene({
  triggerElement: 'section',
  duration: "200%",
  triggerHook: 0,
})

.setTween(timeline)
.setPin('section')
.addTo(controller)
