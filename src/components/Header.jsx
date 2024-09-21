export const Header = () => {
	return (
		<header>
			<div className="container">
				<nav className="navbar">
					<a href="#" className="logo">
						Bakery
					</a>
					<ul className="nav-list">
						<li className="nav-item">
							<a href="#" className="nav-link active">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link">
								About Us
							</a>
						</li>
						<li className="nav-item">
							<a href="about.html#reservation" className="nav-link">
								Reservation
							</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link">
								Bakers
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};
