const isValid = (s) => {
    let s_Number = [];

    //括弧を抽出し、それぞれを数字に変換して格納。
    for(let i in s){
        switch(s[i]){
            case '(': s_Number.push(1); break;
            case ')': s_Number.push(-1); break;
            case '[': s_Number.push(2); break;
            case ']': s_Number.push(-2); break;
            case '{': s_Number.push(3); break;
            case '}': s_Number.push(-3); break;
            default: break;
        }
    }

    //同じ鍵括弧で閉じられているか判別
    let Sum = s_Number.reduce((a,b)=>{
        return a + b;
    })
    if(Sum != 0) return false;

    //括弧が開いた順に閉じられているか判別。
    for(let i=0;i<s.length/2;i++) if(i%2 == s_Number.lastIndexOf(-s_Number[i])%2) return false;
    
    return true;
};

let s = '()';
console.log(isValid(s)); 

s="([]){}"
console.log(isValid(s));

s = '({)}'
console.log(isValid(s)); 
    

