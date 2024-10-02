// Helper functions for random number generation

// Generate a random number between min and max
function rnd_btw(min, max) {
  return fxrand() * (max - min) + min;
}

// Generate a random number between min and max with exponential distribution
function rnd_btwexp(min, max) {
  return fxrand() ** 2 * (max - min) + min;
}

// Generate a random integer between min and max (inclusive)
function rnd_int(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(fxrand() * (max - min + 1)) + min;
}

// Generate random values for visual parameters
v1 = rnd_int(1, 20);    // Random integer for voronoi cells
k1 = rnd_btwexp(1, 30); // Random value for kaleidoscope effect
n1 = rnd_int(2, 5);     // Random integer for noise scale

// Main visual composition
src(o0)  // Start with the previous frame
  .modulate(  // Apply modulation effect
    osc(9, 0, 2.5)  // Create oscillator pattern
      .modulate(noise(10).diff(shape(3)), 3)  // Modulate with noise and shape difference
      .brightness(-1.5),  // Adjust brightness
    0.003  // Modulation amount
  )
  .layer(  // Add a layer on top
    osc(Math.PI * 8, 0.1, 2)  // Create another oscillator pattern
      .mask(voronoi(v1, 0.1, 0.02))  // Apply voronoi mask
  )
  .modulateRotate(  // Apply rotation modulation
    noise(n1, 0.06),  // Use noise for rotation
    () => a.fft[0]  // Use audio input to control rotation intensity
  )
  .kaleid(k1)  // Apply kaleidoscope effect
  .colorama(0.00001)  // Shift colors slightly
  .hue(0.003)  // Adjust hue
  .out();  // Output the final result
