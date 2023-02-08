export default function showToast(msg: string) {
	const toastMsg: any = document.getElementById("toast-msg");
	toastMsg.textContent = msg;

	const toast = document.querySelector(".toast-msg-host");
	toast?.classList.add("show");
	setTimeout(() => {
		toast?.classList.add("fade-in");
	}, 300);

	setTimeout(() => {
		toast?.classList.remove("fade-in");
		setTimeout(() => {
			toast?.classList.remove("show");
		}, 700);
	}, 5500);
}
