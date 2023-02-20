function solution(s){
    const SArray = s.split('');
    const PArray = SArray.filter(v => v.toLowerCase() === 'p');
    const YArray = SArray.filter(v => v.toLowerCase() === 'y');
    return PArray.length === YArray.length ? true : false;
}