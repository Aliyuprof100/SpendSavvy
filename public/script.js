document.addEventListener('DOMContentLoaded', function () {
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const closeBtns = document.querySelectorAll('.close');

    // Show the login form when the login button is clicked
    loginBtn.addEventListener('click', function () {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none'; // Hide registration form
    });

    // Show the registration form when the register button is clicked
    registerBtn.addEventListener('click', function () {
        registerForm.style.display = 'block';
        loginForm.style.display = 'none'; // Hide login form
    });

    // Hide forms when the close button is clicked
    closeBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            loginForm.style.display = 'none';
            registerForm.style.display = 'none';
        });
    });

    // Hide forms when clicking outside of them
    window.addEventListener('click', function (event) {
        if (event.target === loginForm || event.target === registerForm) {
            loginForm.style.display = 'none';
            registerForm.style.display = 'none';
        }
    });
});
