const fs = require('fs')

const max = {
	red: 12,
	green: 13, 
	blue:14
}


// Part 1
const contents = fs.readFileSync('dec2problem.txt','utf8').split("\n").reduce((acc, line) => {

	if (line === ""){
		return acc
	}

// Part 1 code
/*
	const gameId = line.split(":")[0].split(" ")[1]
	const validLines = line.split(":")[1].split(";").map(game => {
		const g = game.split(",").map(dice => {
			const color = dice.trim().split(" ")[1]
			const count = dice.trim().split(" ")[0]			
			return count <= max[color]
		})
		return g.every(dice => dice === true)		
	})	
	const valid = validLines.every(line => line === true)
	if (valid){
		acc.push(gameId)
	}	
	return acc
*/

// Part 2 code	

/*
	const min = {
		red: 0,
		green: 0,
		blue: 0
	}

	let power = 1

	const validLines = line.split(":")[1].split(";").map(game => {
		const g = game.split(",").map(dice => {
			const [count, color] = dice.trim().split(" ")
			min[color] = Math.max(min[color], count)		
		})
	})
	power = Object.values(min).reduce((acc, mm) => acc * mm)
	acc.push(power)

	return acc
*/
	
},[])

console.log(contents.reduce((acc, gameId) => acc + parseInt(gameId),0))
