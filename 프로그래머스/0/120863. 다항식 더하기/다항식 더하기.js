const solution = (polynomial) => {
    const terms = polynomial.split(' + ');

    let xSum = 0;
    let numSum = 0;

    terms.forEach(term => {
        if (term.includes('x')) {
            const coefficient = term === 'x' ? 1 : parseInt(term.replace('x', '')) || 1;
            xSum += coefficient;
        } else {
            numSum += parseInt(term);
        }
    });

    let result = [];
    if (xSum !== 0) {
        result.push(xSum === 1 ? 'x' : `${xSum}x`);
    }
    if (numSum !== 0) {
        result.push(`${numSum}`);
    }

    return result.join(' + ');
}