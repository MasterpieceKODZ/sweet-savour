import { configureStore } from "@reduxjs/toolkit";
import { myReducer } from "./reducer";
import toastStateReducer from "./toastReducer";

const reduxStore = configureStore({
	reducer: {
		appState: myReducer,
		toastState: toastStateReducer,
	},
});

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = ReturnType<typeof reduxStore.dispatch>;
export default reduxStore;
