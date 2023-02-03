import Navbar from "../components/Navbar";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import {
	actionHideFoodFilter,
	actionShowDrink,
	actionShowFood,
	actionShowFoodFilter,
	actionShowDrinkFilter,
	actionHideDrinkFilter,
} from "../redux/action-creators";
import Image from "next/image";
import { getApp, getApps } from "firebase-admin/app";

const Menulist = ({ foodList, drinkList }: any) => {
	// retrieve show list state from redux store to determine which list to show (food/drinks)
	const showList = useAppSelector((state) => state.list.showList);
	const foodFilter = useAppSelector((state) => state.list.foodFilter);
	const drinkFilter = useAppSelector((state) => state.list.drinkFilter);
	const dispatch: any = useAppDispatch();

	// toggle the visibilty of the bottom filter options navbar on the food menu list
	const showHideFoodFilter = () => {
		if (foodFilter == "hidden") {
			dispatch(actionShowFoodFilter());
		} else {
			dispatch(actionHideFoodFilter());
		}
	};

	// toggle the visibilty of the bottom filter options navbar on the drink menu list
	const showHideDrinkFilter = () => {
		if (drinkFilter == "hidden") {
			dispatch(actionShowDrinkFilter());
		} else {
			dispatch(actionHideDrinkFilter());
		}
	};

	return (
		<div className="menulist-root">
			<Navbar />
			<div className="top-padding"></div>
			<div className="menu-host">
				<div className="menu-tab-layout">
					<div
						className={`tab food-tab ${showList == "food" ? "active" : ""}`}
						onClick={() => dispatch(actionShowFood())}>
						<h4>Food</h4>
						<div
							className="food-filter-btn"
							title="show food filter"
							onClick={showHideFoodFilter}>
							<i className="fa-solid fa-filter"></i>
						</div>
					</div>
					<div
						className={`tab drink-tab ${showList == "drink" ? "active" : ""}`}
						onClick={() => dispatch(actionShowDrink())}>
						<h4>Drink</h4>
						<div
							className="drink-filter-btn"
							title="show drinks filter"
							onClick={showHideDrinkFilter}>
							<i className="fa-solid fa-filter"></i>
						</div>
					</div>
				</div>
				<div className="menu-list-host">
					{showList == "food" ? (
						<div className="list food-list">
							<div className="list-wrapper">
								{foodList.map((item: any) => (
									<div
										className="dish-host"
										key={item.id}>
										<Image
											width={280}
											height={140}
											src={`${item.image}`}
											alt={`${item.name}`}
											className="dish-img"
											priority
										/>
										<div className="dish-data-host">
											<div className="name-price-host">
												<div className="name-category-host">
													<h3 className="list-dish-name">{item.name}</h3>
													<h6 className="list-dish-category">
														{item.category}
													</h6>
												</div>
												<div className="list-dish-price">${item.price}</div>
											</div>
											{/* render the options element if there are options in the dish data */}
											{typeof item.options != "string" ? (
												<div
													className="food-options-root"
													id={`${item.name}-options`}>
													<h5>Serve With</h5>
													{item.options.map((opt: string, i: number) => (
														<label
															key={`${i}`}
															className="food-option-host">
															<input
																type="checkbox"
																name={`${opt}`}
																className="food-option"
															/>
															{opt}
														</label>
													))}
												</div>
											) : (
												<></>
											)}
											<textarea
												id="cream-cheese-dip-pref"
												cols={30}
												rows={2}
												className="pref-inp"
												placeholder="Tell us how you want it..."></textarea>
											<div className="food-btns-host">
												{/* render the serve with button if there options in the dish data */}
												{typeof item.options != "string" ? (
													<button
														className="btn-serve-with"
														onClick={(e) => {
															document
																.querySelectorAll(".food-options-root")
																.forEach((elm) => {
																	elm.classList.remove("show");
																});

															document
																.getElementById(`${item.name}-options`)
																?.classList.toggle("show");
														}}>
														View Options
													</button>
												) : (
													<></>
												)}
												<button
													className="btn-add-food"
													onClick={(e) => {
														console.log(item.name);
													}}>
													Add To My Tab
												</button>
											</div>
										</div>
									</div>
								))}
							</div>
							<div
								className={`food-filter-host ${
									foodFilter == "showing" ? "show" : "hide"
								}`}>
								<div className="food-filter food-filter-type">Type</div>
								<div className="food-filter food-filter-price">Price</div>
								<div className="food-filter food-filter-allergy">
									Exclude Dishes With..
								</div>
							</div>
						</div>
					) : (
						<></>
					)}
					{showList == "drink" ? (
						<div className="list drink-list">
							<div className="list-wrapper">
								{drinkList.map((item: any) => (
									<div
										className="drink-host"
										key={`${item.id}`}>
										<Image
											width={120}
											height={150}
											src={`${item.image}`}
											alt={`${item.name}`}
											className="drink-img"
											priority
										/>
										<div className="drink-data-host">
											<h4 className="drink-name">{item.name}</h4>
											<h6 className="drink-category">{item.category}</h6>
											<div className="drink-price">{item.price}</div>
											<button className="btn-add-drink">Add To My Tab</button>
										</div>
									</div>
								))}
							</div>
							<div
								className={`drink-filter-host ${
									drinkFilter == "showing" ? "show" : "hide"
								}`}>
								<div className="drink-filter drink-filter-type">Type</div>
								<div className="drink-filter drink-filter-price">Price</div>
							</div>
						</div>
					) : (
						<></>
					)}
				</div>
			</div>
		</div>
	);
};

export default Menulist;

export async function getServerSideProps() {
	const admin = require("firebase-admin");
	const { getFirestore } = require("firebase-admin/firestore");

	const serviceAccount = require(`../sweet-savour-c60fcbe0888a.json`);

	// initialize default app if no app exist else get the existing default app
	const app = !getApps().length
		? admin.initializeApp({
				credential: admin.credential.cert(serviceAccount),
		  })
		: getApp("[DEFAULT]");

	const db = getFirestore();

	// fetch foodlist data from firebase firestore
	const foodListRef = db.collection("food list");
	const snapshot = await foodListRef.get();

	// snapshot cannot be iterated through on the client side hence extract all document data and their ids into foodList array and return foodList as a prop
	const foodList: any = [];
	snapshot.forEach((doc: any) => {
		foodList.push({
			...doc.data(),
			id: doc.id,
		});
	});

	// fetch drinks data from firestore
	const drinkListRef = db.collection("drink list");
	const drinksSnapshot = await drinkListRef.get();

	// extract drinks raw data from drinksSnapshot
	const drinkList: any = [];
	drinksSnapshot.forEach((doc: any) => {
		drinkList.push({
			...doc.data(),
			id: doc.id,
		});
	});

	return {
		props: {
			foodList,
			drinkList,
		},
	};
}
