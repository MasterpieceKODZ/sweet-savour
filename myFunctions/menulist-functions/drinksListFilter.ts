import { actionUpdateDrinksList } from "../../redux/action-creators";
import filterDrinksByPrice from "./drinksFilterByPrice";
import filterDrinksByType from "./drinksFilterByType";

export function updateFilteredDrinksList(drinksList: object[], dispatch: any) {
	let newDrinksList: object[] = [];

	//***************** filter by type **********************/
	newDrinksList = filterDrinksByType(drinksList);

	//**************************** filter by price *******************************//

	newDrinksList = filterDrinksByPrice(
		newDrinksList.length ? newDrinksList : drinksList,
	);

	dispatch(
		actionUpdateDrinksList(newDrinksList.length ? newDrinksList : drinksList),
	);
}
