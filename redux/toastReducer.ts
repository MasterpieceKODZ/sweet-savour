const toastInitialState = {
	show: false,
};

export default function toastStateReducer(
	state: any = toastInitialState,
	{ type }: any,
) {
	switch (type) {
		case "SHOW_TOAST":
			return { ...state, show: true };
		case "HIDE_TOAST":
			return { ...state, show: false };
		default:
			return state;
	}
}
