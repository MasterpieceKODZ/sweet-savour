import { actionUpdateFoodlist } from "../../redux/action-creators";
import filterFoodByAllergy from "./foodFilterByAllergy";
import filterFoodByPrice from "./foodFilterByPrice";
import filterFoodByType from "./foodFilterByType";

export function updateFilteredFoodList(foodList: object[], dispatch: any) {
	let newFoodList: any = [];

	//***************** filter by type **********************/
	newFoodList = filterFoodByType(foodList);

	//**************************** filter by price *******************************//

	const foodPriceMin: string =
		document.getElementById("food-price-min-inp")?.value;
	const foodPriceMax: string =
		document.getElementById("food-price-max-inp")?.value;

	newFoodList = filterFoodByPrice(
		newFoodList.length ? newFoodList : foodList,
		foodPriceMin,
		foodPriceMax,
	);

	//**************** filter out food with specified food allergies **********************//

	newFoodList = filterFoodByAllergy(
		newFoodList.newFilteredFoodList.length
			? newFoodList.newFilteredFoodList
			: foodList,
		newFoodList.priceShowedToast,
	);

	dispatch(actionUpdateFoodlist(newFoodList.length ? newFoodList : foodList));
}
