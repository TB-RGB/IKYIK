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
  o0.setMode('linear')
  fps = 30

  voronoi(8, 1, 5)
    .blend(osc(10, 0.1, 0.8))
    .modulate(noise(3, 0.1).pixelate(50, 50))
    .color(0.9, 0.9, 0.9)
    .contrast(1.2)
    .modulateScale(osc(6, 0.2, 0))
    .blend(src(o0), 0.7)
    .scale(1.01)
    .out()
  // Set the canvas image rendering style to 'auto'
  document.getElementsByTagName('canvas')[0].style['imageRendering'] = 'auto'

})().catch((err) => log(err.message, 'log-error'))
