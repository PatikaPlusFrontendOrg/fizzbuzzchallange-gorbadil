function fizzbuzzSwitch(num) {
    switch (true) {
        case (num % 3 === 0 && num % 5 === 0):
            return "FizzBuzz";
        case (num % 3 === 0):
            return "Fizz";
        case (num % 5 === 0):
            return "Buzz";
        default:
            return num;
    }
}

module.exports = fizzbuzzSwitch;