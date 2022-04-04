const initialAuthState = {
    isLoggedIn: false,
    authToken: "",
    notes: [],
    archives: []
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
        case "ADD_NOTES":
            return {
                ...authStateProvided,
                notes: [...authStateProvided.notes, {
                    title: payload.title,
                    content: payload.content,
                    createdAt: new Date().toLocaleString()
                }]
            }
        default:
            return authStateProvided
    }
}

export { authReducer, initialAuthState };