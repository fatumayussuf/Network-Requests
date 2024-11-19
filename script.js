// Replace with your OpenWeatherMap API key
const apiKey = '5c5787b2-a693-11ef-a0d5-0242ac130003-5c57882a-a693-11ef-a0d5-0242ac130003';  // Don't forget to replace this with your actual API key

// Function to fetch weather data
function getWeather() {
    const city = document.getElementById('city').value.trim(); // Get city name
    if (!city) {
        alert('Please enter a city name.');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) { // Check if the response status is OK (200)
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            // Check if data contains the correct code (200)
            if (data.cod === 200) {
                // Update the UI with weather information
                document.getElementById('location').textContent = `Location: ${data.name}, ${data.sys.country}`;
                document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
                document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
            }
        })
        .catch(error => {
            // Handle any errors (such as city not found)
            alert(error.message || 'An error occurred while fetching weather data.');
        });
}
