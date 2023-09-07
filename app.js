var currentDate = new Date();

var dateOptions = {
  day: "numeric",
  weekday: "long",
  year: "numeric",
  month: "long",
};

var timeOptions = {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  timeZoneName: "short",
};

var formattedDate = currentDate.toLocaleDateString("en-US", dateOptions);
var formattedTime = currentDate.toLocaleTimeString("en-US", timeOptions);

var currentLocalDateElement = document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
);

var currentUTCTimeElement = document.querySelector(
  '[data-testid="currentUTCTime"]'
);

currentLocalDateElement.textContent = formattedDate;
currentUTCTimeElement.textContent = formattedTime;
