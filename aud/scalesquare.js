src(o0)
  .modulateScale(osc(6, 0.5).modulateRepeatY(noise(1.8)), () => a.fft[2])
  .diff(
    osc(30, 0.1, [1.84, 0.5, 3]).mask(
      shape(4, 0.3, 0)
        .repeat(6)
        .rotate(8)
        // ? ()=>a.fft[x] is how you activate audio reactivity, x is 0 thru 3 and defines the sensitivity of the audio reactivity
        .modulateScrollY(osc(50), () => a.fft[2])
    )
  )
  .color(1.24, 1, -1.1)
  .out(o0);
