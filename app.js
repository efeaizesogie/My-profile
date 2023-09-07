function getCurrentUTCTimeMilliseconds() {
  return new Date().getTime();
}

function updateCurrentUTCTimeMilliseconds() {
  const currentUTCTimeMilliseconds = getCurrentUTCTimeMilliseconds();

  // Update the element with data-testid="currentUTCTime"
  const currentUTCTimeElement = document.querySelector(
    '[data-testid="currentUTCTime"]'
  );
  currentUTCTimeElement.textContent = currentUTCTimeMilliseconds;
}
updateCurrentUTCTimeMilliseconds();

setInterval(updateCurrentUTCTimeMilliseconds, 100);

currentDate = new Date();

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];

var currentLocalDateElement = document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
);
currentLocalDateElement.innerHTML = currentDayOfWeek;
