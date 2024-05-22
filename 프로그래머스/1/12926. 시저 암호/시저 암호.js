const solution = (s, n) => {
    const ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    return [...s].map(v => {
        if(v === ' ') return v;
        const index = (ALPHA.indexOf(v.toUpperCase()) + n) % ALPHA.length;

        if(v === v.toUpperCase()){
            return ALPHA[index];
        } else{
            return ALPHA[index].toLowerCase();
        }
    }).join('');
}