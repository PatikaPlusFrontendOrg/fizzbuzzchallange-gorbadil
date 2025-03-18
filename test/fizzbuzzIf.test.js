// filepath: fizzbuzz-test/test/fizzbuzzIf.test.js
const fs = require('fs');
const fizzbuzzIf = require('../src/fizzbuzzIf');

describe('fizzbuzzIf', () => {
    test('uses if statements', () => {
        const sourceCode = fs.readFileSync(require.resolve('../src/fizzbuzzIf'), 'utf8');
        expect(sourceCode.includes('if')).toBe(true);
    });

    test('returns "Fizz" for multiples of 3', () => {
        expect(fizzbuzzIf(3)).toBe('Fizzi');
        expect(fizzbuzzIf(6)).toBe('Fizz');
        expect(fizzbuzzIf(9)).toBe('Fizz');
    });

    test('returns "Buzz" for multiples of 5', () => {
        expect(fizzbuzzIf(5)).toBe('Buzz');
        expect(fizzbuzzIf(10)).toBe('Buzz');
        expect(fizzbuzzIf(20)).toBe('Buzz');
    });

    test('returns "FizzBuzz" for multiples of both 3 and 5', () => {
        expect(fizzbuzzIf(15)).toBe('FizzBuzz');
        expect(fizzbuzzIf(30)).toBe('FizzBuzz');
        expect(fizzbuzzIf(45)).toBe('FizzBuzz');
    });

    test('returns the number itself for non-multiples of 3 or 5', () => {
        expect(fizzbuzzIf(1)).toBe(1);
        expect(fizzbuzzIf(2)).toBe(2);
        expect(fizzbuzzIf(4)).toBe(4);
        expect(fizzbuzzIf(7)).toBe(7);
    });
});
