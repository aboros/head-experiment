$('#drupglass').click(function() {
  smile();
  eyebrowsDown();
});

// Do a "smile" with velocityjs
function smile() {
  $('#moustache-left')
  .velocity({
    rotateZ: "4deg",
    translateY: "+=2",
    translateX: "+=15"
  }, {
    duration: 900,
    easing: "ease-out"
  })
  .velocity('reverse', {delay: 400, duration: 400});
  $('#moustache-right')
  .velocity({
    rotateZ: "-5.5deg",
  }, {
    duration: 900,
    easing: "ease-out"
  })
  .velocity('reverse', {delay: 400, duration: 400});
}

// Move eyebrows down with velocityjs
function eyebrowsDown() {
  $('#eyebrow-right .eyebrow-inner')
  .velocity({
    rotateZ: "35deg",
    translateX: "+=40px"
  }, {
    duration: 100,
    easing: "ease-in-out"
  })
  .velocity('reverse', {delay: 1100, duration: 500});
  $('#eyebrow-right .eyebrow-outer')
  .velocity({
    rotateZ: "-15deg",
    translateX: "-=40px",
  }, {
    duration: 100,
    easing: "ease-in-out"
  })
  .velocity('reverse', {delay: 1100, duration: 500});
  $('#eyebrow-right')
  .velocity({
    translateX: "+=40px",
    translateY: "+=80px",
    rotateZ: "-8deg"
  }, {
    duration: 200
  })
  .velocity('reverse', {delay: 1000, duration: 600});
}

// Try some mimic with gsap
// Superbasic eyebrow rotation
var tween = new TweenMax.to('#eyebrow-right .eyebrow-inner', 0.5, {rotation:"35deg", x: "+=40px", transformOrigin: "right top"});

// Combine multiple things into one object
var eyeBrowRightTimeline = new TimelineMax({});
eyeBrowRightTimeline.add(tween, 0);
eyeBrowRightTimeline.add(TweenMax.to("#eyebrow-right .eyebrow-outer", 0.5, {rotation: "-15deg", x: "-=40px", transformOrigin: "left top"}), 0);
eyeBrowRightTimeline.add(TweenMax.to("#eyebrow-right", 0.5, {rotation: "-8deg", x: "+=40px", y: "+=80px",transformOrigin: "center center"}), 0);

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
var zoom = new ScrollMagic.Scene({triggerElement: "#screen-2", offset: "50px"})
  .setTween("#logo", 0.5, {scale: 1.4, rotation: "12deg"})
  .addIndicators({name: "zoom logo"}) // add indicators (requires plugin)
  .addTo(controller);

var gsapTest = new ScrollMagic.Scene({triggerElement: "#screen-2", duration: 50})
  .setTween(eyeBrowRightTimeline)
  .addIndicators({name: "gsapTest yeah"})
  .addTo(controller);
