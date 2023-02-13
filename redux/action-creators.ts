import {
	SHOW_FOOD_FILTER,
	HIDE_FOOD_FILTER,
	SHOW_DRINK_FILTER,
	HIDE_DRINK_FILTER,
	UPDATE_FOOD_LIST,
	UPDATE_DRINKS_LIST,
	ADD_FOOD_ORDER_LIST,
	ADD_DRINKS_ORDER_LIST,
	REMOVE_FOOD_ORDER_LIST,
	REMOVE_DRINKS_ORDER_LIST,
	CLEAR_FILTERED_LISTS,
	CLEAR_ORDER_LISTS,
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

export function actionAddFoodOrderList(payload: any) {
	return { type: ADD_FOOD_ORDER_LIST, payload };
}

export function actionAddDrinksOrderList(payload: any) {
	return { type: ADD_DRINKS_ORDER_LIST, payload };
}

export function actionRemoveFoodOrderList(payload: any) {
	return { type: REMOVE_FOOD_ORDER_LIST, payload };
}

export function actionRemoveDrinksOrderList(payload: any) {
	return { type: REMOVE_DRINKS_ORDER_LIST, payload };
}

export function actionClearFilteredLists() {
	return { type: CLEAR_FILTERED_LISTS };
}

export function actionClearOrderLists() {
	return { type: CLEAR_ORDER_LISTS };
}
