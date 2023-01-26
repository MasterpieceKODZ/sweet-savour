import "../styles/globals.scss";
import type { AppProps } from "next/app";
import "../styles/navbar.scss";
import "../styles/carousel.scss";
import "../styles/slide1.scss";
import "../styles/slide2.scss";
import "../styles/slide3.scss";

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
