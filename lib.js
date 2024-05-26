const interpolatingPolynomial = require('interpolating-polynomial');

const f = interpolatingPolynomial([
	[1, 1],
	[4, 2],
	[9, 3],
	[20.25, 4.5],
	[30.25, 5.5],
	[36, 6],
	[49, 7],
]);


const y = 25;
const xInterpolated = f(y);

console.log(`Інтерпольоване значення x для y = ${y} є x ≈ ${xInterpolated.toFixed(4)}`);
