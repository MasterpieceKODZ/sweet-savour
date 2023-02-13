import {
	actionAddDrinksOrderList,
	actionAddFoodOrderList,
} from "../../redux/action-creators";

function getRandomIdForNewOrderItem(listLength: number) {
	return (Math.random() * 1000) / listLength;
}

export function addDishToTab(dish: any, dispatch: any, foodlist: object[]) {
	const dishOptions: string[] = [];

	// get all selected dish options
	const dishOptionsChk: any =
		dish.options == "none"
			? "none"
			: document.querySelectorAll(`.${dish.id.trim()}-option-check`);

	if (typeof dishOptionsChk != "string") {
		console.log(dishOptionsChk);

		dishOptionsChk.forEach((chk: any) => {
			if (chk.checked) {
				dishOptions.push(chk.name);
			}
		});
	}

	const selectedDishOptions = dishOptions.join(",");

	// get dish preference description

	const dishPrefInp: any = document.querySelector(
		`.${dish.id.trim()}-pref-inp`,
	);
	const dishPrefValue = dishPrefInp.value.trim();

	const orderObj: any = {
		name: dish.name,
		price: dish.price,
		id: foodlist.length
			? getRandomIdForNewOrderItem(foodlist.length)
			: getRandomIdForNewOrderItem(1),
	};

	if (selectedDishOptions) {
		orderObj.options = selectedDishOptions;
	}

	if (dishPrefValue) {
		orderObj.pref = dishPrefValue;
	}

	dispatch(actionAddFoodOrderList(orderObj));
}

export function addDrinkToTab(drink: any, dispatch: any, drinklist: object[]) {
	const drinkOrderObj = {
		name: drink.name,
		price: drink.price,
		id: drinklist.length
			? getRandomIdForNewOrderItem(drinklist.length)
			: getRandomIdForNewOrderItem(1),
	};

	dispatch(actionAddDrinksOrderList(drinkOrderObj));
}
