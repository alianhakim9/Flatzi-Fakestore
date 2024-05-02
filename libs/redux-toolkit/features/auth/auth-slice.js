const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  isLoggedIn: false,
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLoggedIn(state, action) {},
    getUser(state, action) {},
  },
});

export const { setIsLoggedIn } = authSlice.actions;
export default authSlice.reducer;
