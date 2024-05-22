const solution = (s) => {
    const obj = {
        'zero': 0,
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9,
    }
    
    for(let i of Object.entries(obj)){
        s = s.replaceAll(i[0], i[1])
    }

    return Number(s);
}