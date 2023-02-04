export default function fetchFoodTypes(foodList: object[]) {
	const foodCategories: string[] = [];

	foodList.forEach((dish: any) => {
		if (foodCategories.indexOf(dish.category as never) < 0) {
			foodCategories.push(dish.category as never);
		}
	});

	return foodCategories;
}
