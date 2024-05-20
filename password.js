function checkPassword() {
    const enteredPassword = document.getElementById('password').value;
    const correctPassword = 'TbLthegod';

    if (enteredPassword === correctPassword) {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('protected-content').style.display = 'block';
    } else {
        document.getElementById('error-message').innerText = 'Incorrect password. Please try again.';
        document.getElementById('error-message').style.display = 'block';
    }
}
