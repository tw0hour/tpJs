export function myStartWith(aString,startWith){
    if (startWith.length > aString.length) return false;

    for(let i=0;i<startWith.length;i++){
        if(startWith[i]!==aString[i]) return false;
    }

    return true;
}