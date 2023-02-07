export default function filterDrinksByPrice(drinksList: object[]) {
	let newDrinksList: object[] = [];

	// get the highest price from drinkslist
	let highestDrinkPrice = 0;

	drinksList.forEach((drink: any) => {
		if (drink.price > highestDrinkPrice) {
			highestDrinkPrice = drink.price;
		}
	});

	const drinksPriceMinMax = {
		min: 0,
		max: highestDrinkPrice + 10,
	};

	const drinksPriceMin: any = document.getElementById("drinks-price-min-inp");
	if (drinksPriceMin.value) {
		drinksPriceMinMax.min = parseFloat(drinksPriceMin?.value);
	}

	const drinksPriceMax: any = document.getElementById("drinks-price-max-inp");
	if (drinksPriceMax.value) {
		drinksPriceMinMax.max = parseFloat(drinksPriceMax?.value);
	}

	//if minimum drink price is greater than maximum drink price set the value of maximum drink price to be equal to highest drink price to prevent confilt of values when filtering list
	if (drinksPriceMinMax.min > drinksPriceMinMax.max) {
		drinksPriceMinMax.max = highestDrinkPrice;
	}

	const newDrinksListByPrice: object[] = [];

	drinksList.forEach((drink: any) => {
		if (
			drink.price >= drinksPriceMinMax.min &&
			drink.price <= drinksPriceMinMax.max
		) {
			newDrinksListByPrice.push(drink);
		}
	});

	newDrinksList = newDrinksListByPrice;

	if (newDrinksList.length) return newDrinksList;
	else return drinksList;
}
