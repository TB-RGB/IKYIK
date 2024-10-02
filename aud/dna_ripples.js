// ? a.setBins(8) sets the number of bins for the audio reactivity, default is 4
a.setBins(8);

osc(100, 0.01, 2.13)
  .color(1.24, 1.4, -1.1)
  .rotate(0, 0.1)
  .mult(osc(1.0, 0.1).modulateScale(osc(10).rotate(0, -0.101), 1))
  .diff(noise(0.4))
  .color(0.38, 0.21, 0.29)
  .modulateKaleid(osc(2.5).modulatePixelate(noise(1.0).modulateScale(osc(3.4))))
  // ? ()=>a.fft[x] is how you activate audio reactivity, x is 0 thru 3 (bins = 4), or more if you set more bins, and defines the sensitivity of the audio reactivity
  .colorama(() => a.fft[7] * 5)
  .modulateScrollX(
    noise(0.73).diff(voronoi(1.5).modulate(osc(10)), () => a.fft[0])
  )
  .out(o0);
