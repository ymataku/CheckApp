const isValid = (s) => {
    let purification = []
    for(let i in s){
        if(s[i] == '('){
            purification.push(1)
        }else if(s[i] == ')'){
            purification.push(-1)
        }else if(s[i] == '['){
            purification.push(2)
        }else if(s[i] == ']'){
            purification.push(-2)
        }else if(s[i] == '{'){
            purification.push(3)
        }else if( s[i] == '}'){
            purification.push(-3)
        }
    }
    for(let i=0;i<s.length/2;i++){
        if(i%2 == purification.lastIndexOf(-purification[i])%2){
            return false
        }
    }
    // console.log(String.fromCharCode('('.charCodeAt(0) + 1))
    console.log(')'.charCodeAt(0))


    return true
    };
    
    let s="()";
    console.log(isValid(s)); 
    
    s="([]){}"
    console.log(isValid(s)); 
    s="([]){}"
    console.log(isValid(s)); 

    s="({{)}}"
    console.log(isValid(s))
     

    