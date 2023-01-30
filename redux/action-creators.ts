import { actionType } from "./action-types";

export function actionShowFood() {
	return { type: actionType.SHOW_FOOD_LIST };
}

export function actionShowDrink() {
	return { type: actionType.SHOW_DRINK_LIST };
}
