// Define a custom GLSL function for repeating and offsetting coordinates
setFunction({
  name: "repeat2",
  type: "coord",
  inputs: [
    { type: "float", name: "repeatX", default: 3 },
    { type: "float", name: "repeatY", default: 3 },
    { type: "float", name: "offsetX", default: 0 },
    { type: "float", name: "offsetY", default: 0 },
  ],
  glsl: `   vec2 st = _st * vec2(repeatX, repeatY);
     st.x += step(1., mod(st.y,2.0)) * offsetX;
     st.y += step(1., mod(st.x,2.0)) * offsetY;
     return st;`,
});

// Function to create frequency multiplication effect using standard repeat
freqmult = function (tex, harmonics = 2) {
  x = tex();
  for (i = 2; i <= harmonics; i++) x = x.layer(tex().repeat(i, i));
  return x;
};

// Function to create frequency multiplication effect using custom repeat2
freqmult2 = function (tex, harmonics = 2) {
  x = tex();
  for (i = 2; i <= harmonics; i++) x = x.layer(tex().repeat2(i, i)); // Uses custom repeat2 function
  return x;
};

// Example usage of freqmult2
freqmult2(
  () =>
    osc(5, 0.1, 2)
      .rotate()
      .modulate(voronoi(5), () => a.fft[0])
      .luma(0.6, -0.1),
  8
) // Using 8 harmonics
  .out();

// Example usage of freqmult
freqmult(
  () =>
    osc(5, 0.1, 2)
      .rotate(0, 0.1)
      .kaleid(14)
      .modulate(shape(3), () => a.fft[0])
      .luma(0.6, -0.1),
  5
) // Using 5 harmonics
.out();

// Global speed variable (unused in this snippet)
speed = 3;
