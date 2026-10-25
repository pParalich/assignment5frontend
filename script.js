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

// Part 3: add and remove list items using DOM
const hobbyList = document.getElementById("hobby-list");
const hobbyInput = document.getElementById("new-hobby");
const listMessage = document.getElementById("list-message");

function showHobbies() {
  hobbyList.innerHTML = "";
  for (let i = 0; i < userProfile.hobbies.length; i++) {
    const item = document.createElement("li");
    item.textContent = userProfile.hobbies[i];
    hobbyList.appendChild(item);
  }
  document.getElementById("profile-count").textContent = userProfile.hobbies.length;
}

document.getElementById("add-btn").addEventListener("click", function() {
  const newHobby = hobbyInput.value.trim();
  if (newHobby === "") {
    listMessage.textContent = "Enter a hobby first.";
    return;
  }

  userProfile.hobbies.push(newHobby);
  showHobbies();
  hobbyInput.value = "";
  listMessage.textContent = "Hobby added!";
});

document.getElementById("remove-btn").addEventListener("click", function() {
  if (userProfile.hobbies.length === 0) {
    listMessage.textContent = "The list is already empty.";
    return;
  }

  userProfile.hobbies.pop();
  showHobbies();
  listMessage.textContent = "Last hobby removed!";
});

showProfile();
showHobbies();
