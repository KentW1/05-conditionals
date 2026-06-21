
// Wait until the page has loaded before running our code
document.addEventListener('DOMContentLoaded', function() {
  
	// Get references to the form and the suggestion display area
	const form = document.getElementById('weatherForm');
	const suggestionEl = document.getElementById('suggestion');

	// When the form is submitted, build and show a suggestion message
	form.addEventListener('submit', function(event) {
		event.preventDefault(); // prevent the page from reloading

		// Read user inputs
		const weather = document.getElementById('weather').value;
		const tempInput = document.getElementById('temperature').value;
		const temperature = tempInput === '' ? null : Number(tempInput);

		// If nothing is provided, ask the user to enter something
		if (!weather && temperature === null) {
			suggestionEl.innerHTML = '<p>🌤️ Please choose a weather or enter a temperature.</p>';
			return;
		}

		// Build a suggestion based on the weather and temperature
		let message = '';

		if (!weather) {
			// No weather selected, use temperature only
			if (temperature <= 32) {
				message = 'Brr... it\'s freezing! Wear a heavy coat, hat, and gloves 🧥❄️🧤';
			} else if (temperature <= 60) {
				message = 'A light jacket should do — consider a sweater 🧥☁️';
			} else {
				message = 'Warm weather! Shorts and sunglasses are perfect 😎🩳';
			}
		} else {
			// Suggestion based on selected weather
			if (weather === 'sunny') {
				message = 'Sunny — bring sunglasses and sunscreen 😎🧴';
				if (temperature !== null && temperature > 90) {
					message += ' — and a water bottle 🥤';
				}
			} else if (weather === 'cloudy' || weather === 'rainy') {
				message = `It's ${weather}! A light jacket might be a good idea. ☁️🧥`;
			} else if (weather === 'snowy') {
				message = 'Snowy — bundle up: coat, hat, scarf, and gloves ❄️🧣🧤';
			} else if (weather === 'windy') {
				message = 'Windy — wear layers and secure loose items 🍃🧥';
			} else {
				message = 'Dress comfortably and enjoy your day 🙂';
			}
		}

    // If it's also cold, recommend a warm jacket
    if (temperature !== null && temperature < 50) {
      message += ' Also, it\'s below 50°F — consider a warm jacket 🧣🧥';
    }

		// Display the final message to the user
		suggestionEl.innerHTML = `<p>${message}</p>`;
	});
});
