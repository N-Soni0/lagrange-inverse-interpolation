// Функція для обчислення полінома Лагранжа
function lagrangeInverseInterpolation(xValues, yValues, y) {
    let n = xValues.length;
    let result = 0;

    for (let i = 0; i < n; i++) {
        let term = xValues[i];
        for (let j = 0; j < n; j++) {
            if (j !== i) {
                term *= (y - yValues[j]) / (yValues[i] - yValues[j]);
            }
        }
        result += term;
    }

    return result;
}

// Функція f(x)
function f(x) {
    return x * x;
}

// Вхідні дані
let xValues = [];
let yValues = [];
let a = 3;
let b = 9;
let h = 1;

// Заповнення масивів xValues та yValues
for (let x = a; x <= b; x += h) {
    xValues.push(x);
    yValues.push(f(x));
}

// Значення y для якого хочемо знайти x
let y = 25;

// Обчислення x за допомогою оберненого інтерполювання Лагранжа
let xInterpolated = lagrangeInverseInterpolation(xValues, yValues, y);

console.log(`Інтерпольоване значення x для y = ${y} є x ≈ ${xInterpolated.toFixed(4)}`);
