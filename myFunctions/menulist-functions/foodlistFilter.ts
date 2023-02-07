import { actionUpdateFoodlist } from "../../redux/action-creators";
import filterFoodByAllergy from "./foodFilterByAllergy";
import filterFoodByPrice from "./foodFilterByPrice";
import filterFoodByType from "./foodFilterByType";

export function updateFilteredFoodList(foodList: object[], dispatch: any) {
	let newFoodList: object[] = [];

	//***************** filter by type **********************/
	newFoodList = filterFoodByType(foodList);

	//**************************** filter by price *******************************//

	newFoodList = filterFoodByPrice(newFoodList.length ? newFoodList : foodList);

	//**************** filter out food with specified food allergies **********************//

	newFoodList = filterFoodByAllergy(
		newFoodList.length ? newFoodList : foodList,
	);

	console.log(newFoodList);

	dispatch(actionUpdateFoodlist(newFoodList.length ? newFoodList : foodList));
}
