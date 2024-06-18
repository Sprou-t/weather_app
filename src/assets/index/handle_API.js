async function fetchWeatherData(location) {
	const locationText = document.querySelector('.locationText');
	const dateTimeDiv = document.querySelector('.dateTimeDiv');
	const condition = document.querySelector('.condition');
	const temperature = document.querySelector('.temperature');
	const humidity = document.querySelector('.humidity');

	const apiKey = 'e56b28b9189a4966ab4110204241106';

	try {
		const response = await fetch(
			`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`,
			{
				mode: 'cors',
			}
		);
		const weatherData = await response.json();
		locationText.textContent = `${weatherData.location.name}, ${weatherData.location.country}`;
		dateTimeDiv.textContent = `${weatherData.current.last_updated}`;
		condition.textContent = `Weather: ${weatherData.current.condition.text}`;
		temperature.textContent = `Temp: ${weatherData.current.temp_c}°C`;
		humidity.textContent = `Humidity: ${weatherData.current.humidity}%`;

		// locationText.textContent = weatherData.
	} catch (error) {
		alert('Please key in a valid location!');
	}
}

export default fetchWeatherData;
