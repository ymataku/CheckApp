const isValid = (s) => {
    let purification = [];
    for(let i in s){
        switch(s[i]){
            case '(':
                purification.push(1); break;
            case ')':
                purification.push(-1); break;
            case '[':
                purification.push(2); break;
            case ']':
                purification.push(-2); break;
            case '{':
                purification.push(3); break;
            case '}':
                purification.push(-3); break;
            default:
                continue;
        }
    }
    for(let i=0;i<s.length/2;i++) if(i%2 == purification.lastIndexOf(-purification[i])%2) return false;
    
    return true;
};
    
    let s="()";
    console.log(isValid(s)); 
    
    s="([]){}"
    console.log(isValid(s)); 
    
    s="([]){[{}][}]"
    console.log(isValid(s)); 

    s="({{)}}";
    console.log(isValid(s));
     

    