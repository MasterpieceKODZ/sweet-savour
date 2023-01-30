import Image from "next/image";
import Navbar from "./Navbar";
import Link from "next/link";
import "animate.css";

const Dashboard = () => {
	return (
		<div className="dashboard-root">
			<Navbar />
			<div className="top-padding"></div>
			<div className="dashboard-host">
				<div className="dish dish-1">
					<h3 className="dashboard-dish1-intro-text">
						Want an appetizer? Try our
					</h3>
					<h1
						className={
							"dashboard-dish1-name animate__animated animate__delay-2s animate__repeat-2 animate__bounce"
						}>
						Cheesy Bread
					</h1>
					<h3 className="dashboard-dish1-intro-text">and thank us later!</h3>
					<Image
						width={80}
						height={80}
						src="/assets/chef-perfect.gif"
						alt="chef emoji gif"
						className="dashboard-dish1-chef-emoji"
					/>
					<h3 className="dashboard-dish1-description-text">
						Crispy on the outside😊, cheesy on the inside😋, bet you have never
						tasted one this good!
					</h3>
					<Link
						href="/menulist"
						passHref>
						<button className="dashboard-dish1-order-btn">Order Now</button>
					</Link>
				</div>
				<div className="dish2n3-host">
					<div className="dish dish-2">
						<h1 className="dashboard-dish2-name animate__animated animate__delay-2s animate__repeat-2 animate__rubberBand">
							Frozen Strawberry Trifle
						</h1>
						<Image
							width={60}
							height={60}
							src="/assets/amazing.webp"
							alt="love struck emoji"
							className="dashboard-love-emoji"
						/>
						<h3 className="dashboard-dish2-description">
							It`s got everything you need from a trifle - creamy custard, sweet
							jam, fresh fruit and soft sponge fingers. All in one.😋
						</h3>
						<Link
							href="/menulist"
							passHref>
							<button className="dashboard-dish2-order-btn">Order Now</button>
						</Link>
					</div>
					<div className="dish dish-3">
						<h1 className="dashboard-dish3-name animate__animated animate__delay-2s animate__repeat-2 animate__tada">
							Crock Pot Ribs BBQ
						</h1>
						<Image
							width={60}
							height={60}
							src="/assets/licking-100.webp"
							alt="mouth licking emoji"
							className="dashboard-lick-emoji"
						/>
						<h3 className="dashboard-dish3-description">
							It`s got everything you need from a trifle - creamy custard, sweet
							jam, fresh fruit and soft sponge fingers. All in one.😋
						</h3>
						<Link
							href="/menulist"
							passHref>
							<button className="dashboard-dish3-order-btn">Order Now</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
