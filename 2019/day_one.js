const { massArr } = require("./planets_mass");
// part one
const getFuel = (num) => Math.floor(num / 3) - 2;
const result1 = massArr.reduce((total, curMass) => total + getFuel(curMass), 0);
console.log(result1);

// part two
const caculateTotalFuel = (num) => {
	let res = 0, cur = getFuel(num);
	while (cur > 0) {
		res += cur;
		num = cur;
		cur = getFuel(cur);
	}
	return res;
}
let result2 = 0;
massArr.forEach(mass => result += caculateTotalFuel(mass));
console.log(result2);







