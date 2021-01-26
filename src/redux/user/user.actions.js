// export const login = (userData) => (dispatch) => {
//   dispatch({
//     type: "LOGIN",
//     payload: userData,
//   });
// };
export const login = (user) => ({
  type: "LOGIN",
  payload: user,
});
// export const logout = () => (dispatch) => {
//   localStorage.removeItem("jwtToken");
//   dispatch({ type: "LOGOUT" });
// };
