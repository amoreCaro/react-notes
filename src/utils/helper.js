function validateEmail(email) {
    // Regular expression to match general email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email against the regex pattern and return the result
    return emailRegex.test(email);
}

export default validateEmail;