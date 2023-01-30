import { configureStore } from "@reduxjs/toolkit";
import { myReducer } from "./reducer";

const reduxStore = configureStore({
	reducer: {
		list: myReducer,
	},
});

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = ReturnType<typeof reduxStore.dispatch>;
export default reduxStore;