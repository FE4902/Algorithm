function solution(s) {
    const array = [];
    
    for(let i of s.split(' ')){
        array.push([...i].map((v, i) => i === 0 ? v.toUpperCase() : v.toLowerCase()).join('')); 
    }
    
    return array.join(' ');
}