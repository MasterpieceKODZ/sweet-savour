//closes all the elements with the classname passes into the targetConsoles param and open the filter console element with the classname passed into the active console param
export const showFilterOption = (
	activeConsole: string,
	targetConsoles: string,
) => {
	document.querySelectorAll(`.${targetConsoles}`).forEach((elm) => {
		elm.classList.remove("show");
	});

	document.querySelector(`.${activeConsole}`)?.classList.add("show");
};

// close the active filter option console
export const closeFilterConsole = (activeConsole: string) => {
	document.querySelector(`.${activeConsole}`)?.classList.remove("show");
};
