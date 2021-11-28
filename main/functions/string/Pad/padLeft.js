export const padZeros = (myString,repeat)=>myPadLeft(0,myString,repeat);
export const padSpace = (myString,repeat)=>myPadLeft(" ",myString,repeat);

export function myPadLeft(carac,aString,totalSize){
    if(totalSize <= aString.length) return aString;

    let numberToAdd = totalSize - aString.length;

    let addChar = Array(numberToAdd).fill(carac);

    return addChar.join('')+aString;

}