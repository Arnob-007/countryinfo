import numeral from 'numeral'
import "./Card.css";

const Card = ({ countryInfo, setSelectedCountry }) => {
	const { flag, name, population, region, capital } = countryInfo;

	return (
		<div onClick={() => setSelectedCountry(countryInfo)} className='card'>
			<img className='card__flag' src={flag} alt=' ' />
			<div className='card__info'>
				<h5 className='card__title'>
					{name.length > 18 ? `${name.substring(0, 12)}...` : name}
				</h5>
				<div>
					<b>Population: </b> {numeral(population).format('0.11a')}
				</div>
				<div>
					<b>Region:</b> {region}
				</div>
				<div>
					<b>Capital:</b> {capital}
				</div>
			</div>
		</div>
	);
};

export default Card;
