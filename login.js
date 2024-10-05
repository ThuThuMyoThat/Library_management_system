const wrapper = document.querySelector(".wrapper");
const registerLink = document.querySelector(".register-link");
const loginLink = document.querySelector(".login-link");
const logoinBtn=document.querySelector(".login-btnPopup");
const close=document.querySelector(".close");


registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

logoinBtn.addEventListener('click', () => {
    wrapper.classList.add('active-Popup');
})
close.addEventListener('click', () => {
    wrapper.classList.remove('active-Popup');
});

document.getElementById('loginButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default form submission
    window.location.href = 'index.html'; // Check the correct filename
});
