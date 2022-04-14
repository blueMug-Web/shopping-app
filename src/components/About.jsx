import React from "react";
import { NavLink } from "react-router-dom";
import about_group from "../assets/images/about/about_group.jpg";

const About = () => {
	return (
		<div>
			<div className="container py-5 my-5">
				<div className="row">
					<div className="col-md-6">
						<h1 className="text-primary fw-bold mb-4">About</h1>
						<br />
						<p className="lead mb-4">
							"Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
							quae ab illo inventore veritatis et quasi architecto beatae vitae
							dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
							aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
							eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
							est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
							velit, sed quia non numquam eius modi tempora incidunt ut labore
							et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
							veniam, quis nostrum exercitationem ullam corporis suscipit
							laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
							vel eum iure reprehenderit qui in ea voluptate velit esse quam
							nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
							voluptas nulla pariatur?"
						</p>
						<NavLink to="/contact" className="btn btn-outline-primary px-3">
							Contact Us
						</NavLink>
					</div>
					<div className="col-md-6 d-flex flex-wrap align-items-center">
						<img
							src={about_group}
							height={400}
							width={400}
							className="text-center w-100 "
							alt="About Us"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
