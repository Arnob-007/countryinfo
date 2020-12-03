import SearchIcon from "@material-ui/icons/Search";
import "./Filter.css";

const Filter = ({ setSearch, setCountries }) => {
	const randomize = (info) => {
		for (let i = info.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			let temp = info[i];
			info[i] = info[j];
			info[j] = temp;
		}
		return info;
	};

	const regionChange = (e) => {
		const reg = e.target.value;

		if (reg !== "Worldwide") {
			fetch(`https://restcountries.eu/rest/v2/region/${reg.toLowerCase()}`)
				.then((data) => data.json())
				.then((info) => setCountries(randomize(info)))
				.catch((err) => console.log(err));
		} else {
			fetch("https://restcountries.eu/rest/v2/all")
				.then((data) => data.json())
				.then((info) => setCountries(randomize(info)))
				.catch((err) => console.log(err));
		}
	};

	return (
		<div className='filter'>
			<div className='filter__box'>
				<SearchIcon />
				<input
					name='search'
					onChange={(e) => setSearch(e.target.value)}
					className='filter__input'
					placeholder='Search for a country...'
				/>
			</div>
			<select
				title='Filter by Region'
				className='filter__select'
				onChange={regionChange}
				name='Filter by Region'
			>
				<option>Worldwide</option>
				<option>Africa</option>
				<option>Americas</option>
				<option>Asia</option>
				<option>Europe</option>
				<option>Oceania</option>
			</select>
		</div>
	);
};

export default Filter;
