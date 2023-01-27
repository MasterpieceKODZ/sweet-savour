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
import "../styles/media-queries.scss";

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
