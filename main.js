export const testFunctions = (() => {
    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function reverseString(string) {
        return string.split("").reverse().join("");
    }

    const calculator = {
        'add' : (a, b) => {
            return Number(a) + Number(b);
        },

        'subtract' : (a, b) => {
            return a - b;
        },

        'multiply' : (a, b) => {
            return a * b;
        },

        'divide' : (a, b) => {
            return a / b;
        }
    }

    function caesarCipher(string, count) {
        let stringArray = string.split("");
        
        stringArray = stringArray.map((char) => {
            if (isLetter(char) === false) {
                return char;
            } else {
                return incrementLetter(char, count);
            } 
        });

        return stringArray.join("");;
    }

    function isLetter(char) {
        const letterRegex = new RegExp("^[a-zA-Z]+$");
        return letterRegex.test(char);
    }

    function incrementLetter(char, count) {
        let newCharCode = char.toUpperCase().charCodeAt(0) + count;
        if (newCharCode > 90) {
            newCharCode += 6;
        }

        return getCharInOriginalCase(char, newCharCode);
    }

    function getCharInOriginalCase(oldChar, newCharCode) {
        if (oldChar === oldChar.toUpperCase()){
            return String.fromCharCode(newCharCode);
        } else {
            return String.fromCharCode(newCharCode).toLowerCase();
        }
    }

    function analyzeArray(array) {
        array.sort();

        return {
            "average": array.reduce((total, num) => total + num) / array.length,
            "min": array[0],
            "max": array[array.length - 1],
            "length": array.length
        }
    }

    return {
        capitalize,
        reverseString,
        calculator,
        caesarCipher,
        analyzeArray
    }
})();