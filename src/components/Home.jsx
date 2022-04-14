import React from "react";
import home_iPhone1_16x9 from "../assets/images/home/home_iPhone1_16x9.jpg";
import home_iPhone2_16x9 from "../assets/images/home/home_iPhone2_16x9.jpg";
import home_iPhone3_16x9 from "../assets/images/home/home_iPhone3_16x9.jpg";

const Home = () => {
	return (
		<div
			id="carouselExampleControls"
			className="carousel slide"
			data-bs-ride="carousel"
		>
			<div className="carousel-inner">
				<div className="carousel-item">
					<img
						src={home_iPhone1_16x9}
						className="d-block w-100 img-fluid"
						alt="men's fashion"
					/>
				</div>
				<div className="carousel-item active">
					<img
						src={home_iPhone2_16x9}
						className="d-block w-100 img-fluid"
						alt="woman smiling"
					/>
				</div>
				<div className="carousel-item">
					<img
						src={home_iPhone3_16x9}
						className="d-block w-100 img-fluid"
						alt="yellow wall"
					/>
				</div>
				{/* <div className="carousel-item">
					<img src={home_saleLaptop} className="d-block w-100" alt="laptop sale" />
				</div> */}
			</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleControls"
				data-bs-slide="prev"
			>
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleControls"
				data-bs-slide="next"
			>
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
};

export default Home;
