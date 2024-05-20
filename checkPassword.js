// netlify/functions/checkPassword.js
const correctPassword = process.env.CORRECT_PASSWORD;

exports.handler = async (event, context) => {
    const { password } = JSON.parse(event.body);

    // Simple rate limiting example (this can be enhanced)
    const ip = event.headers['x-forwarded-for'] || event.headers['client-ip'] || 'unknown';
    console.log(`Login attempt from IP: ${ip}`);

    if (password === correctPassword) {
        return {
            statusCode: 200,
            body: JSON.stringify({ success: true }),
        };
    } else {
        return {
            statusCode: 401,
            body: JSON.stringify({ success: false }),
        };
    }
};
