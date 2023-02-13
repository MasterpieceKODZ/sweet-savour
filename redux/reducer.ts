import { initialState } from "./initialstate";

export function myReducer(state: any = initialState, { type, payload }: any) {
	switch (type) {
		case "SHOW_FOOD_FILTER":
			return { ...state, foodFilter: "showing" };
		case "HIDE_FOOD_FILTER":
			return { ...state, foodFilter: "hidden" };
		case "SHOW_DRINK_FILTER":
			return { ...state, drinkFilter: "showing" };
		case "HIDE_DRINK_FILTER":
			return { ...state, drinkFilter: "hidden" };
		case "UPDATE_FOOD_LIST":
			return { ...initialState, filteredFoodList: payload };
		case "UPDATE_DRINKS_LIST":
			return { ...initialState, filteredDrinksList: payload };
		case "CLEAR_FILTERED_LISTS":
			return { ...initialState, filteredDrinksList: [], filteredFoodList: [] };
		default:
			return state;
	}
}
