function solution(s) {
    const lower = [...s].filter(v => v === v.toLowerCase()).sort((a, b) => b.localeCompare(a));
    const upper = [...s].filter(v => v === v.toUpperCase()).sort((a, b) => b.localeCompare(a));
    
    return [...lower, ...upper].join('');
}