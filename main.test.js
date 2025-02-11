import { testFunctions } from './main';

describe('capitalize() method', () => {
    test('Capitalize first letter of all lowercase string', () => {
        expect(testFunctions.capitalize('kyle')).toBe('Kyle');
    });

    test('Capitalize first letter of all uppercase string', () => { 
        expect(testFunctions.capitalize('KYLE')).toBe('KYLE');
    });
        
    test('Capitalize first letter of mixed case string', () => {
        expect(testFunctions.capitalize('kyLE')).toBe('KyLE');
    });
});

describe('reverseString() method', () => {
    test("Reverse an all lowercase string", () => {
        expect(testFunctions.reverseString('kyle')).toBe('elyk');
    });

    test("Reverse a mixed case string", () => {
        expect(testFunctions.reverseString('KyLe')).toBe('eLyK');
    });
});

describe('calculator object', () => {
    test("Add", () => {
        expect(testFunctions.calculator.add(123, 456)).toBe(579);
    });

    test("Add string values", () => {
        expect(testFunctions.calculator.add("123", "456")).toBe(579);
    });

    test("Subtract", () => {
        expect(testFunctions.calculator.subtract(579, 456)).toBe(123);
    });

    test("Subtract string values", () => {
        expect(testFunctions.calculator.subtract("222", "111")).toBe(111);
    });

    test("Multiply", () => {
        expect(testFunctions.calculator.multiply(5, 10)).toBe(50);
    });

    test("Multiply string values", () => {
        expect(testFunctions.calculator.multiply("6", "6")).toBe(36);
    });

    test("Divide", () => {
        expect(testFunctions.calculator.divide(50, 10)).toBe(5);
    });

    test("Divide", () => {
        expect(testFunctions.calculator.divide("36", "6")).toBe(6);
    });
});

describe('caesarCipher() method', () => {
    test('Caesar shifting', () => {
        expect(testFunctions.caesarCipher('abc', 3)).toBe('def');
    });

    test('Shifting from z to a', () => {
        expect(testFunctions.caesarCipher('xyz', 3)).toBe('abc');
    });

    test('Case preservation', () => {
        expect(testFunctions.caesarCipher('HeLLo', 3)).toBe('KhOOr');
    });

    test('Punctuation remain unchanged', () => {
        expect(testFunctions.caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    });
});

describe('analyzeArray object', () => {
    test("average()", () => {
        expect(testFunctions.analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
    });

    test("min()", () => {
        expect(testFunctions.analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
    });

    test("max()", () => {
        expect(testFunctions.analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
    });

    test("length()", () => {
        expect(testFunctions.analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
    });
});

