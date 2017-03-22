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

var menuFunctions = {
	menuOptions: function() {
	 	console.log("**************");
		console.log("1. Add Item");
		console.log("2. Delete Item");
		console.log("3. Search Item");
		console.log("4. Modify Quanities");
		console.log("5. Change Descriptions");
		console.log("6. Exit");
		console.log("**************");
		menuFunctions.makeChoiceAtMenu();
	},
	makeChoiceAtMenu: function() {
		prompt.question("wat do: ", (userOption) => {
			if (userOption == "1") {
				console.log("1. Add Item");
			} else if (userOption == "2") {
				console.log("2. Delete Item");
			} else if (userOption == "3") {
				console.log("3. Search Item");
			} else if (userOption == "4") {
				console.log("4. Modify Quanities");
			} else if (userOption == "5") {
				console.log("5. Change Descriptions");
			} else if (userOption == "6") {
				console.log("Bai");
				prompt.close();
			} else {
				console.log("Invalid. Try again.");
				menuFunctions.makeChoiceAtMenu();
			}
		});

	}
};

menuFunctions.menuOptions();