export const padZeros = (myString,repeat)=>myPadRight(0,myString,repeat);
export const padSpace = (myString,repeat)=>myPadRight(" ",myString,repeat);

export function myPadRight(carac,aString,totalSize){
    if(totalSize <= aString.length) return aString;

    let numberToAdd = totalSize - aString.length;

    let addChar = Array(numberToAdd).fill(carac);

    return aString + addChar.join('');

}