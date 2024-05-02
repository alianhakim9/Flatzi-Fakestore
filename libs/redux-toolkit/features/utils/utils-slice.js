const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  showToast: false,
};

const utilSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    showToast: (state, action) => {
      state.showToast = true;
    },
    hideToast: (state, action) => {
      state.showToast = false;
    },
  },
});

export const { showToast, hideToast } = utilSlice.actions;
export default utilSlice.reducer;
