const orderList = {
	foodlist: [],
	drinkslist: [],
};

export default function orderListReducer(
	state: any = orderList,
	{ type, payload }: any,
) {
	switch (type) {
		case "ADD_FOOD_ORDER_LIST":
			const newFoodList = [...state.foodlist, payload];
			return { ...state, foodlist: newFoodList };
		case "ADD_DRINKS_ORDER_LIST":
			const newDrinkList = [...state.drinkslist, payload];
			return { ...state, drinkslist: newDrinkList };
		case "REMOVE_FOOD_ORDER_LIST":
			const newFoodListR = state.foodlist.filter(
				(food: any) => food.name != payload.name,
			);
			return { ...state, foodlist: newFoodListR };
		case "REMOVE_DRINKS_ORDER_LIST":
			const newDrinkListR = state.drinkslist.filter(
				(drink: any) => drink.name != payload.name,
			);
			return { ...state, drinkslist: newDrinkListR };
		default:
			return state;
	}
}
