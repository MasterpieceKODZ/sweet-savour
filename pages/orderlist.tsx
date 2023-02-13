/* eslint-disable react-hooks/exhaustive-deps */
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import {
	showDrinkOrderList,
	showFoodOrderList,
} from "../myFunctions/menulist-functions/showHideOrderList";
import {
	actionClearFilteredLists,
	actionRemoveDrinksOrderList,
	actionRemoveFoodOrderList,
} from "../redux/action-creators";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect } from "react";

const OrderList = () => {
	const foodOrderListState = useAppSelector((state) => state.order.foodlist);
	const drinkOrderListState = useAppSelector((state) => state.order.drinkslist);
	const dispatch: any = useAppDispatch();
	const router = useRouter();

	useEffect(() => {
		if (foodOrderListState.length + drinkOrderListState.length < 1) {
			router.push("/menulist");
		}

		const routeChangeStartHandeler = (url: string, { shallow }: any) => {
			if (url.startsWith("/menulist")) {
				dispatch(actionClearFilteredLists());
			}
		};

		router.events.on("routeChangeStart", routeChangeStartHandeler);

		return () => {
			router.events.off("routeChangeStart", routeChangeStartHandeler);
		};
	}, [foodOrderListState, drinkOrderListState]);

	return (
		<div className="orderlist-root">
			<h3 className="orderlist-intro">
				review and verify your order by making payment
			</h3>
			<div className="orderlist-host">
				<div className="orderlist-tabs-host">
					<div
						className={`orderlist-tab order-food-tab ${
							foodOrderListState.length
								? "active"
								: !drinkOrderListState.length && foodOrderListState.length
								? "active"
								: ""
						}`}
						onClick={showFoodOrderList}>
						Food
					</div>
					<div
						className={`orderlist-tab order-drink-tab ${
							!foodOrderListState.length && drinkOrderListState.length
								? "active"
								: ""
						}`}
						onClick={showDrinkOrderList}>
						Drink
					</div>
				</div>
				<div className="orderlist-container">
					<div
						className={`orderlist food-orderlist ${
							foodOrderListState.length ? "show" : ""
						}`}>
						<div className="orderlist-wrapper">
							{foodOrderListState.map((item: any, index: number) => (
								<div
									className="order-item"
									key={index}>
									<p className="order-name">{item.name}</p>
									<p className="order-price">${item.price}</p>
									<div
										className="btn-remove-order-item"
										onClick={() => dispatch(actionRemoveFoodOrderList(item))}>
										<i className="fa-solid fa-xmark"></i>
									</div>
								</div>
							))}
						</div>
					</div>
					<div
						className={`orderlist drink-orderlist ${
							!foodOrderListState.length ? "show" : ""
						}`}>
						<div className="orderlist-wrapper">
							{drinkOrderListState.map((item: any, index: number) => (
								<div
									className="order-item"
									key={index}>
									<p className="order-name">{item.name}</p>
									<p className="order-price">${item.price}</p>
									<div
										className="btn-remove-order-item"
										onClick={() => dispatch(actionRemoveDrinksOrderList(item))}>
										<i className="fa-solid fa-xmark"></i>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<Link
				className="btn-payment"
				href="/invoice">
				Make Payment
			</Link>
			<Link
				href="/menulist"
				passHref
				className="orderlist-back-link">
				<div
					className="orderlist-back-button"
					title="go back to menu">
					<i className="fas fa-arrow-left"></i>
				</div>
			</Link>
		</div>
	);
};

export default OrderList;
