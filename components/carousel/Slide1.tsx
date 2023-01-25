/* eslint-disable @next/next/no-img-element */
import Navbar from "../Navbar";
import "animate.css";
const Slide1 = () => {
	return (
		<div className="carousel-slide slide1">
			<Navbar />
			<div className="top-padding"></div>
			<h3 className="slide1-intro-text">Have You tried our</h3>
			{/* animation from animate.css */}
			<h3 className="slide1-dish-name animate__animated animate__rubberBand animate__delay-1s animate__repeat-2">
				Artichoke Spinach Dip
			</h3>
			<h3 className="slide1-intro-text">for appetizer...?</h3>
			<div
				style={{
					width: "minContent",
					height: "minContent",
					position: "relative",
				}}>
				<img
					className="slide-dish-img slide1-img"
					src="https://i.ibb.co/CB5vPB2/artichoke-spinach-dip-pic.jpg"
					alt="artichoke spinach dip"
				/>
				<img
					src="https://i.ibb.co/tmRCkG8/chef-perfect.gif"
					alt="chef emoji gif"
					className="slide1-chef-emoji"
				/>
			</div>

			<h5 className="slide1-description-text">
				A warm bowl of delight 😋, served with your favorite chips or crackers!
				😉
			</h5>
			{/* animation from animate.css */}
			<button className="btn-order slide1-order-btn animate__animated animate__pulse animate__delay-1s animate__infinite">
				Order Now
			</button>
		</div>
	);
};

export default Slide1;
