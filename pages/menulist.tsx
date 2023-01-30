import Navbar from "../components/Navbar";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { actionShowDrink, actionShowFood } from "../redux/action-creators";
import Image from "next/image";

const Menulist = () => {
	// retrieve show list state from redux store to determine which list to show (food/drinks)
	const showList = useAppSelector((state) => state.list.showList);
	const dispatch: any = useAppDispatch();
	return (
		<div className="menulist-root">
			<Navbar />
			<div className="top-padding"></div>
			<div className="menu-host">
				<div className="menu-tab-layout">
					<div
						className={`tab food-tab ${showList == "food" ? "active" : ""}`}
						onClick={() => dispatch(actionShowFood())}>
						<h4>Food</h4>
					</div>
					<div
						className={`tab drink-tab ${showList == "drink" ? "active" : ""}`}
						onClick={() => dispatch(actionShowDrink())}>
						<h4>Drink</h4>
					</div>
				</div>
				<div className="menu-list-host">
					{showList == "food" ? (
						<div className="list food-list">
							<div className="list-wrapper">
								<div className="dish-host">
									<Image
										width={280}
										height={140}
										src={
											"/assets/dishes/appetizers/cream-cheese-dip/cream-cheese-dip-pic.jpg"
										}
										alt="cream cheese dip image"
										className="dish-img"
										priority
									/>
									<div className="dish-data-host">
										<div className="name-price-host">
											<div className="name-category-host">
												<h3 className="list-dish-name">Cream Cheese Dip</h3>
												<h6 className="list-dish-category">appetizer</h6>
											</div>
											<div className="list-dish-price">$40.55</div>
										</div>
										<p className="list-dish-description">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Illo, vitae molestiae sapiente beatae quia molestias ab
											necessitatibus tenetur quam possimus!
										</p>
										<textarea
											id="cream-cheese-dip-pref"
											cols={30}
											rows={2}
											className="pref-inp"
											placeholder="Tell us how you want it..."></textarea>
										<button className="btn-add-food">Add To My Tab</button>
									</div>
								</div>
								{/* =========================================== */}
								<div className="dish-host">
									<Image
										width={280}
										height={140}
										src={
											"/assets/dishes/appetizers/cream-cheese-dip/cream-cheese-dip-pic.jpg"
										}
										alt="cream cheese dip image"
										className="dish-img"
										priority
									/>
									<div className="dish-data-host">
										<div className="name-price-host">
											<div className="name-category-host">
												<h3 className="list-dish-name">Cream Cheese Dip</h3>
												<h6 className="list-dish-category">appetizer</h6>
											</div>
											<div className="list-dish-price">$40.55</div>
										</div>
										<p className="list-dish-description">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Illo, vitae molestiae sapiente beatae quia molestias ab
											necessitatibus tenetur quam possimus!
										</p>
										<textarea
											id="cream-cheese-dip-pref"
											cols={30}
											rows={2}
											className="pref-inp"
											placeholder="Tell us how you want it..."></textarea>
										<button className="btn-add-food">Add To My Tab</button>
									</div>
								</div>
								{/* ================================================ */}
								<div className="dish-host">
									<Image
										width={280}
										height={140}
										src={
											"/assets/dishes/appetizers/cream-cheese-dip/cream-cheese-dip-pic.jpg"
										}
										alt="cream cheese dip image"
										className="dish-img"
										priority
									/>
									<div className="dish-data-host">
										<div className="name-price-host">
											<div className="name-category-host">
												<h3 className="list-dish-name">Cream Cheese Dip</h3>
												<h6 className="list-dish-category">appetizer</h6>
											</div>
											<div className="list-dish-price">$40.55</div>
										</div>
										<p className="list-dish-description">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Illo, vitae molestiae sapiente beatae quia molestias ab
											necessitatibus tenetur quam possimus!
										</p>
										<textarea
											id="cream-cheese-dip-pref"
											cols={30}
											rows={2}
											className="pref-inp"
											placeholder="Tell us how you want it..."></textarea>
										<button className="btn-add-food">Add To My Tab</button>
									</div>
								</div>
							</div>
						</div>
					) : (
						<></>
					)}
					{showList == "drink" ? (
						<div className="list drink-list">
							<div className="drink-host">
								<Image
									width={120}
									height={150}
									src="/assets/champagne.jpg"
									alt="a bottle of champagne"
									className="drink-img"
									priority
								/>
								<div className="drink-data-host">
									<h4 className="drink-name">Champagne</h4>
									<h6 className="drink-category">sparkling wine</h6>
									<div className="drink-price">$167.60</div>
									<button className="btn-add-drink">Add To My Tab</button>
								</div>
							</div>
							{/* ======================================================== */}
							<div className="drink-host">
								<Image
									width={120}
									height={150}
									src="/assets/champagne.jpg"
									alt="a bottle of champagne"
									className="drink-img"
									priority
								/>
								<div className="drink-data-host">
									<h4 className="drink-name">Champagne</h4>
									<h6 className="drink-category">sparkling wine</h6>
									<div className="drink-price">$167.60</div>
									<button className="btn-add-drink">Add To My Tab</button>
								</div>
							</div>
							{/* ======================================================== */}
							<div className="drink-host">
								<Image
									width={120}
									height={150}
									src="/assets/champagne.jpg"
									alt="a bottle of champagne"
									className="drink-img"
									priority
								/>
								<div className="drink-data-host">
									<h4 className="drink-name">Champagne</h4>
									<h6 className="drink-category">sparkling wine</h6>
									<div className="drink-price">$167.60</div>
									<button className="btn-add-drink">Add To My Tab</button>
								</div>
							</div>
						</div>
					) : (
						<></>
					)}
				</div>
			</div>
		</div>
	);
};

export default Menulist;
