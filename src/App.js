import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Country from "./Pages/Country/Country";
import Home from "./Pages/Home/Home";

const App = () => {
	const [countries, setCountries] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState();

	useEffect(() => {
		fetch("https://restcountries.eu/rest/v2/all")
			.then((data) => data.json())
			.then((info) => {
				for (let i = info.length - 1; i > 0; i--) {
					let j = Math.floor(Math.random() * (i + 1));
					let temp = info[i];
					info[i] = info[j];
					info[j] = temp;
				}
				setCountries(info);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div id='app' className='app light'>
			<Header />
			{!selectedCountry ? (
				<Home
					countries={countries}
					setCountries={setCountries}
					setSelectedCountry={setSelectedCountry}
				/>
			) : (
				<Country
					country={selectedCountry}
					setSelectedCountry={setSelectedCountry}
				/>
			)}
		</div>
	);
};

export default App;
