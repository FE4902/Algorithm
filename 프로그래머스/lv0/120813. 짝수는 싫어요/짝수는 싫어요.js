function solution(n) {
  return Array(n).fill().map((_, i) => i + 1).filter((num) => num % 2 !== 0);
}