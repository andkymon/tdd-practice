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

    return {
        capitalize,
        reverseString,
        calculator
    }
})();