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
	},

	item3 : {
		name: "quail doll",
		description: "so beautiful and majestic",
		price: 20,
		quantity: 1
	},

	item4 : {
		name: "revenge potion",
		description: "don't ask what it does...",
		price: 129.95,
		quantity: 50
	},

	item5 : {
		name: "love potion",
		description: "one day, you won't need a potion for this!",
		price: 89,
		quantity: 2
	}
};