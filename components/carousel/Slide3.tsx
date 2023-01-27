/* eslint-disable @next/next/no-img-element */
import Navbar from "../Navbar";
import "animate.css";
import Image from "next/image";
import Link from "next/link";
import { useSwiperSlide } from "swiper/react";

const Slide3 = () => {
	const slide = useSwiperSlide();

	return (
		<div className="carousel-slide slide3">
			<Navbar />
			<div className="top-padding"></div>
			<h3 className="slide3-intro-text">If you haven&apos;t tried our ...</h3>
			<h3
				className={`slide3-dish-name animate__animated ${
					slide.isActive ? "animate__wobble" : ""
				} animate__delay-1s animate__repeat-2`}>
				Crab Cakes With Remoulade Sauce
			</h3>
			<h3 className="slide3-intro-text"> You haven&apos;t lived!</h3>
			<div className="slide-dish-img-host">
				<img
					className="slide-dish-img slide3-img"
					src="/assets/dishes/main/crab-cakes-with-remoulade-sauce/crab-cakes-pic.webp"
					alt="Crab cakes with remoulade sauce"
				/>
				<Image
					width={60}
					height={60}
					src="/assets/licking-100.webp"
					alt="lips licking gif"
					className="slide3-lick"
				/>
			</div>
			<h5 className="slide3-description-text">
				A blend of culinary artistry👨‍🍳 and healthy nutrition to please your
				stomach...😋
			</h5>
			{/* animation from animate.css */}
			<Link
				href={"/menulist"}
				passHref>
				<button className="btn-order slide3-order-btn animate__animated animate__pulse animate__delay-1s animate__infinite">
					Order Now
				</button>
			</Link>
		</div>
	);
};

export default Slide3;
