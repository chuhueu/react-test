// import axios from "../axios";
// import { loginStart, loginSuccess, loginFailed } from "./userSlice";

// export const login = async (user, dispatch) => {
//     dispatch(loginStart());
//     try {
//         const res = await axios.post("/auth/login", user);
//         dispatch(loginSuccess(res.data));
//     } catch (error) {
//         dispatch(loginFailed());
//     }
// }