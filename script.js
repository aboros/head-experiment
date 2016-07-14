$('#drupglass').click(function() {
  smile();
  eyebrowsDown();
});

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
