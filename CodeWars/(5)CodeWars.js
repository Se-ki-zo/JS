/*

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

*/

function validatePIN(pin) {
    let arr = [];

    if (pin.length == 4 || pin.length == 6) {
        arr = pin.split('');

        for (let i = 0; i < arr.length; i++) {
            let a = arr[i];
            if (isNaN(parseInt(a))) {
                return false;
            }
        }

    } else {
        return false;
    }

    return true;
}

console.log(validatePIN("1234")); // true
console.log(validatePIN("12f5")); // false
console.log(validatePIN("1234k6")); // false
console.log(validatePIN("1234a")); // false
console.log(validatePIN("123456")); // true
console.log(validatePIN("1234a6")); // false
console.log(validatePIN("1.555")); // false