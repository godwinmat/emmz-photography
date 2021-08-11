import React, { useState } from "react";
import "./portrait.css";
import { imageList } from "../../others/ImageList";
import { useInterval } from "react-use";
import Navbar from "../../components/Navbar";
import { useLocation, useRouteMatch } from "react-router-dom";

export default function Portrait() {
	const [isPressed, setIsPressed] = useState(false);
	const [imageIndex, setImageIndex] = useState(0);
	const {url, path} = useRouteMatch()

	useInterval(
		() => {
			rightImage();
		},
		isPressed ? null : 12000
	);

	const rightImage = () => {
		const newIndex = imageIndex + 1;
		setImageIndex(newIndex > imageList.length - 1 ? 0 : newIndex);
	};

	return (
		<div className="portraitContainer">
			<Navbar />

			<div className="portraitImageContainer">
				{imageList.map((img, index) => (
					<div
						key={index}
						className={
							index === imageIndex ? "slide active" : "slide"
						}
					>
						{index === imageIndex && (
							<img className="portraitImage" src={img} alt="slide" />
						)}
					</div>
				))}
			</div>
		</div>
	);
}
