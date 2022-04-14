import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { setProducts } from "../redux/actions/productActions";
import axios from "axios";
import "./Product.css";

//This is an 'AllProducts' component -> use this logic and specific API calls for each category to replace the current code in the category/components.

const ProductListing = () => {
	// const products = useSelector((state) => state.allProducts.products);
	// const dispatch = useDispatch();

	// const fetchProducts = async () => {
	// 	const response = await axios
	// 		.get("https://fakestoreapi.com/products")
	// 		.catch((err) => {
	// 			console.log("Error", err);
	// 		});
	// 	dispatch(setProducts(response.data));
	// };

	// useEffect(() => {
	// 	fetchProducts();
	// }, []);

	// // const renderProducts = products.map((product) => {
	// // 	const { id, title, image, price, category, rating } = product;
	// // 	return
	// // });
	// const DisplayProducts = () => {
	// 	const renderProducts = products.map((product) => {
	// 		const { id, title, image, price, category, rating } = product;
	// 		return (
	// 			<>
	// 				<Product
	// 					id={id}
	// 					title={title}
	// 					image={image}
	// 					price={price}
	// 					category={category}
	// 				/>
	// 			</>
	// 		);
	// 	});
	// 	return <>{renderProducts}</>;
	// };

	//return (

	// <>
	// 	<br />
	// 	{/* <h1 className="text-center mb-0">Products</h1> */}

	// 	<div className="container-fluid py-1">
	// 		<div className="row ">
	// 			<div className="col-12 text-center product-card justify-content-center">
	// 				{DisplayProducts()}
	// 			</div>
	// 		</div>
	// 	</div>
	// </>
	//);
	return null;
};

export default ProductListing;

// return (
// <div className="container-fluid py-5 ">
// 	<div className="row">
// 		{products.map((product) => (
// 			<div className="col-12 text-center">
// 				<Product
// 					id={id}
// 					title={title}
// 					image={image}
// 					price={price}
// 					category={category}
// 				/>
// 			</div>
// 		))}
// 	</div>
// </div>

// <div className="container-fluid py-5 ">
//     <div className="row">
//         <div className="col-12 text-center">
//             <Product />
//         </div>
//     </div>
// </div>
// 	);
// });
