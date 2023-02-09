import {
	SHOW_FOOD_FILTER,
	HIDE_FOOD_FILTER,
	SHOW_DRINK_FILTER,
	HIDE_DRINK_FILTER,
	UPDATE_FOOD_LIST,
	UPDATE_DRINKS_LIST,
	UPDATE_FOOD_ORDER_LIST,
	UPDATE_DRINKS_ORDER_LIST,
} from "./action-types";

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

export function actionUpdateFoodlist(payload: any) {
	return { type: UPDATE_FOOD_LIST, payload };
}

export function actionUpdateDrinksList(payload: any) {
	return { type: UPDATE_DRINKS_LIST, payload };
}

export function actionUpdateFoodOrderList(payload: any) {
	return { type: UPDATE_FOOD_ORDER_LIST, payload };
}

export function actionUpdateDrinksOrderList(payload: any) {
	return { type: UPDATE_DRINKS_ORDER_LIST, payload };
}
