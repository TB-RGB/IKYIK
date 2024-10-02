// Generate noise based on cosine of time
noise(() => Math.cos(time) + 1 / 7.638, 0.781, 0.01)
  // Repeat the pattern vertically, influenced by audio FFT
  .repeatY(
    6.625,
    3,
    () => a.fft[0] * 0.908,
    () => a.fft[1] * 0.046
  )
  // Rotate the pattern
  .rotate(0.456, 0.017)
  // Add a difference blend with previous frame, apply luma and invert
  .add(src(o1).diff(o0).luma(0.1, 0.1).invert(0.2))
  // Modulate with the previous frame
  .modulate(o1, 0.05)
  // Apply color shifting
  .colorama(0)
  // Output to buffer o0
  .out(o0);

// Create a separate oscillator pattern
osc(40, 0.077, 0.9)
  // Set color
  .color(0.278, 0, 9.736)
  // Modulate scale with another oscillator
  .modulateScale(osc(10).rotate(1, 0.53))
  // Scroll vertically
  .scrollY(1, 0.114)
  // Output to buffer o1
  .out(o1);

// Render the final output from buffer o0
render(o0);
