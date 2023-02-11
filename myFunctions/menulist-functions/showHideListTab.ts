export function showFoodList() {
	const tabs = document.querySelectorAll(".tab");
	tabs.forEach((t) => {
		t.classList.remove("active");
	});

	const foodTab = document.querySelector(".food-tab");
	foodTab?.classList.add("active");

	const list = document.querySelectorAll(".list");
	list.forEach((lt) => {
		lt.classList.remove("list-show");
	});

	const foodList = document.querySelector(".food-list");
	foodList?.classList.add("list-show");
}

export function showDrinkList() {
	const tabs = document.querySelectorAll(".tab");
	tabs.forEach((t) => {
		t.classList.remove("active");
	});

	const drinkTab = document.querySelector(".drink-tab");
	drinkTab?.classList.add("active");

	const list = document.querySelectorAll(".list");
	list.forEach((lt) => {
		lt.classList.remove("list-show");
	});

	const drinkList = document.querySelector(".drink-list");
	drinkList?.classList.add("list-show");
}
