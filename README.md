# FE-Capstone-Project-Weather-Dashboard-

# Weather Application

A simple weather application based on a Figma design, fetching data from the OpenWeatherMap API.

## Overview

This project displays current and forecast weather information, aiming to replicate the visual style of the provided Figma design. It uses HTML, CSS, and JavaScript, leveraging the OpenWeatherMap API for weather data.

## Features

- Displays current time and date.
- Fetches weather data for a specified city (configurable in `script.js`).
- Shows current temperature.
- Basic layout and styling based on the Figma design.

**Planned Features (from Figma Design):**

- Dark Mode Toggle
- City Search
- Current Location Weather
- Detailed Current Weather Information (feels like, sunrise/sunset, etc.)
- 5-Day Forecast
- Hourly Forecast

## Getting Started

### Prerequisites

- Web Browser
- Text Editor
- (Optional) Live Server (VS Code)

### Installation

1.  Create `index.html`, `style.css`, and `script.js` files.
2.  Copy the provided HTML, CSS, and JavaScript code into these files.

### Obtaining an OpenWeatherMap API Key

1.  Go to [https://openweathermap.org/](https://openweathermap.org/) and sign up/log in.
2.  Navigate to your profile and find the "API keys" section.
3.  Create and copy a new API key.

### Configuration

1.  Open `script.js`.
2.  Replace `"YOUR_API_KEY"` with your actual API key.
3.  (Optional) Modify the `city` variable to change the default location.

## Usage

1.  Open `index.html` in your browser.
2.  The current time and temperature for the configured city will be displayed. Check the browser console for raw API data.

## Project Structure

weather-app/
├── index.html
├── style.css
├── script.js
└── README.md

## Further Development

- Implement planned features (see "Planned Features").
- Fully integrate API data into the UI.
- Refine styling to match the Figma design precisely.
- Add error handling and responsiveness.
