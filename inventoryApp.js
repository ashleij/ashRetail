var readline = require('readline');

var prompt = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function Item(name, price, quantity, description) {
	this.name = name;
	this.price = price;
	this.quantity = quantity;
	this.description = description;
}

var storeInventory = {

	item1 : {
		name: "book(s)",
		price: 5.50,
		quantity: 10,
		description: "hold this and look smrt"
	},

	item2 : {
		name: "samurai sword(s)",
		price: 500,
		quantity: 2,
		description: "ladies love samurai swords"
	},

	item3 : {
		name: "quail doll(s)",
		price: 20,
		quantity: 1,
		description: "so beautiful and majestic"
	},

	item4 : {
		name: "revenge potion(s)",
		price: 129.95,
		quantity: 50,
		description: "don't ask what it does..."
	},

	item5 : {
		name: "love potion(s)",
		price: 89,
		quantity: 2,
		description: "one day, you won't need a potion for this!"
	}

};

var menuFunctions = {
	populateList : function() {
			for (i = 0; i <= storeInventoryArr.length - 1; i++) {
				console.log((i+1) + ".) " + storeInventoryArr[i].name);
		}

	},

	menuOptions: function() {
	 	console.log("**************");
		console.log("1. Add Item");
		console.log("2. Delete Item");
		console.log("3. Search Item");
		console.log("4. Modify Quanities");
		console.log("5. Change Descriptions");
		console.log("6. Show All Items");
		console.log("7. Exit");
		console.log("**************");
		menuFunctions.makeChoiceAtMenu();
	},
	makeChoiceAtMenu: function() {
		prompt.question("wat do: ", (userOption) => {
			if (userOption == "1") {
				menuFunctions.addItem();
			} else if (userOption == "2") {
				menuFunctions.deleteItem();
			} else if (userOption == "3") {
				console.log("3. Search Item");
			} else if (userOption == "4") {
				menuFunctions.modifyQuantity();
			} else if (userOption == "5") {
				menuFunctions.changeDescription();
			} else if (userOption == "6") {
				menuFunctions.listAllItems();
			} else if (userOption == "7") {
				console.log("Bai");
				prompt.close();
			} else {
				console.log("Invalid. Try again.");
				menuFunctions.makeChoiceAtMenu();
			}
		});
	},

	addItem : function() {
		prompt.question("Item Name: ", (addedName) => {
			prompt.question("Item Price: ", (addedPrice) => {
				prompt.question("Item Quantity: ", (addedQuantity) => {
					prompt.question("Item Description: ", (addedDescription) => {
					var addedItem = new Item(addedName, addedPrice, addedQuantity, addedDescription);
					storeInventoryArr.push(addedItem);
					menuFunctions.menuOptions();
					});
				});
			});
		});
	},

	deleteItem : function() {
		menuFunctions.populateList();
		prompt.question("What item to delete? ('0' to cancel): ", (deleteThisEntry) => {
				if (deleteThisEntry == 0) {
					console.log("Returning to Main Menu...");
					menuFunctions.menuOptions();
				} else if ((deleteThisEntry <= storeInventoryArr.length) && (deleteThisEntry > 0)) {
					console.log("Let's get rid of " + storeInventoryArr[deleteThisEntry-1].name + ".");
					storeInventoryArr.splice(deleteThisEntry-1, 1);
					menuFunctions.menuOptions();
				} else {
					console.log("Your entry was invalid! Try again.");
					menuFunctions.deleteItem();
				}
		});		
	},

	modifyQuantity : function() {
		menuFunctions.populateList();
		prompt.question("What item to modify quantity? ('0' to cancel): ", (modifyThisEntrysQuant) => {
				if (modifyThisEntrysQuant == "0") {
					console.log("Returning to Main Menu...");
					menuFunctions.menuOptions();
				} else if ((modifyThisEntrysQuant <= storeInventoryArr.length) && (modifyThisEntrysQuant > 0)) {
					console.log("Let's modify the quanity for " + storeInventoryArr[modifyThisEntrysQuant-1].name + ".");
					prompt.question("Enter the new quantity: (or '0' to cancel)", (newHP) => {
						storeInventoryArr[modifyThisEntrysQuant-1].quantity = parseInt(newHP);
						console.log(storeInventoryArr[modifyThisEntrysQuant-1].name + "'s quantity has been updated to " + newHP);
						menuFunctions.menuOptions();
					});	
				} else {
					console.log("Your entry was invalid! Try again.");
					menuFunctions.modifyQuantity();
				}
		});		
	},

	changeDescription : function() {
		menuFunctions.populateList();
		prompt.question("What item to modify description? ('0' to cancel): ", (modifyThisEntrysDescription) => {
				if (modifyThisEntrysDescription == "0") {
					console.log("Returning to Main Menu...");
					menuFunctions.menuOptions();
				} else if ((modifyThisEntrysDescription <= storeInventoryArr.length) && (modifyThisEntrysDescription > 0)) {
					console.log("Let's modify the description for " + storeInventoryArr[modifyThisEntrysDescription-1].name + ".");
					prompt.question("Enter the new description: (or '0' to cancel)", (newDescri) => {
						storeInventoryArr[modifyThisEntrysDescription-1].description = newDescri;
						console.log(storeInventoryArr[modifyThisEntrysDescription-1].name + "'s quantity has been updated to " + newHP);
						menuFunctions.menuOptions();
					});	
				} else {
					console.log("Your entry was invalid! Try again.");
					menuFunctions.changeDescription();
				}
		});		
	},

	listAllItems : function() {
		for (i = 0; i <= storeInventoryArr.length - 1; i++) {
			console.log("We have " + storeInventoryArr[i].quantity + " " + storeInventoryArr[i].name + " priced at $" + storeInventoryArr[i].price + "! " + (storeInventoryArr[i].description));
		}
		prompt.question("Enter whatever to return: ", function() {
			menuFunctions.menuOptions();
		});
	},
};
var newHP;
var storeInventoryArr = [];
storeInventoryArr.push(storeInventory.item1, storeInventory.item2, storeInventory.item3, storeInventory.item4, storeInventory.item5);
menuFunctions.menuOptions();