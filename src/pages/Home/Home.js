import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./index.css";
import Navbar from "../../components/Navbar";

import gsap from "gsap";

import img from "../../images/img-2-low.jpg";

export default function Home() {
	const tl = gsap.timeline();
	const history = useHistory();

	useEffect(() => {
		tl.from(
			".photography",
			{ x: "100%", opacity: 0, duration: 2 },
			"0"
		).from(".design", { x: "-100%", opacity: 0, duration: 2 }, "0");
	}, [tl]);

	return (
		<div className="container">
			<Navbar />

			<img className="backgroundImage image" src={img} alt="" />
			<div className="overlay"></div>

			<div className="text">
				<div className="nameContainer">
					<p>
						HI, I'M <span>EMMANUEL</span> AND I LOVE
					</p>
				</div>
				<div className="photodes">
					<div className="design">
						<h1>DESIGN &</h1>
					</div>
					<div className="photography">
						<h1>PHOTOGRAPHY</h1>
					</div>
				</div>
				<Link to="/work" className="button">
					My Work
				</Link>
			</div>
			<div className="textLarge">
				<h1>Hi, i'm emmanuel samakinwa.</h1>
				<p>
					I'm an on location photographer, based in Lagos, Nigeria and passionate about design and
					photography.
				</p>
				<button onClick={() => history.push("/work")}>
					Check out my work
				</button>
			</div>
		</div>
	);
}
