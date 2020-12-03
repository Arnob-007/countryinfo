import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import numeral from "numeral";
import "./Country.css";

const Country = ({ country, setSelectedCountry }) => {
	const {
		flag,
		name,
		nativeName,
		population,
		region,
		capital,
		subregion,
		languages,
		topLevelDomain,
		currencies,
		borders,
	} = country;

	return (
		<div className='country'>
			<button onClick={() => setSelectedCountry(null)} className='country__btn'>
				<ArrowBackIcon /> Back
			</button>
			<div className='country__body'>
				<img className='country__flag' src={flag} alt='' />
				<div className='country__data'>
					<h2>{name}</h2>
					<div className='country__dataparts'>
						<div className='country__datapart'>
							<span>
								<b>Native Name: </b>
								{nativeName}
							</span>
							<span>
								<b>Population: </b> {numeral(population).format("0.1a")}
							</span>
							<span>
								<b>Region: </b>
								{region}
							</span>
							<span>
								<b>Sub Region: </b>
								{subregion}
							</span>
							<span>
								<b>Capital: </b>
								{capital}
							</span>
						</div>
						<div className='country__datapart'>
							<span>
								<b>Top Level Domain: </b>
								{topLevelDomain}
							</span>
							<span>
								<b>Currencies: </b> {currencies.map((item) => `${item.name} `)}
							</span>
							<span>
								<b>Languages: </b>
								{languages.map((item) => `${item.name} `)}
							</span>
						</div>
					</div>
					<div className='country__footer'>
						<b>Border Countries: </b>
						{borders.map((item) => (
							<button key={item} className='country__btn'>
								{item}
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Country;
