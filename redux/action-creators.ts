import {
	SHOW_DRINK_LIST,
	SHOW_FOOD_FILTER,
	HIDE_FOOD_FILTER,
	SHOW_FOOD_LIST,
	SHOW_DRINK_FILTER,
	HIDE_DRINK_FILTER,
} from "./action-types";

export function actionShowFood() {
	return { type: SHOW_FOOD_LIST };
}

export function actionShowDrink() {
	return { type: SHOW_DRINK_LIST };
}

export function actionHideFoodFilter() {
	return { type: HIDE_FOOD_FILTER };
}

export function actionShowFoodFilter() {
	return { type: SHOW_FOOD_FILTER };
}

export function actionShowDrinkFilter() {
	return { type: SHOW_DRINK_FILTER };
}

export function actionHideDrinkFilter() {
	return { type: HIDE_DRINK_FILTER };
}
