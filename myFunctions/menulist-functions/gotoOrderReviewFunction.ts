import showToast from "./showToastFunction";

export default function gotoOrderReview(
	router: any,
	foodOrderList: object[],
	drinkOrderList: object[],
) {
	if (foodOrderList.length + drinkOrderList.length < 1) {
		showToast("you have not selected any item yet.");
	} else {
		router.push("/orderlist");
	}
}
