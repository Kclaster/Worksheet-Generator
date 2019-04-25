//Done
const slopeIntercept = (min_size, max_size) => {
  equation = [];
  m = min_size;
  b = min_size;
  x = min_size;
  y = m * x + b;
  while (m <= max_size) {
    while (x <= max_size) {
      while (b <= max_size) {
        y = m * x + b;
        if (y % 1 === 0 && y <= max_size && y >= min_size) {
          let max = Math.max(y, m, b, x, y);
          let min = Math.min(y, m, b, x, y);
          if (b >= 0) {
            equation.push([`${m}(x) = ${y} - ${b} `, 'x = ' + x, max, min]);
          } else {
            abs_b = Math.abs(b);
            equation.push([`${m}(x) = ${y} + ${abs_b} `, 'x = ' + x, max, min]);
          }
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

module.exports = slopeIntercept(-30, 30);
