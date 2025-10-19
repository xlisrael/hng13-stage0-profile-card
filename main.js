// Select the UTC time display element
const utcTimeElement = document.getElementById("utcTime");

// Function to update the UTC time every second
function updateUTCTime() {
  const now = new Date();
  const utcString = now.toUTCString();
  utcTimeElement.textContent = `Current Time (UTC): ${utcString}`;
}

// Initial call
updateUTCTime();

// Update every second
setInterval(updateUTCTime, 1000);
