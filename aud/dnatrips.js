// Set the number of FFT bins to 8
a.setBins(8);

osc(50, 0.01, 2.13)  // Create a base oscillator with frequency 50, sync 0.01, and offset 2.13
  .rotate(0, 0.1)    // Rotate the oscillator
  .mult(             // Multiply with a modulated oscillator
    osc(10, 0.1).modulateScale(osc(10).rotate(0, -0.101), 1)
  )
  .diff(noise(0.4))  // Apply difference blend with noise
  .color(0.38, 0.21, 0.29)  // Set RGB color
  .modulate(         // Modulate with noise
    noise(0.5).modulate(osc(1.0).modulateScale(noise(3.4)))
  )
  .colorama(() => a.fft[7] * 5)  // Apply colorama effect based on FFT bin 7
  .modulateScale(    // Modulate scale with complex noise pattern
    noise(0.73).diff(osc(0.5).modulatePixelate(osc(10))),
    () => a.fft[0] * 6  // Scale amount based on FFT bin 0
  )
  .modulateScale(    // Further modulate scale with gradient
    gradient(1.0),
    () => a.fft[3]   // Scale amount based on FFT bin 3
  )
  .scale(0.68)       // Scale the entire output
  .out(o0);          // Output to buffer o0
