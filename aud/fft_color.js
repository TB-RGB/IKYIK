// Set the number of frequency bins for audio analysis
a.setBins(8);

// Create a visual output
osc(30, 0.1, () => a.fft[7] * 5)  // Oscillator with frequency 30, time 0.1, and amplitude based on the highest frequency bin
  .modulate(  // Apply modulation to the oscillator
    noise(3)  // Create noise with scale 3
      .modulatePixelate(  // Apply pixelation modulation to the noise
        noise(13).pixelate(8, 8),  // Create another noise (scale 13) and pixelate it
        1024,  // Number of pixels
        8  // Pixelation amount
      ),
    () => a.fft[1]  // Modulation amount based on the second lowest frequency bin
  )
  .out(o0);  // Output the result to the main buffer
