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

function backToMainMenu(mainMenuKeyword) {
	if (mainMenuKeyWord == "menuplz"){
		menuFunctions.menuOptions();
	}
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

	backToMainMenu: function(mainMenuKeyWord) {
		if (mainMenuKeyWord == "menuplz"){
			menuFunctions.menuOptions();
		} else {
			return mainMenuKeyWord;
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
				menuFunctions.searchItem();
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
			menuFunctions.backToMainMenu(addedName);
			prompt.question("Item Price: ", (addedPrice) => {
				menuFunctions.backToMainMenu(addedPrice);
				prompt.question("Item Quantity: ", (addedQuantity) => {
					menuFunctions.backToMainMenu(addedQuantity);
					prompt.question("Item Description: ", (addedDescription) => {
						menuFunctions.backToMainMenu(addedDescription);
						if (addedDescription != "menuplz"){
							var addedItem = new Item(addedName, addedPrice, addedQuantity, addedDescription);
								storeInventoryArr.push(addedItem);
								console.log("Item added!");
								menuFunctions.menuOptions();
						}
					});
				});
			});
		});
	},

	deleteItem : function() {
		menuFunctions.populateList();
		prompt.question("What item to delete?: ", (deleteThisEntry) => {
			menuFunctions.backToMainMenu(deleteThisEntry);
			if (deleteThisEntry != "menuplz"){
				if ((deleteThisEntry <= storeInventoryArr.length) && (deleteThisEntry > 0)) {
					console.log("Let's get rid of " + storeInventoryArr[deleteThisEntry-1].name + ".");
					storeInventoryArr.splice(deleteThisEntry-1, 1);
					menuFunctions.menuOptions();
				} else {
					console.log("Your entry was invalid! Try again.");
					menuFunctions.deleteItem();
				}
			}
		});		
	},

	modifyQuantity : function() {
		menuFunctions.populateList();
		prompt.question("What item to modify quantity? ", (modifyThisEntrysQuant) => {
			menuFunctions.backToMainMenu(modifyThisEntrysQuant);
			if (modifyThisEntrysQuant != "menuplz"){

			if ((modifyThisEntrysQuant <= storeInventoryArr.length) && (modifyThisEntrysQuant > 0)) {
				console.log("Let's modify the quanity for " + storeInventoryArr[modifyThisEntrysQuant-1].name + ".");
				prompt.question("Enter the new quantity: ", (newHP) => {
					menuFunctions.backToMainMenu(newHP);
					if (newHP != "menuplz"){

					storeInventoryArr[modifyThisEntrysQuant-1].quantity = parseInt(newHP);
					console.log(storeInventoryArr[modifyThisEntrysQuant-1].name + "'s quantity has been updated to " + newHP);
					menuFunctions.menuOptions();
					}
				});	
			} else {
				console.log("Your entry was invalid! Try again.");
				menuFunctions.modifyQuantity();
			}
		}
		});		
	},

	changeDescription : function() {
		menuFunctions.populateList();
		prompt.question("What item to modify description? : ", (modifyThisEntrysDescription) => {
			menuFunctions.backToMainMenu(modifyThisEntrysDescription);
			if (modifyThisEntrysDescription != "menuplz"){
				if ((modifyThisEntrysDescription <= storeInventoryArr.length) && (modifyThisEntrysDescription > 0)) {
					console.log("Let's modify the description for " + storeInventoryArr[modifyThisEntrysDescription-1].name + ".");
					prompt.question("Enter the new description: ", (newDescri) => {
						menuFunctions.backToMainMenu(newDescri);
					if (newDescri != "menuplz"){

						storeInventoryArr[modifyThisEntrysDescription-1].description = newDescri;
						console.log(storeInventoryArr[modifyThisEntrysDescription-1].name + "'s quantity has been updated to " + newHP);
						menuFunctions.menuOptions();
					}
					});	
				} else {
					console.log("Your entry was invalid! Try again.");
					menuFunctions.changeDescription();
				}
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

	searchItem : function() {
	
		prompt.question("What item?: ", (searchItem) => {
			searchItemLowerCase = searchItem.toLowerCase();
			menuFunctions.backToMainMenu(searchItemLowerCase);
				if (searchItemLowerCase != "menuplz"){
					console.log("**************");
					for (var i = 0; i <= storeInventoryArr.length -1; i++) {
						var checkItemName =  storeInventoryArr[i].name.toLowerCase();
						if (checkItemName.includes(searchItemLowerCase) === true ) {
							console.log(storeInventoryArr[i]); 
						} 	
					}
					prompt.question("Enter whatever to return: ", function() {
						menuFunctions.menuOptions();
					});
				}
		});
	}
};

var newHP;
var storeInventoryArr = [];
storeInventoryArr.push(storeInventory.item1, storeInventory.item2, storeInventory.item3, storeInventory.item4, storeInventory.item5);
menuFunctions.menuOptions();