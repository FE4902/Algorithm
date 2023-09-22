function solution(intStrs, k, s, l) {
    return intStrs.map(v => parseInt([...v].splice(s, l).join(''))).filter(v => v > k);
}