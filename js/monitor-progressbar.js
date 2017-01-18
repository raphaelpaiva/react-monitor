// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/
function createBar(container, value) {
  var bar = new ProgressBar.Circle(container, {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 5,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1000,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#000', width: 5 },
    to: { color: '#F53', width: 5 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
      var value = Math.round(circle.value() * 100);

      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value + '%');
      }

    }
  });
  //bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar.text.style.fontSize = '1rem';

  bar.animate(value);  // Number from 0.0 to 1.0
}
