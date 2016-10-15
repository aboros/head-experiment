// Set timeline for moving right eyebrows down
var eyeBrowRightDown = new TimelineMax();
eyeBrowRightDown.add(TweenMax.to("#eyebrow-right .eyebrow-inner", 0.5, {rotation:"35deg", x: "+=40px", transformOrigin: "right top"}), 0);
eyeBrowRightDown.add(TweenMax.to("#eyebrow-right .eyebrow-outer", 0.5, {rotation: "-15deg", x: "-=40px", transformOrigin: "left top"}), 0);
eyeBrowRightDown.add(TweenMax.to("#eyebrow-right", 0.5, {rotation: "-8deg", x: "+=40px", y: "+=100px", transformOrigin: "center center"}), 0);

// Set another timeline for straighten the moustache
var moustacheStraighten = new TimelineMax();
moustacheStraighten.add(TweenMax.to("#moustache-left", 0.5, {rotation: "4deg", x: "+=15", y: "+=2", transformOrigin: "right top"}), 0);
moustacheStraighten.add(TweenMax.to("#moustache-right", 0.5, {rotation: "-5.5deg", transformOrigin: "left top"}), 0);

// ScrollMagic fun.
// init controller
var controller = new ScrollMagic.Controller();

// setup pin

/* setPin is buggy on iOS safari for some reason. Examples page produces same bug, so hm.. dunno.

var pin = new ScrollMagic.Scene({triggerElement: "#screen-1", triggerHook: 0.85, duration: "150%"})
.setPin("#logo")
.addIndicators({name: "pin logo"}) // add indicators (requires plugin)
.addTo(controller);
*/

// Setup a zoom on logo
var zoom = new ScrollMagic.Scene({triggerElement: "#screen-1", triggerHook: "onLeave"})
  .setTween("#logo", 0.5, {scale: 1.6, rotation: "6deg", ease: Elastic.easeOut})
  .addIndicators({name: "zoom logo"}) // add indicators (requires plugin)
  .addTo(controller);

var eyeBrowScene = new ScrollMagic.Scene({triggerElement: "#screen-2", triggerHook: 0.75, duration: 150})
  .setTween(eyeBrowRightDown)
  .addIndicators({name: "eyebrows"})
  .addTo(controller);

var moustacheScene = new ScrollMagic.Scene({triggerElement: "#screen-2", triggerHook: 0.75, duration: 50})
  .setTween(moustacheStraighten)
  .addIndicators({name: "moustache"})
  .addTo(controller)
