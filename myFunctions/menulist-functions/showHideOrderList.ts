export function showFoodOrderList() {
	const orderlistTabs = document.querySelectorAll(".orderlist-tab");
	const foodOrderTab = document.querySelector(".order-food-tab");
	const orderlist = document.querySelectorAll(".orderlist");
	const foodOrderList = document.querySelector(".food-orderlist");

	orderlistTabs.forEach((olt) => {
		olt.classList.remove("active");
	});

	foodOrderTab?.classList.add("active");

	orderlist.forEach((ordls) => {
		ordls.classList.remove("show");
	});

	foodOrderList?.classList.add("show");
}

export function showDrinkOrderList() {
	const orderlistTabs = document.querySelectorAll(".orderlist-tab");
	const drinkOrderTab = document.querySelector(".order-drink-tab");
	const orderlist = document.querySelectorAll(".orderlist");
	const drinkOrderList = document.querySelector(".drink-orderlist");

	orderlistTabs.forEach((olt) => {
		olt.classList.remove("active");
	});

	drinkOrderTab?.classList.add("active");

	orderlist.forEach((ordls) => {
		ordls.classList.remove("show");
	});

	drinkOrderList?.classList.add("show");
}
