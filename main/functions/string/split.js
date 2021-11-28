// let myString = "Bonjour, je m'appelle Jean !";
// let res = mySplit(myString, "pp");
// console.log("res =", res);

export function mySplit(aString, separator) {
    let myArray = [];
    let position = 0;

    aString += separator;
    console.log(aString);

    for (let i = 0; i < aString.length; i++) {
        if (aString.substring(i, i + separator.length) === separator) {

            myArray.push(aString.substring(position, i))
            position = i + separator.length;
            i += separator.length;
        }
    }
    return myArray;
}