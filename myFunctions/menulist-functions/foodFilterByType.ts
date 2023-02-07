export default function filterFoodByType(foodList: object[]) {
	let newFoodListByType: object[] = [];

	//***************** filter by type **********************/
	const typeCheckBtns = document.querySelectorAll(".food-type-check");

	// an array to hold all selected type values
	const selectedTypes: any[] = [];

	typeCheckBtns.forEach((chkBtn: any) => {
		if (chkBtn.checked) {
			selectedTypes.push(chkBtn.name);
		}
	});

	// filter food list by selected food types
	if (selectedTypes.length) {
		selectedTypes.forEach((type) => {
			foodList.forEach((dish: any) => {
				if (dish["category"] == type) {
					newFoodListByType.push(dish);
				}
			});
		});
	}

	if (newFoodListByType.length) return newFoodListByType;
	else return foodList;
}
