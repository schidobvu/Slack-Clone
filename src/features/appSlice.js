import { createSlice } from "@reduxjs/toolkit";

// STATE
const initialState = {
  roomId: null,
};

// MUTATIONS
export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    enterRoom: (state, action) => {
      state.roomId = action.payload.roomId;
    },
  },
});

export const { enterRoom } = appSlice.actions;

// GETTERS
export const selectRoomId = (state) => state.app.roomId;

export default appSlice.reducer;
