// SIGNUP
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();
    const message = document.getElementById("signupMessage");

    if (name && email && password.length >= 6) {
      const user = { name, email, password };
      localStorage.setItem("avengersUser", JSON.stringify(user));
      message.textContent = "✅ Signup successful! Redirecting to login...";
      message.style.color = "limegreen";
      setTimeout(() => {
        window.location.href = "login.html";
      }, 1500);
    } else {
      message.textContent = "❌ Please fill all fields correctly!";
      message.style.color = "tomato";
    }
  });
}

// LOGIN
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    const message = document.getElementById("loginMessage");

    const storedUser = JSON.parse(localStorage.getItem("avengersUser"));

    if (storedUser && email === storedUser.email && password === storedUser.password) {
      localStorage.setItem("isLoggedIn", "true");
      message.textContent = "✅ Login successful! Redirecting...";
      message.style.color = "limegreen";
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1000);
    } else {
      message.textContent = "❌ Invalid email or password!";
      message.style.color = "tomato";
    }
  });
}
// On index.html: show welcome message if logged in
const welcome = document.getElementById("welcomeMessage");
if (welcome && localStorage.getItem("isLoggedIn") === "true") {
  const user = JSON.parse(localStorage.getItem("avengersUser"));
  welcome.textContent = `Welcome, ${user.name}!`;
}
function logout() {
  localStorage.setItem("isLoggedIn", "false");
  window.location.href = "login.html";
}
