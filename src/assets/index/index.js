import './index.css';
import './reset.css';

// function creates the webage layout
const createLayout = (() => {
	const header = document.createElement('div');
	const logoDiv = document.createElement('div');
	const logoImg = document.createElement('img');
	logoImg.src = '../photo/cloud-clock-outline.svg';
	const logoName = document.createElement('p');
	logoName.textContent = 'Weather.You';
	const searchBar = document.createElement('input');
	searchBar.placeholder = 'Enter your location';
	const searchBtn = document.createElement('button');
	searchBtn.textContent = 'Search';

	const bodyDIv = document.createElement('div');
	const locationText = document.createElement('p');
	const dateTimeDiv = document.createElement('div');
	const datePara = document.createElement('p');
	const timePara = document.createElement('p');

})();
