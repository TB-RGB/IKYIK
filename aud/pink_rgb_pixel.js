// Set the number of frequency bins for audio analysis
a.setBins(8)

// Create a base oscillator pattern
osc(13.0, 0.03, 1.7)
  // .invert()  // Commented out inversion effect
  // .color(255,16,240, 1)  // Commented out bright pink color
  .color(0.73, .6, 0.4, 0.1)  // Apply a soft, semi-transparent beige color
  .rotate(3, 0.3)  // Rotate the pattern
  .pixelate(0.2)  // Apply pixelation effect
  .scale(0.974)  // Slightly scale down the pattern
  .modulatePixelate(
    voronoi(10.4)  // Create a voronoi pattern
      .modulateKaleid(  // Modulate with kaleidoscope effect
        voronoi(0.4),  // Another voronoi pattern
        () => a.fft[0]  // Modulate based on the first frequency bin
      )
      .modulateScrollX(  // Scroll the pattern horizontally
        osc(13),
        () => a.fft[0]  // Modulate scrolling based on the first frequency bin
      ),
    () => a.fft[3] * 8  // Modulate pixelation based on the fourth frequency bin
  )
  .modulateScale(  // Modulate the scale
    noise(1.5, 0.13),
    () => a.fft[0] * 7  // Scale modulation based on the first frequency bin
  )
  .modulateScale(  // Another scale modulation
    o0,  // Use the output buffer as source
    () => a.fft[6] * 1.5  // Modulate based on the seventh frequency bin
  )
  .luma(-1)  // Apply luma effect (inverted)
  .invert(() => a.fft[6])  // Invert colors based on the seventh frequency bin
// .hush()  // Commented out hush effect
  .out(o0)  // Output the result to buffer o0