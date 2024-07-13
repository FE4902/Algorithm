function solution(id_pw, db) {
    const ID = db.filter(v => {
       return v[0] === id_pw[0];
    });
    
    if(!ID.length) {
        return 'fail'
    }
    
    if(ID[0][1] !== id_pw[1]) {
        return 'wrong pw'
    }
    
    return 'login';
}