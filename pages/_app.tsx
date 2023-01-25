import "../styles/globals.scss";
import type { AppProps } from "next/app";
import "../styles/carousel.scss";
import "../styles/slide1.scss";
import "../styles/navbar.scss";

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
