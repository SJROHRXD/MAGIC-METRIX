const login = async (username, password) => {
    const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem('authToken', token);
        return token;

    } else {
        const errorData = await response.json();
        throw new Error(errorData.message);
    }
};

export { login };

// User Authorization service with JWT

// This service is used to login a user and store the JWT token in local storage
// The token is used to authenticate the user on protected routes

// The login function takes in a username and password, and makes a POST request to the server
// The server returns a JWT token if the username and password are valid
// The token is stored in local storage and returned to the client
// If the username or password are invalid, an error is thrown