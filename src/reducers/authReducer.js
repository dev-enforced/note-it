const initialAuthState = {
    isLoggedIn: false,
    authToken: ""
}
const authReducer = (authStateProvided, authAction) => {
    const { type, payload } = authAction;
    switch (type) {
        case "LOG-IN":
            return { ...authStateProvided, isLoggedIn: true, authToken: payload.encodedToken, ...payload.foundUser }
        case "SIGN-OUT":
            return { ...initialAuthState }
        case "SIGN-UP":
            return { ...authStateProvided, isLoggedIn: true, authToken: payload.encodedToken, ...payload.createdUser }
        default:
            return authStateProvided
    }
}

export { authReducer,initialAuthState };