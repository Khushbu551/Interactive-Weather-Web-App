// Static Data for wether tips

const weatherTips = {
  Monday: "Stay hydrated in the heat!",
  Tuesday: "Carry an umbrella if it's cloudy!",
  Wednesday: "Carry a jacket, it could be windy.",
  Thursday: "Use sunscreen, UV levels are high.",
  Friday: "Wear light clothes , it's sunny!.",
  Saturday: "Stay warm, it's freezing outside.",
  Sunday: "Avoid outdoor activities, it's stormy!",
};

// Select Dom Elements

const forecastCards = document.querySelectorAll(".weekly-card");
const weatherTipElement = document.querySelector("#weather-tip");

// Add Click Event Listeners to each card

forecastCards.forEach((card) => {
  card.addEventListener("click", () => {
    const selectedDay = card.getAttribute("data-day");
    weatherTipElement.textContent = weatherTips[selectedDay];
  });
});

/////////////////////////////////////////////////////////////////////////

//Get the current time

const now = new Date();
const currentHour = now.getHours();

//Select greeti ng message
const greetingElement = document.querySelector("#greeting-message");

//Set Dynamic greeting based on time
let greetingText = "";

if (currentHour >= 5 && currentHour < 12) {
  greetingText = "Good Moring! It's sunny today.";
} else if (currentHour >= 12 && currentHour < 17) {
  greetingText = "Good Afternoon! Hope you're having a great day.";
} else if (currentHour >= 17 && currentHour < 21) {
  greetingText = "Good Evening! It's a pleasant evening.";
} else {
  greetingText = "good Night! Don't forget to check tomorrow's forecast.";
}

//Update Greeting in Dom

greetingElement.textContent = greetingText;

//////////////////////////////////////////////////////////////////////////////

// Select the Day / Night toggle btn

const toggleButton = document.querySelector("#toggle-mode");

//Add Click Event Listener
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("night-mode");

  if (document.body.classList.contains("night-mode")) {
    toggleButton.textContent = "Switch to Day Mode";
  } else {
    toggleButton.textContent = " Switch to Night Mode";
  }
});

/////////////////////////////////////////////////////////////

const weatherTipsSection = document.querySelector(".weather-tips");

//Define the background images for each day

const dayBackgrounds = {
  Monday: "Images/sunny.jpg",
  Tuesday: "Images/rain.jpg",
  Wednesday: "Images/cloud.jpg",
  Thursday: "Images/sun.jpg",
  Friday: "Images/claudy.jpg",
  Saturday: "Images/snow.jpg",
  Sunday: "Images/wind.jpg",
};

//Add event listeners to each weekly card

const weeklyCards = document.querySelectorAll(".weekly-card");
weeklyCards.forEach((card) => {
  card.addEventListener("click", () => {
    const selectedDay = card.getAttribute("data-day");
    if (dayBackgrounds[selectedDay]) {
      weatherTipsSection.style.backgroundImage = `url('${dayBackgrounds[selectedDay]}')`;
    } else {
      weatherTipsSection.style.backgroundImage = "none";
    }
  });
});
