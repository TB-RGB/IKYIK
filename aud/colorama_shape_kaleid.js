// Start with the previous frame
src(o0)
  // Modulate the scale based on noise and audio input
  .modulateScale(noise(0.64).modulateScale(osc(30)), () => a.fft[0])
  // Layer a new element on top
  .layer(
    // Create an oscillator
    osc(8.3, 0.5, 1.8).mask(
      // Create a shape (triangle, septagon, or triangle) as a mask
      shape([4, 7, 3], 0.46)
        // Commented out kaleidoscope effect
        // .modulateKaleid(noise(0.8))
        // Modulate the shape based on another oscillator and audio input
        .modulate(osc(10), () => a.fft[0])
    )
  )
  // Apply a subtle color shift
  .colorama(0.0004)
  // Output to buffer o0
  .out(o0);
