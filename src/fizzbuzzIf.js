function fizzbuzzIf(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzzi";
    } else if (num % 3 === 0) {
        return "Fizz";
    } else if (num % 5 === 0) {
        return "Buzz";
    } else {
        return num;

    }
}

module.exports = fizzbuzzIf;
