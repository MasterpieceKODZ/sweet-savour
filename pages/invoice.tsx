/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { Fragment, useEffect } from "react";
import {
	actionClearFilteredLists,
	actionClearOrderLists,
} from "../redux/action-creators";
import { useRouter } from "next/router";
import getOrderListTotalPrice from "../myFunctions/menulist-functions/orderTotalPrice";
const Invoice = () => {
	const foodOrderList: object[] = useAppSelector(
		(state) => state.order.foodlist,
	);
	const drinkOrderList: object[] = useAppSelector(
		(state) => state.order.drinkslist,
	);
	const dispatch: any = useAppDispatch();
	const router = useRouter();

	useEffect(() => {
		if (!foodOrderList.length && !drinkOrderList.length) {
			router.push("/menulist");
		}

		const handelRouteChangeStart = (url: string, { shallow }: any) => {
			dispatch(actionClearOrderLists());
			dispatch(actionClearFilteredLists());
		};

		router.events.on("routeChangeStart", handelRouteChangeStart);

		return () => {
			router.events.off("routeChangeStart", handelRouteChangeStart);
		};
	}, []);

	const date = new Date();

	return (
		<div className="invoice-root">
			<h3 className="invoice-page-title">Invoice</h3>
			<div className="invoice-host">
				<div className="invoice-container">
					<div className="invoice-list-wrapper">
						{foodOrderList.length ? (
							<div className="invoice food-invoice">
								<p className="invoice-title">Food</p>
								<>
									{foodOrderList.map((item: any, index: number) => (
										<Fragment key={index}>
											<div className="invoice">
												<p className="invoice-name">{item.name}</p>
												{item.options ? (
													<p className="invoice-food-option">
														{" "}
														served with {item.options}
													</p>
												) : (
													<></>
												)}

												<p className="invoice-price">${item.price}</p>
											</div>
										</Fragment>
									))}
								</>
							</div>
						) : (
							<></>
						)}
						{drinkOrderList.length ? (
							<>
								<hr className="invoice-hr" />
								<div className="invoice drink-invoice">
									<p className="invoice-title">Drink</p>
									{drinkOrderList.map((item: any, index: number) => (
										<Fragment key={index}>
											<div className="invoice">
												<p className="invoice-name">{item.name}</p>
												<p className="invoice-price">${item.price}</p>
											</div>
										</Fragment>
									))}
								</div>
							</>
						) : (
							<></>
						)}
					</div>
				</div>
				<div className="invoice-total">
					<p>Total</p>
					<p>${getOrderListTotalPrice(foodOrderList,drinkOrderList)}</p>
				</div>
				<div className="invoice-label">
					<p className="invoice-label-text invoice-label-sweet-savour">
						Sweet Savor
					</p>
					<p className="invoice-label-text invoice-label-date">
						{date.getDate()}-
						{date.getMonth() + 1 == 1
							? "JAN"
							: date.getMonth() + 1 == 2
							? "FEB"
							: date.getMonth() + 1 == 3
							? "MAR"
							: date.getMonth() + 1 == 4
							? "APR"
							: date.getMonth() + 1 == 5
							? "MAY"
							: date.getMonth() + 1 == 6
							? "JUN"
							: date.getMonth() + 1 == 7
							? "JUL"
							: date.getMonth() + 1 == 8
							? "AUG"
							: date.getMonth() + 1 == 9
							? "SEPT"
							: date.getMonth() + 1 == 10
							? "OCT"
							: date.getMonth() + 1 == 11
							? "NOV"
							: date.getMonth() + 1 == 12
							? "DEC"
							: ""}
						-{date.getFullYear()}
					</p>
				</div>
			</div>
			<Link
				className="home-btn-link"
				href="/menulist"
				passHref
				title="go to menulist">
				<i className="fas fa-home"></i>
			</Link>
		</div>
	);
};

export default Invoice;
