export default function getOrderListTotalPrice(
	foodlist: object[],
	drinkslist: object[],
) {
	let totalPrice: number = 0;

	foodlist.forEach((item: any) => {
		totalPrice = totalPrice + item.price;
	});

	drinkslist.forEach((item: any) => {
		totalPrice = totalPrice + item.price;
	});

	return totalPrice.toFixed(2);
}
