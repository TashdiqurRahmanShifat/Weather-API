# 🌦️ Weather App

# Overview
A simple weather application built with **React + Vite** that fetches real-time weather data using the **OpenWeatherMap API**. The app allows users to search for any city and get detailed weather information.

## 🚀 Features

- 🔍 Search weather by city name  
- 🌡️ View temperature (current, min, max)  
- 💧 Humidity and air pressure (in atm)  
- 🌬️ Wind speed  
- 🌤️ Weather description  
- ❌ Error message for invalid cities  

## 🧰 Technologies Used

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Material UI](https://mui.com/)
- [OpenWeatherMap API](https://openweathermap.org/)

## 📦 Installation & Setup

Follow the steps below to run the project locally:

1. Create a new Vite project:  
   `npm create vite@latest`

2. Navigate into the project folder:  
   `cd [project-folder]`

3. Replace all files inside the `src/` folder with the files provided in this repository (like `SearchBox.jsx`, `App.jsx`, etc.).

4. Go back to the project folder

5. Install dependencies:  
   `npm install`

6. Install Material UI and required dependencies:  
   `npm install @mui/material @emotion/react @emotion/styled`

7. Install Roboto font (required by Material UI):  
   `npm install @fontsource/roboto`

8. Install Material Icons:  
   `npm install @mui/icons-material`

9. Run the development server:  
   `npm run dev`

10. Open your browser and go to:  
   `http://localhost:****`

## 🔑 API Key Setup

1. Go to [OpenWeatherMap](https://openweathermap.org/current) and generate a free API key.  
2. Open the `SearchBox.jsx` file.  
3. Replace the default key with your own:

```js
const APIKey = "YOUR_API_KEY_HERE";
```