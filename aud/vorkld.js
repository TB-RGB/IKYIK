// Helper functions for random number generation
function rnd_btw(min, max) {
  return fxrand() * (max - min) + min;
} // Random float between min and max
function rnd_btwexp(min, max) {
  return fxrand() ** 2 * (max - min) + min;
} // Random float with exponential distribution
function rnd_int(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(fxrand() * (max - min + 1)) + min;
} // Random integer between min and max

// Generate random values for speed and color
spd1 = rnd_int(1, 10); // Random integer between 1 and 10 for oscillator speed
clr1 = rnd_btw(0.0001, 0.0006); // Random float between 0.0001 and 0.0006 for colorama effect

// Main visual composition
src(o0) // Start with the previous frame
  .modulateScale(voronoi(10, 0.5), () => a.fft[0]) // Modulate scale using Voronoi noise, affected by low frequencies
  .layer(
    // Add a layer on top
    osc(1.0, spd1, () => a.fft[1] * 5) // Oscillator with random speed, modulated by mid-low frequencies
      .mask(shape(8).repeat(2)) // Apply an 8-sided shape mask, repeated twice
      .modulateScale(noise(3), () => a.fft[1] * 3), // Modulate scale of the masked oscillator using noise
    () => a.fft[1] // Layer blending amount controlled by mid-low frequencies
  )
  .colorama(clr1) // Apply colorama effect with random intensity
  .diff(noise(0.4), () => a.fft[2]) // Create difference with noise, affected by mid-high frequencies
  .scrollX(() => math.cos(a.time * 0.1) * 0.5) // Scroll horizontally based on cosine of time
  .out(o0); // Output to buffer o0
