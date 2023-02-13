import "@fontsource/arizonia";
import "@fontsource/bungee-shade";
import "@fontsource/frijole";
import "@fontsource/henny-penny";
import "@fontsource/lobster";
import "@fontsource/fleur-de-leah";
import "@fontsource/nosifer";
import "@fontsource/rouge-script";
import "@fontsource/rubik-wet-paint";
import "@fontsource/rye";
import "@fontsource/bilbo";
import "@fontsource/fondamento";
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
import "../styles/orderlist.scss";
import "../styles/invoice.scss";
import "../styles/media-queries.scss";
import "../styles/menulist-media-queries.scss";
import { Provider } from "react-redux";
import reduxStore from "../redux/reduxStore";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={reduxStore}>
			<>
				<Head>
					<title>Sweet Savor</title>
					<meta
						name="description"
						content="sweet savour is a restaurant that provides your with an to order your food without leaving your place of comfort."
					/>
					<link
						rel="icon"
						href="/favicon.ico"
					/>
				</Head>
				<Component {...pageProps} />
			</>
		</Provider>
	);
}
