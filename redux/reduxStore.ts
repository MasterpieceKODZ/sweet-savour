import { configureStore } from "@reduxjs/toolkit";
import { myReducer } from "./reducer";
import orderListReducer from "./orderlistReducer";

const reduxStore = configureStore({
	reducer: {
		appState: myReducer,
		order: orderListReducer,
	},
});

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = ReturnType<typeof reduxStore.dispatch>;
export default reduxStore;
