export function showIngredientsModal(ingredients: string[]) {
	let listHTML: string = "";

	ingredients.forEach((ing) => {
		listHTML = `${listHTML}\n<li>${ing}</li>`;
	});

	console.log(listHTML);

	const ingList: any = document.querySelector(".ingredients-list");
	ingList.innerHTML = listHTML;

	const modal = document.querySelector(".ingredients-list-modal");
	modal?.classList.add("show");
	setTimeout(() => {
		modal?.classList.add("fade-in");
	}, 200);
}

export function closeIngredientsModal() {
	document
		.querySelector(".ingredients-list-modal")
		?.classList.remove("fade-in");
	setTimeout(() => {
		document.querySelector(".ingredients-list-modal")?.classList.remove("show");
	}, 600);
}
