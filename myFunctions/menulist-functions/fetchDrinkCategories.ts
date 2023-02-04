export default function fetchDrinkTypes(drinkList: object[]) {
	const drinkCategories: string[] = [];

	drinkList.forEach((drink: any) => {
		if (drinkCategories.indexOf(drink.category as never) < 0) {
			drinkCategories.push(drink.category as never);
		}
	});

	return drinkCategories;
}
