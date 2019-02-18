var readline = require('readline-sync');
var fs = require('fs');

var age = readline.question('Age ?: ');
var gender = readline.question('Gender ?: ');

var daily = JSON.parse(fs.readFileSync('daily.json', 'utf8'));

for (var i = 0; i < daily.length; i++) {
	if (Array.isArray(daily[i]["age"])) {
		if (daily[i]["age"][0] <= age && daily[i]["age"][1] >= age 
			&& daily[i]["gender"] == gender
			&& daily[i]["active"] == "moderate") {
			console.log(daily[i]);
		}
	} else {
		if (daily[i]["age"] == age
			&& daily[i]["gender"] == gender
			&& daily[i]["active"] == "moderate") {
			console.log(daily[i]);
		}
	}
}

