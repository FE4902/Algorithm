const solution = (sizes) => {
  const w = [];
  const h = [];
  const array = [...sizes].map(v => [...v].sort((a, b) => a - b));

  array.forEach(v => {
    w.push(v[0]);
    h.push(v[1]);
  });

  return Math.max(...w) * Math.max(...h);
}