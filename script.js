// Part 1: an object with different data types
const userProfile = {
  name: "Mansur",
  birthYear: 2005,
  isDeveloper: false,
  hobbies: ["Football", "Music", "Gaming"]
};

function showProfile() {
  const currentYear = new Date().getFullYear();
  const age = currentYear - userProfile.birthYear;
  const months = age * 12;

  document.getElementById("profile-name").textContent = userProfile.name;
  document.getElementById("profile-year").textContent = userProfile.birthYear;
  document.getElementById("profile-age").textContent = age;
  document.getElementById("profile-months").textContent = months;
  document.getElementById("profile-developer").textContent = userProfile.isDeveloper ? "Yes" : "No";
  document.getElementById("profile-count").textContent = userProfile.hobbies.length;

  console.log("Profile:", userProfile);
  console.log("Age:", age, "Months (approx.):", months);
}

// Part 2: update the object when the form is submitted
const profileForm = document.getElementById("profile-form");

profileForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("username").value.trim();
  const birthYear = Number(document.getElementById("birth-year").value);
  const currentYear = new Date().getFullYear();

  if (name === "" || birthYear < 1900 || birthYear > currentYear) {
    document.getElementById("message").textContent = "Please enter a valid name and birth year.";
    return;
  }

  userProfile.name = name;
  userProfile.birthYear = birthYear;
  showProfile();
  document.getElementById("message").textContent = "Profile updated!";
});


showProfile();
