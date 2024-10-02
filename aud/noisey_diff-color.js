// Create an oscillator with a frequency of 5
osc(5)
  // Add noise to the oscillator, scaled by the 3rd FFT bin value
  .add(noise(3, 2), () => a.fft[2])
  // Rotate the result, modulated by scaled Voronoi noise
  .modulateRotate(noise(0.8).modulateScale(voronoi(5)))
  // Set the base color to blue (0, 0, 3)
  .color(0, 0, 3)
  // Apply a colorama effect with a value of 0.34
  .colorama(0.34)
  // Output the result to the main buffer
  .out();
