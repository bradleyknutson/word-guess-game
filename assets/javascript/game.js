function letterInWord(str, str2){
    str = str.toLowerCase();
    str2 = str2.toLowerCase();
    for(let i = 0; i<str.length; i++){
        if(str[i] === str2){
            return true;
        }
    }
    return false;
}

console.log(letterInWord("Border", "c"));