export function myContains(theString,needle,startIndex=0){
    if(needle.length > theString.length) return -1;

    let firstIndex = -1;
    let j = 0;

    for(let i=startIndex; i<theString.length;i++){

        if(j==needle.length) return firstIndex;
        if(theString[i] === needle[j]){
            if(j===0) firstIndex=i;
            j++;
        }else{
            firstIndex = -1;
            j=0;
        }
    }
    return -1;
}
