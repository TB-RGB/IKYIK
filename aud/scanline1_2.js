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

  // Set the rendering mode to 'linear'
  o0.setMode('linear')
  // Set frames per second
  fps = 30

  // Complex chain of visual effects using Hydra Synth functions
  osc(20, 0.03, 0.2).modulateScale(noise(2))
    .hue()
    .modulate(osc(10).modulateRotate(noise(.8), ()=>a.fft[3]), ()=>a.fft[3])
    .rotate(0.4)
    .diff(src(o0).thresh(0.8).luma(1.5).mult(osc(20).modulate(osc(1.4))))
    .rotate(0.2)
    .modulate(o0, 0.0063)
    .scale(1.2)
    .add(src(o0).rotate(-0.02).luma(0.4), 0.14)
    .sub(solid(0.84, 0.84, 0.4))
    // .color(1.24, 0.4, -11)  // Commented out color adjustment
    .colorama(()=>a.fft[0])
    // .scale(0.9)  // Commented out scaling
    .out()

  // Uncomment to set a specific resolution
  // setResolution(680,480)

  // Set the canvas image rendering style to 'auto'
  document.getElementsByTagName('canvas')[0].style['imageRendering'] = 'auto'

})().catch((err) => log(err.message, 'log-error'))
