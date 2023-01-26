/* eslint-disable @next/next/no-img-element */
import Navbar from "../Navbar";
import "animate.css";
import { useSwiperSlide } from "swiper/react";

const Slide2 = () => {
	const slide = useSwiperSlide();

	return (
		<div className="carousel-slide slide2">
			<Navbar />
			<div className="top-padding"></div>
			<h3 className="slide2-intro-text">Try our...</h3>
			<h3
				className={`slide2-dish-name animate__animated ${
					slide.isActive ? "animate__bounce" : ""
				} animate__delay-1s animate__repeat-2`}>
				Chocolate Bread And Butter Pudding
			</h3>
			<h3 className="slide2-intro-text"> for dessert and thank us later!</h3>
			<div
				style={{
					width: "minContent",
					height: "minContent",
					position: "relative",
					overflow: "hidden",
				}}>
				<img
					className="slide-dish-img slide2-img"
					src="https://i.ibb.co/sQNkhk8/chocolate-bread-pic.jpg"
					alt="Chocolate bread and butter pudding"
				/>
				<img
					src="https://i.ibb.co/GFgrSfS/amazing.webp"
					alt="love struck emoji"
					className="slide2-love-emoji"
				/>
			</div>
			<h5 className="slide2-description-text">
				{" "}
				Your classic bread and butter pudding with a chocolate make-over😊,
				yummy...😋
			</h5>
			{/* animation from animate.css */}
			<button className="btn-order slide2-order-btn animate__animated animate__pulse animate__delay-1s animate__infinite">
				Order Now
			</button>
		</div>
	);
};

export default Slide2;
