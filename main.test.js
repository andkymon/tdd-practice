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

