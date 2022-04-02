import axios from "axios";
const signupSubmissionHandler = (e, signupData, authDispatch, navigationHelper) => {
    e.preventDefault();
    (async () => {
        try {
            const { data, status } = await axios.post("/api/auth/signup", signupData);
            if (status === 201) {
                authDispatch({ type: "SIGN-UP", payload: data })
                localStorage.setItem("validationToken", data.encodedToken);
                navigationHelper("/noteshome")
            }
        } catch {
            console.error("SIGNUP NOT POSSIBLE")
        }
    })()
}
export {signupSubmissionHandler}