var readline = require('readline');

var prompt = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var storeInventory = {

	item1 : {
		name: "book",
		description: "hold this and look smrt",
		price: 5.50,
		quantity: 10
	},

	item2 : {
		name: "samurai sword",
		description: "ladies love samurai swords",
		price: 500,
		quantity: 2
	}
};