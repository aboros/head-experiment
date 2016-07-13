$('#drupglass').click(function() {
  console.log('drupglass clicked');
  $('#eyebrow-left')
  .velocity({rotateZ: "-30deg", transformOriginX: "50%", transformOriginY: "50%"}, {duration: 200, easing: "ease-out"})
  .velocity('reverse', {delay: 400});
});
