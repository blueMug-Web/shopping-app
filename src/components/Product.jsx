import React from "react";
import { NavLink } from "react-router-dom";
import DATA from "../Data";

const Product = () => {
	const cardItem = (item) => {
		return (
			<div className="card my-5 py-4" key={item.id} style={{ width: "18rem" }}>
				<img
					src={item.img}
					height={300}
					className="card-img-top"
					alt={item.title}
				/>
				<div className="card-body text-center">
					<h5 className="card-title">{item.title}</h5>
					<p className="lead">${item.price}</p>
					<NavLink
						to={`/products/${item.id}`}
						className="btn btn-outline-primary"
					>
						Buy Now
					</NavLink>
				</div>
			</div>
		);
	};

	return (
		<div>
			<div className="container py-5">
				<div className="row">
					<div className="col-12 text-center">
						<h1>iPhone</h1>
						<hr />
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row justify-content-around">{DATA.map(cardItem)}</div>
			</div>
		</div>
	);
};

export default Product;

// *** THIS FUNCTION IS USED IN CONJUNCTION WITH fakestoreAPI to fetch data, not use a pre-made data set like above ^^^

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setProducts } from "../redux/actions/productActions.jsx";
// import axios from "axios";
// import "./Product.css";
// // import "../index.css";
// import { Link } from "react-router-dom";

// const Product = ({ id, title, image, price, category, rating }) => {
// 	return (
// 		<div>
// 			<div
// 				className="card card-animation my-5 mx-5 py-4 product-card"
// 				style={{ width: "18rem" }}
// 				key={id}
// 			>
// 				<img
// 					src={image}
// 					height={300}
// 					className="card-img-top product-image"
// 					alt={title}
// 				/>
// 				<div className="card-body text-center title-text-styling">
// 					<h5 className="card-title  ">{title}</h5>
// 					<h3 className="category">{category}</h3>
// 					<span className="lead">$ {price}</span>
// 					<br></br>
// 					{/* <NavLink className="nav-link" aria-current="page" to="/">
// 						Home
// 					</NavLink> */}
// 					<Link to={`/products/${id}`} className="btn btn-outline-primary">
// 						Buy Now
// 					</Link>
// 				</div>
// 			</div>
// 			{/* <div className="w-100"></div> */}
// 		</div>
// 	);
// };

// export default Product;
