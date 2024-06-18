import './index.css';
import './reset.css';
import logoIcon from '../photo/cloud-clock-outline.svg';
import fetchWeatherData from './handle_API'

const body = document.querySelector('body');
// function creates the webage layout
const createLayout = (() => {
	const header = document.createElement('div');
	header.classList.add('header');
	const logoDiv = document.createElement('div');
	logoDiv.classList.add('logoDiv');
	const logoImg = document.createElement('img');
	logoImg.src = logoIcon;
	const logoName = document.createElement('p');
	logoName.textContent = 'Weather.You';
	const searchDiv = document.createElement('div');
	searchDiv.classList.add('searchDiv');
	const searchBar = document.createElement('input');
	searchBar.placeholder = 'Enter your location';
	const searchBtn = document.createElement('button');
	searchBtn.textContent = 'Search';
	searchDiv.append(searchBar, searchBtn);
	logoDiv.append(logoImg, logoName);
	header.append(logoDiv, searchDiv);

	const bodyDiv = document.createElement('div');
	bodyDiv.classList.add('bodyDiv');

	const locationText = document.createElement('p');
	// locationText.textContent = 'Kandy,Sri Lanka';
	locationText.classList.add('locationText');
	const dateTimeDiv = document.createElement('div');
	dateTimeDiv.classList.add('dateTimeDiv');
	// dateTimeDiv.textContent = '28/06/2024 12:00PM'
	
	//weather condition, temp, humidity
	const weatherDiv = document.createElement('div');
	weatherDiv.classList.add('weatherDiv');
	const condition = document.createElement('p');
	condition.classList.add('condition');
	// condition.textContent = 'cloudy';
	const temperature = document.createElement('p');
	temperature.classList.add('temperature');
	// temperature.textContent = '28dc'
	const humidity = document.createElement('p');
	humidity.classList.add('humidity');
	// humidity.textContent = '40%'
	weatherDiv.append(condition, temperature, humidity);
	bodyDiv.append(locationText, dateTimeDiv,weatherDiv);

	body.append(header, bodyDiv);

	//add event listener to search btn
	searchBtn.addEventListener('click', () => {
		const location = searchBar.value;
		fetchWeatherData(location);
		searchBar.value = '';
	})
})();

