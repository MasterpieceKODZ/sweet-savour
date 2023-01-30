import { initialState } from "./initialstate";

export function myReducer(state: any = initialState, { type, payload }: any) {
	switch (type) {
		case "SHOW_FOOD_LIST":
			return { ...state, showList: "food" };
		case "SHOW_DRINK_LIST":
			return { ...state, showList: "drink" };
		default:
			return state;
	}
}
