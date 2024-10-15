;(async () => {
  // Extend the o0 object's prototype to include a setMode function
  o0.constructor.prototype.setMode = function (mode = 'nearest') {
    // Ensure mode is either 'nearest' or 'linear'
    mode == 'nearest' ? mode : mode == 'linear' ? mode : 'nearest'
    // Create two framebuffers with specified texture settings
    this.fbos = Array(2)
      .fill()
      .map(() =>
        this.regl.framebuffer({
          color: this.regl.texture({
            mag: mode,
            min: mode,
            width: width,
            height: height,
            format: 'rgba',
          }),
          depthStencil: false,
        }),
      )
  }
   o0.setMode('nearest')
  fps = 30

  shape(3, 0.5, 0.001)
    .rotate(0.1, 0.1)
    .kaleid(5)
    .color(0.5, 0.3, () => Math.sin(time * 0.1) * 0.5 + 0.5)
    .mult(osc(20, 0.01, 1).hue(0.5))
    .modulate(src(o0), 0.05)
    .scale(1.01)
    .diff(src(o0).rotate(0.01).scale(0.99))
    .out()
  // Set the canvas image rendering style to 'auto'
  document.getElementsByTagName('canvas')[0].style['imageRendering'] = 'auto'

})().catch((err) => log(err.message, 'log-error'))
