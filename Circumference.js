const radius = [2, 10, 5, 3]

const circumference = function (radius) {
    return Math.PI * 2 * radius;
};

const area = function (radius) {
    return Math.PI * radius * radius;
};

const diameter = function (radius) {
    return 2 * radius;
};
const calculate = function (radius, logic) {
    const output = [];
    for (let i = 0; i <= radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));
console.log(radius);
