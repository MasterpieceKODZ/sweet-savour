import { initialState } from "./initialstate";

export function myReducer(state: any = initialState, { type, payload }: any) {
	switch (type) {
		case "SHOW_FOOD_LIST":
			return { ...state, showList: "food" };
		case "SHOW_DRINK_LIST":
			return { ...state, showList: "drink" };
		case "SHOW_FOOD_FILTER":
			return { ...state, foodFilter: "showing" };
		case "HIDE_FOOD_FILTER":
			return { ...state, foodFilter: "hidden" };
		case "SHOW_DRINK_FILTER":
			return { ...state, drinkFilter: "showing" };
		case "HIDE_DRINK_FILTER":
			return { ...state, drinkFilter: "hidden" };
		case "UPDATE_FOOD_LIST":
			return { ...initialState, dishes: payload };
		case "UPDATE_FOOD_TYPE_FILTER":
			return { ...initialState, foodTypeFilter: payload };
		case "UPDATE_FOOD_PRICE_FILTER":
			return { ...initialState, foodPriceFilter: payload };
		case "UPDATE_FOOD_ALLERGY_FILTER":
			return { ...initialState, foodAllergies: payload };
		default:
			return state;
	}
}
