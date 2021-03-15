module.exports = function toReadable(n) {
    const numbers = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const dozens = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (n > 99 && n < 1000) {
        if (n % 100 === 0) return `${numbers[Math.floor(n / 100)]} hundred`;
        if (n % 10 === 0) {
            return `${numbers[Math.floor(n / 100)]} hundred ${toReadable(
                n % 100
            )}`;
        }
        return `${numbers[Math.floor(n / 100)]} hundred ${toReadable(n % 100)}`;
    } else if (n > 19 && n < 100) {
        if (n % 10 === 0) {
            return dozens[Math.floor(n / 10)];
        }
        return `${dozens[Math.floor(n / 10)]} ${numbers[Math.floor(n % 10)]}`;
    } else if (n < 20) {
        return numbers[n];
    }
};

console.log(module.exports(120));
