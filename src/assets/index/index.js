import './index.css';
import './reset.css';
import logoIcon from '../photo/cloud-clock-outline.svg';

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
	locationText.textContent = 'Kandy,Sri Lanka';
	locationText.classList.add('locationText');
	const dateTimeDiv = document.createElement('div');
	dateTimeDiv.classList.add('dateTimeDiv');
	const datePara = document.createElement('div');
	datePara.textContent = 'Monday, 20th September 2021';
	const timePara = document.createElement('p');
	timePara.textContent = '12:00 PM';
	dateTimeDiv.append(datePara, timePara);
	bodyDiv.append(locationText, dateTimeDiv);

	body.append(header, bodyDiv);
})();
