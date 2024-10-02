// Set the global speed variable
speed = 0.27;

// Start with a base oscillator
osc(48, -0.1, 0)
  // Apply threshold effect
  .thresh([0.3, 0.37].fast(0.861), 0)
  // Set the base color
  .color(0.746, 0, 1)
  // Add another layer
  .add(
    // Second oscillator
    osc(28, 0.1, 0.923)
      // Apply threshold effect, using audio input
      .thresh([0.3, 0.7].fast(0.75), () => a.fft[2] * 3)
      // Rotate the pattern
      .rotate(3.14 / 4)
      // Set color for this layer
      .color(1, 0, 0)
      // Modulate the scale using another oscillator
      .modulateScale(
        osc(32.401, -0.008, 0.091).thresh([0.3, 0.7].fast(0.75), 0)
      )
  )
  // Apply difference blend mode with another layer
  .diff(
    // Third oscillator
    osc(28, 0.071, 0.903)
      // Apply threshold effect
      .thresh([0.3, 0.908].fast(0.488), 0.296)
      // Rotate the pattern
      .rotate(3.14 / 2)
      // Set color for this layer
      .color(1, 0.394, 1.306)
      // Modulate the scale using another oscillator
      .modulateScale(osc(64, -0.01, 0).thresh([0.412, 1.004].fast(0.336), 0.5))
  )
  // Modulate rotation of the entire composition
  .modulateRotate(
    osc(54, -0.005, 0.647).thresh([0.575, 0.7].fast(0.021), 0.877)
  )
  // Modulate scale of the entire composition
  .modulateScale(osc(44, -0.02, 0.944).thresh([0.3, 0.7].fast(0.25), 0))
  // Apply colorama effect with a time-based sine wave
  .colorama(() => Math.sin(time / 27) * 0.01222 + 9.89)
  // Scale the final output
  .scale(2.122)
  // Render the output
  .out();
