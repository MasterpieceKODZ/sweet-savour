import showToast from "./showToastFunction";
export default function filterFoodByPrice(foodList: object[]) {
	const foodPriceMin: any = document.getElementById("food-price-min-inp");
	const foodPriceMax: any = document.getElementById("food-price-max-inp");

	const min: string = foodPriceMin.value;
	const max: string = foodPriceMax.value;

	let newFilteredFoodList: object[] = [];

	// get the highest price from foodlist
	let highestDishPrice = 0;

	foodList.forEach((dish: any) => {
		if (dish.price > highestDishPrice) {
			highestDishPrice = dish.price;
		}
	});

	const foodPriceMinMax = {
		min: 0,
		max: highestDishPrice + 10,
	};

	if (min) {
		foodPriceMinMax.min = parseFloat(min);
	}

	if (max) {
		foodPriceMinMax.max = parseFloat(max);
	}

	let isRangeGood = true;

	//if minimum food price is greater than maximum food price set the value of maximum food price to be equal to highest dish price to prevent confilt of values when filtering list
	if (foodPriceMinMax.min > foodPriceMinMax.max) {
		foodPriceMinMax.max = highestDishPrice;
		isRangeGood = false;
	}

	const newFoodListByPrice: object[] = [];

	foodList.forEach((dish: any) => {
		if (
			dish.price >= foodPriceMinMax.min &&
			dish.price <= foodPriceMinMax.max
		) {
			newFoodListByPrice.push(dish);
		}
	});

	newFilteredFoodList = newFoodListByPrice;

	let priceShowedToast = false;
	if (!isRangeGood && newFilteredFoodList.length > 1) {
		priceShowedToast = true;
		showToast(
			`invalid price range \nshowing dishes from $${foodPriceMinMax.min} to $${foodPriceMinMax.max}`,
		);
	} else if (newFilteredFoodList.length < 1) {
		priceShowedToast = true;
		showToast(`sorry, we dont have any dish in your desired price range`);
	}

	if (newFilteredFoodList.length)
		return { newFilteredFoodList, priceShowedToast };
	else return { newFilteredFoodList: foodList, priceShowedToast };
}
