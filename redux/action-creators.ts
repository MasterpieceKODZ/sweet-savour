import {
	SHOW_FOOD_FILTER,
	HIDE_FOOD_FILTER,
	SHOW_DRINK_FILTER,
	HIDE_DRINK_FILTER,
	UPDATE_FOOD_LIST,
	UPDATE_DRINKS_LIST,
	SHOW_TOAST,
	HIDE_TOAST,
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

export function actionShowToast() {
	return { type: SHOW_TOAST };
}

export function actionHideToast() {
	return { type: HIDE_TOAST };
}
