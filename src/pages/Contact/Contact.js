import img from "../../images/emmy-2.jpg";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import Navbar from "../../components/Navbar";

import "./contact.css";

export default function About() {
	return (
		<div className="aboutContainer">
			<Navbar />

			<div className="mainContainer">
				<img src={img} alt="profile-pic" />
				<div className="mainOverlay"></div>
				<p className="main">
					Knowing the fact that searching for the right team of
					photographers and videographers can be a never ending trawl
					of instagram pages and phone calls.
				</p>
				<p className="main">
					We at Emmz Photography assure you that the experience will
					be one you will always remember. Let us join you in creating
					this memory and writing a beautiful story.
				</p>
				<p className="main">
					It is what we do.
				</p>
				<div className="mainContact">
					<h3>Get in touch</h3>{" "}
					<div>
						<AiOutlinePhone className="mainIcon" />
						<a href="tel:+2349025716249">+2349025716249</a>
					</div>
					<div>
						<AiOutlineMail className="mainIcon" />
						<a href="mailto:Emmzcollectionz@gmail.com">
							emmzcollectionz@gmail.com
						</a>
					</div>
				</div>
				<ul className="mainLinks">
					<h3>Follow me here</h3>
					<li>
						<a
							className="mainLink"
							href="https://www.facebook.com/emmzphotography"
						>
							<FaFacebook className="socialLinks" />
						</a>
					</li>
					<li>
						<a
							className="mainLink"
							href="https://instagram.com/emmz_nation"
						>
							<FaInstagram className="socialLinks" />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
