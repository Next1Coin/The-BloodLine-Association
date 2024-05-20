async function checkPassword() {
    const enteredPassword = document.getElementById('password').value;

    const response = await fetch('/.netlify/functions/checkPassword', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password: enteredPassword }),
    });

    const result = await response.json();

    if (result.success) {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('protected-content').style.display = 'block';
    } else {
        document.getElementById('error-message').innerText = 'Incorrect password. Please try again.';
        document.getElementById('error-message').style.display = 'block';
    }
}
