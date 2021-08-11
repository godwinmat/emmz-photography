import { useState } from "react";

import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./Navbar.css";
import { BiMenu, BiCaretDown } from "react-icons/bi";
import { MdClose } from "react-icons/md";

const Navbar = ({ children }) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [dropDown, setDropDown] = useState(false);
	const openMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const openDropDown = () => {
		setDropDown(!dropDown);
	};
	return (
		<div>
			<nav className={menuOpen ? "nav navOpen" : "nav"}>
				<div
					className={
						menuOpen ? "navContainer navOpen" : "navContainer"
					}
				>
					<img src={logo} className="logo" alt="logo" />
					<div className="ul">
						<Link
							className="a"
							to="/"
							onClick={() => setDropDown(false)}
						>
							Home
						</Link>
						<div className="dropDown">
							<Link
								className="a"
								// to="/work"
								onClick={() => openDropDown()}
							>
								<div className="chevContainer">
									My Work <BiCaretDown className="chev" />
								</div>
							</Link>
							<div
								className={
									dropDown
										? "dropDownContent showDropDown"
										: "dropDownContent"
								}
							>
								<Link
									to="/work/creative"
									onClick={() => openDropDown()}
								>
									Creative Photography
								</Link>
								<Link
									to="/work/wedding"
									onClick={() => openDropDown()}
								>
									Wedding Photography
								</Link>
								<Link
									to="/work/portrait"
									onClick={() => openDropDown()}
								>
									Portrait Photography
								</Link>
								<Link
									to="/work/children"
									onClick={() => openDropDown()}
								>
									Childern Photography
								</Link>
								<Link
									to="/work/event"
									onClick={() => openDropDown()}
								>
									Event Photography
								</Link>
							</div>
						</div>

						<Link
							to="/work/creative"
							className={
								dropDown
									? "hiddenDropDown showHiddenDropDown"
									: "hiddenDropDown"
							}
							onClick={() => openDropDown()}
						>
							Creative Photography
						</Link>
						<Link
							to="/work/wedding"
							className={
								dropDown
									? "hiddenDropDown showHiddenDropDown"
									: "hiddenDropDown"
							}
							onClick={() => openDropDown()}
						>
							Wedding Photography
						</Link>
						<Link
							to="/work/portrait"
							className={
								dropDown
									? "hiddenDropDown showHiddenDropDown"
									: "hiddenDropDown"
							}
							onClick={() => openDropDown()}
						>
							Portrait Photography
						</Link>
						<Link
							 to="/work/children"
							className={
								dropDown
									? "hiddenDropDown showHiddenDropDown"
									: "hiddenDropDown"
							}
							onClick={() => openDropDown()}
						>
							Children Photography
						</Link>
						<Link
							 to="/work/event"
							className={
								dropDown
									? "hiddenDropDown showHiddenDropDown"
									: "hiddenDropDown"
							}
							onClick={() => openDropDown()}
						>
							Event Photography
						</Link>

						<Link
							className="a"
							to="/contact"
							onClick={() => setDropDown(false)}
						>
							Contact
						</Link>
					</div>

					{(!menuOpen && (
						<BiMenu className="menu" onClick={() => openMenu()} />
					)) || (
						<MdClose
							className="menu menuClose"
							onClick={() => {
								setMenuOpen(false);
								setDropDown(false);
							}}
						/>
					)}
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
