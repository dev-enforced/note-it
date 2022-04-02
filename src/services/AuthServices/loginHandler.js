import axios from "axios";
const loginSubmissionHandler = (e, loginData, authDispatch, navigationHelper) => {
    e.preventDefault();
    (async () => {
        try {
            const { data, status } = await axios.post("/api/auth/login", loginData);
            if (status === 200) {
                authDispatch({ type: "LOG-IN", payload: data });
                localStorage.setItem("validationToken", data.encodedToken);
                navigationHelper("/noteshome")
            }
        } catch {
            console.error("LOGIN NOT POSSIBLE")
        }
    })()
}

export { loginSubmissionHandler }