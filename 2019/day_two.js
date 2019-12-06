const { str } = require("./opcode");
// part one
const programAlarm = (input, noun, verb) => {
	const arr = input.split(",").map(elem => parseInt(elem));
	arr[1] = noun;
	arr[2] = verb;
	let i = 0;
	while (i + 3 < arr.length) {
		if (arr[i] === 1) {
			arr[arr[i + 3]] = arr[arr[i + 1]] + arr[arr[i + 2]];
		} else if (arr[i] === 2) {
			arr[arr[i + 3]] = arr[arr[i + 1]] * arr[arr[i + 2]];
		} else {
			break;
		}
		i += 4;
	}
	return arr[0];
}
console.log(programAlarm(str, 12, 2));

// part two
const findNounAndVerb = (str, expectedOutput) => {
	for (let noun = 0; noun <= 99; noun++) {
		for (let verb = 0; verb <= 99; verb++) {
			if (programAlarm(str, noun, verb) === expectedOutput) {
				return 100 * noun + verb;
			}
		}
	}
}
console.log(findNounAndVerb(str, 19690720));