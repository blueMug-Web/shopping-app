import React from "react";
import contact_womanPhone from "../assets/images/contact/contact_womanPhone.jpg";

const Contact = () => {
	return (
		<div>
			<div className="container mb-5">
				<div className="row">
					<div className="col-12 text-center py-4 my-4">
						<h1>Have Some Questions?</h1>
						<hr />
					</div>
				</div>
				<div className="row">
					<div className="col-md-6 d-flex flex-nowrap justify-content-center">
						<img
							src={contact_womanPhone}
							height={400}
							width={400}
							className="text-center w-100 "
							alt="Contact"
						/>
					</div>
					<div className="col-md-6">
						<form>
							<div className="mb-3">
								<label for="exampleForm" className="form-label">
									Full Name
								</label>
								<input
									type="text"
									className="form-control"
									id="exampleForm"
									placeholder="John Smith"
								/>
							</div>
							<div className="mb-3">
								<label for="exampleFormControlInput1" className="form-label">
									Email address
								</label>
								<input
									type="email"
									className="form-control"
									id="exampleFormControlInput1"
									placeholder="name@example.com"
								/>
							</div>
							<div className="mb-3">
								<label for="exampleFormControlTextarea1" className="form-label">
									Ask Us:
								</label>
								<textarea
									className="form-control"
									id="exampleFormControlTextarea1"
									rows="3"
								></textarea>
							</div>
							<button type="submit" className="btn btn-outline-primary">
								Send
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
