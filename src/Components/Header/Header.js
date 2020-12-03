import "./Header.css";
import NightsStayOutlinedIcon from "@material-ui/icons/NightsStayOutlined";
import { useEffect, useState } from "react";

const Header = () => {
	const [dark, setDark] = useState(false);

	useEffect(() => {
		const theme = localStorage.getItem("Theme");

		if (theme) theme === "dark" ? setDark(true) : setDark(false);
	}, []);

	useEffect(() => {
		const elm = document.getElementById("app");

		if (!dark) {
			elm.classList.replace("dark", "light");
			localStorage.setItem("Theme", "light");
		} else {
			elm.classList.replace("light", "dark");
			localStorage.setItem("Theme", "dark");
		}
	}, [dark]);

	return (
		<div className='header'>
			<h2>Where in the world?</h2>
			<div onClick={() => setDark(!dark)} className='header__dark'>
				<NightsStayOutlinedIcon />
				{dark ? "Light" : "Dark"} Mode
			</div>
		</div>
	);
};

export default Header;
