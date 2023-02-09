const orderList = {
	foodlist: [],
	drinkslist: [],
};

export default function orderListReducer(
	state: any = orderList,
	{ type, payload }: any,
) {
	switch (type) {
		case "UPDATE_FOOD_ORDER_LIST":
			const newFoodList = [...state.foodlist, payload];
			return { ...state, foodlist: newFoodList };
		case "UPDATE_DRINKS_ORDER_LIST":
			const newDrinkList = [...state.drinkslist, payload];
			return { ...state, drinkslist: newDrinkList };
		default:
			return state;
	}
}
