import React from "react";
import { NavLink } from "react-router-dom";
import CartBtn from "./buttons/CartBtn";
import Login from "./buttons/Login";
import Signup from "./buttons/Signup";
import "./Header.css";

const Header = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark navbar-style">
				<div className="container-fluid py-2">
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon "></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav nav-pills me-auto mb-2 mb-lg-0 ">
							<li className="nav-item ">
								<NavLink
									className="nav-link text-light pill-1 my-1"
									aria-current="page"
									to="/"
								>
									Home
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									className="nav-link text-light pill-2 my-1"
									to="/products"
								>
									Products
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									className="nav-link text-light pill-3 my-1"
									to="/about"
								>
									About
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									className="nav-link text-light pill-4 my-1"
									to="/contact"
								>
									Contact
								</NavLink>
							</li>
						</ul>
						<div className="me-auto navbar-nav inline-block">
							<NavLink className="navbar-brand fw-bold align-middle" to="/">
								i-MART
							</NavLink>

							<Login />
							<Signup />
							<CartBtn />
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
