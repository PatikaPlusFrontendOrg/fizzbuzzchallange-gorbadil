# FizzBuzz Test Project

This project implements the classic FizzBuzz problem using two different approaches: one using `if` statements and the other using `switch` statements. 

## Project Structure

```
fizzbuzz-test
├── src
│   ├── fizzbuzzIf.js        # FizzBuzz implementation using if statements
│   ├── fizzbuzzSwitch.js     # FizzBuzz implementation using switch statements
├── test
│   ├── fizzbuzzIf.test.js    # Unit tests for fizzbuzzIf function
│   ├── fizzbuzzSwitch.test.js # Unit tests for fizzbuzzSwitch function
├── package.json              # npm configuration file
└── README.md                 # Project documentation
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the Repository**: 
   Clone this repository to your local machine using the following command:
   ```
   git clone <repository-url>
   ```

2. **Navigate to the Project Directory**:
   ```
   cd fizzbuzz-test
   ```

3. **Install Dependencies**:
   Run the following command to install the necessary dependencies:
   ```
   npm install
   ```

4. **Run the Tests**:
   You can run the tests for both implementations using the following command:
   ```
   npm test
   ```

## FizzBuzz Logic

- **fizzbuzzIf**: This function checks if a number is a multiple of 3, 5, or both using `if` statements and returns:
  - "Fizz" for multiples of 3
  - "Buzz" for multiples of 5
  - "FizzBuzz" for multiples of both
  - The number itself for all other cases

- **fizzbuzzSwitch**: This function performs the same logic as `fizzbuzzIf` but uses a `switch` statement to determine the output.

## Contributing

Feel free to contribute to this project by submitting issues or pull requests. 

## License

This project is open-source and available under the MIT License.