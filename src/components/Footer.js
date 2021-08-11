import React from "react";
import "./Footer.css";

const Footer = () => {
	var date = new Date();

	return (
		<div className="footerContainer">
            <p>&copy; emmz photography {date.getFullYear()} All Rights Reserved</p>
		</div>
	);
};

export default Footer;
