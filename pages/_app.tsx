import "../styles/Font Awesome/css/all.css";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import "../styles/navbar.scss";
import "../styles/carousel.scss";
import "../styles/slide1.scss";
import "../styles/slide2.scss";
import "../styles/slide3.scss";
import "../styles/dashboard.scss";
import "../styles/dashboard-dish1.scss";
import "../styles/dashboard-dish2.scss";
import "../styles/dashboard-dish3.scss";
import "../styles/menulist.scss";
import "../styles/food-list.scss";
import "../styles/drink-list.scss";
import "../styles/media-queries.scss";
import { Provider } from "react-redux";
import reduxStore from "../redux/reduxStore";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={reduxStore}>
			<Component {...pageProps} />
		</Provider>
	);
}
