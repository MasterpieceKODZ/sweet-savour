import {
	SHOW_DRINK_LIST,
	SHOW_FOOD_FILTER,
	HIDE_FOOD_FILTER,
	SHOW_FOOD_LIST,
	SHOW_DRINK_FILTER,
	HIDE_DRINK_FILTER,
	UPDATE_FOOD_LIST,
	UPDATE_FOOD_TYPE_FILTER,
	UPDATE_FOOD_PRICE_FILTER,
	UPDATE_FOOD_ALLERGY_FILTER,
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

export function actionUpdateFoodlist(payload: any) {
	return { type: UPDATE_FOOD_LIST, payload };
}

export function actionUpdateFoodTypeFilter(payload: any) {
	return { type: UPDATE_FOOD_TYPE_FILTER, payload };
}

export function actionUpdateFoodPriceFilter(payload: any) {
	return { type: UPDATE_FOOD_PRICE_FILTER, payload };
}

export function actionUpdateFoodAllergyFilter(payload: any) {
	return { type: UPDATE_FOOD_ALLERGY_FILTER, payload };
}
