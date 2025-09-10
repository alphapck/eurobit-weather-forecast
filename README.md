## EurOrbit – European Weather Forecast

A simple and interactive 7-day weather forecast website for major European cities, powered by the 7Timer AP. 
This project demonstrates API integration, data processing, and front-end development using HTML, CSS, and JavaScript
-----------

# Features
-- Select a city from a preloaded dropdown (CSV with lat/lon coordinates).
-- Fetch real-time 7-day weather forecasts using the 7Timer API
-- Day & night weather icons for clear, cloudy, rainy, and snowy conditions.
-- Responsive, card-based layout displaying: date & time, weather condition temperature ((°C), wind speed (m/s).
-- Error handling for failed API requests.


## Tech Stack
-- HTMLS - structure of the page
-- CSS3 - styling and responsive design
-- JavaScript - API calls, data processing, and DOM manipulation
-- CSV dataset - Preloaded city coordinates (latitude & longitude)
-- 7Timer API - Free weather forecast service (no API key reuired)

# Demo Preview
// UI with city selection
// Forecast Display

-----------------

## How It Works
i. User selects a city from dropdown menu,
ii. The app retrieves the latitude and longitude from the CSV file,
iii. A fetch request is sent to the 7Timer API: http://www.7timer.info/bin/api.pl?lon={lon}&lat={lat}&product=civil&output=json
iv. The API returns a JSON response containing weather data,
v. JavaScript parses and displays the forecast in card.

# Project Structure

📁 EurOrbit
 ├── 📄 index.html           * Webpage structure
 ├── 📄 master.css           * Styling rules
 ├── 📄 main.js              * JavaScript logic (API calls, DOM updates)
 ├── 📄 city_coordinates.csv * European city coordinates
 └── 📄 README.md            * Project documentation

 ## Objectives

 -- Provide ability for website users to look up 7-day forecasts for major European cities.
 -- Engage visitors with interactive UI and weather data.
 -- Encourage users to stay longer and explore (applicable for tourism or booking sites).


 ## My Approach

/ I started by designing the UI in HTML and CSS.
/ Used a CSV dataset to prepopulate the dropdown with European cities.
/ Connected the app to the 7Timer! API using JavaScript’s fetch().
/ Styled forecast cards for a modern and clean look.
/ Tested with multiple cities to ensure accuracy and consistency.


-------------------

## Setup Instructions

i. Clone the app: git clone https://github.com/alphapck/eurorbit-weather.git
ii. Navigate into the project: cd eurorbit-weather
iii. Open index.html in your browser (No API key reuired—runs fully client-side)


# Future Improvements

-- Add search bar to look up any city globally.
-- Show hourly forecasts for more detail
-- Integrate geolocation API to detect user's location automatically
-- Add weather icons


-------------------

## Contact
LinkedIn: https://www.linkedin.com/in/victor-njoku-6b7a6125a/
Github Repository: https://github.com/alphapck/eurobit-weather-forecast
