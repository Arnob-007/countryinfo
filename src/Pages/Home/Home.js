import { useEffect, useState } from "react";
import Filter from "../../Components/Filter/Filter";
import Card from "../../Components/Card/Card";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Home.css";

const Home = ({ countries, setCountries, setSelectedCountry }) => {
	const [showCountries, setShowCountries] = useState([]);
	const [search, setSearch] = useState(null);
	const [count, setCount] = useState(8);

	useEffect(() => {
		setShowCountries([]);
		setShowCountries(countries.slice(0, count));
	}, [countries, count]);

	useEffect(() => {
		if (search) {
			const filtered = countries.filter((country) =>
				country.name.toLowerCase().includes(search.toLowerCase())
			);
			setShowCountries(filtered.slice(0, count));
		} else setShowCountries(countries.slice(0, count));
	}, [search, count, countries]);

	return (
		<div className='home'>
			<Filter setSearch={setSearch} setCountries={setCountries} />
			<div className='home__countries'>
				{showCountries.map((country) => (
					<Card
						key={country.population}
						countryInfo={country}
						setSelectedCountry={setSelectedCountry}
					/>
				))}
			</div>
			<div className='home__footer'>
				{count < countries.length && (
					<button
						className='home__btn'
						onClick={() => setCount((prev) => prev + 8)}
					>
						More Countries <ExpandMoreIcon />
					</button>
				)}
				{count > 8 && (
					<button className='home__btn' onClick={() => setCount(8)}>
						Show Less <ExpandLessIcon />
					</button>
				)}
			</div>
		</div>
	);
};

export default Home;
