export default function filterDrinksByType(drinksList: object[]) {
	let newDrinksListByType: object[] = [];

	//***************** filter by type **********************/
	const typeCheckBtns = document.querySelectorAll(".drink-type-check");

	// an array to hold all selected type values
	const selectedTypes: any[] = [];

	typeCheckBtns.forEach((chkBtn: any) => {
		if (chkBtn.checked) {
			selectedTypes.push(chkBtn.name);
		}
	});

	// filter Drinks list by selected Drinks types
	if (selectedTypes.length) {
		selectedTypes.forEach((type) => {
			drinksList.forEach((drink: any) => {
				if (drink["category"] == type) {
					newDrinksListByType.push(drink);
				}
			});
		});
	}

	if (newDrinksListByType.length) return newDrinksListByType;
	else return drinksList;
}
