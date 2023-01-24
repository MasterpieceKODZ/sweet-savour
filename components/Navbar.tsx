const Navbar = () => {
	return (
		<div className="navbar">
			<h3 className="brand sweet">Sweet</h3>
			{/*eslint-disable-next-line @next/next/no-img-element*/}
			<img
				src="https://i.ibb.co/929zzz5/logo.png"
				alt="reasturant logo"
				className="logo"
			/>
			<h3 className="brand savour">Savour</h3>
		</div>
	);
};

export default Navbar;
