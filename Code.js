const isValid = (s) => {
    let tmp = 0;
    let tmp_back = 0;
    let tmp2 = 0;
    let tmp2_back = 0;
    let tmp3 = 0;
    let tmp3_back = 0;
    let r = true;
    for(let i in s){
        if(s[i] == '('){
            tmp = 1;

        }else if(s[i] == ')'){
            if(tmp == 1){
                tmp_back = 1;
                if(tmp2_back == 1 || tmp3_back ==1){
                    r = false;
                }
            }   
        }
        if(s[i] == '{'){
            tmp2 = 1;

        }else if(s[i] == '}'){
            if(tmp2 == 1){
                tmp2 = 0;
                if(tmp == 1 || tmp3 ==1){
                    r = false;
                }
                
            }   
        }
        if(s[i] == '['){
            tmp3 = 1;

        }else if(s[i] == ']'){
            if(tmp3 == 1){
                tmp3 = 0;
                if(tmp == 1 || tmp2 ==1){
                    r = false;
                }
            }   
        }
    }
    return r
    };
    
    let s = '({})';
    console.log(isValid(s)); // true
    
    s = '({)}'
    console.log(isValid(s)); // false

    s="([]){}"
    console.log(isValid(s))

    