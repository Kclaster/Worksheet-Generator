//Done
const slopeIntercept = (min_size, max_size, answer) => {
  equation = [];
  m = min_size;
  b = min_size;
  x = min_size;
  y = m * x + b;
  count = 0;
  while (m <= max_size) {
    while (x <= max_size) {
      while (b <= max_size) {
        y = m * x + b;
        if (
          y % 1 === 0 &&
          y <= max_size &&
          y >= min_size &&
          m !== 0 &&
          x === answer &&
          count < 3
        ) {
          let max = Math.max(y, m, b, x, y);
          let min = Math.min(y, m, b, x, y);
          if (b >= 0) {
            equation.push([`${y} - ${b} = ${m}x`, max, min, x, 'x = ' + x]);
          } else {
            abs_b = Math.abs(b);
            equation.push([`${y} + ${abs_b} = ${m}x`, max, min, x, 'x = ' + x]);
          }
          count++;
        }
        b++;
      }
      b = min_size;
      x++;
    }
    x = min_size;
    b = min_size;
    m++;
  }
  return equation;
};

module.exports = slopeIntercept;
