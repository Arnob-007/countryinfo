import "./Header.css";
import NightsStayOutlinedIcon from "@material-ui/icons/NightsStayOutlined";
import { useState } from "react";

const Header = () => {
	const [dark, setDark] = useState(true);

	const handleTheme = () => {
		const elm = document.getElementById("app");

		if (dark) {
			elm.classList.replace("dark", "light");
			setDark(false);
		} else {
			elm.classList.replace("light", "dark");
			setDark(true);
		}
	};

	return (
		<div className='header'>
			<h2>Where in the world?</h2>
			<div onClick={handleTheme} className='header__dark'>
				<NightsStayOutlinedIcon />
				{dark ? "Light" : "Dark"} Mode
			</div>
		</div>
	);
};

export default Header;
