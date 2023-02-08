import showToast from "./showToastFunction";

export default function filterFoodByAllergy(
	foodList: object[],
	priceShowedToast: boolean,
) {
	let newFoodList: object[] = [];

	const foodAllergyInp: any = document.getElementById("allergy-input");

	const allergyValues: string = foodAllergyInp.value;

	if (allergyValues.length) {
		// seperate food allergies by comma and convert text to lowercase
		let foodAllergies: string[] = allergyValues.toLowerCase().split(",");

		// remove whitespace from all foodAllergies values
		foodAllergies = foodAllergies.map((alle: string) => alle.trim());

		// join all specified food allergies seperated with a pipe
		const allergyUnion = foodAllergies.join("|");

		const allergyRegEx = new RegExp(`${allergyUnion}`, "gi");

		const allergyFilteredFoodList: object[] = [];

		foodList.forEach((dish: any) => {
			let isAllergic = false;

			const dishIngredients = dish.ingredients;

			// console.log("dish name", dish.name);
			// console.log(dish.ingredients);

			for (let i = 0; i < dishIngredients.length; i++) {
				isAllergic = allergyRegEx.test(dishIngredients[i]);
				// run test again to give system some time to fetch previous test result, P.S I noticed test sometimes test takes sometime to completenand the browser doesnt wait long enough for isAllergic to be updated test result there by causing data leaks
				allergyRegEx.test(dishIngredients[i]);

				if (isAllergic) {
					break;
				}
			}

			if (!isAllergic) {
				allergyFilteredFoodList.push(dish);
			}
		});

		newFoodList = allergyFilteredFoodList;
	}

	if (priceShowedToast && allergyValues) {
		setTimeout(() => {
			showToast(
				`all dishes with ${allergyValues} have been removed from menu list`,
			);
		}, 7000);
	} else if (!priceShowedToast && allergyValues) {
		showToast(
			`all dishes with ${allergyValues} have been removed from menu list`,
		);
	}

	if (newFoodList.length) return newFoodList;
	else return foodList;
}
