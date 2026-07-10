import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  doctor_name: "",
  meeting_type: "",
  meeting_date: "",
  meeting_time: "",
  topics: "",
  summary: "",
  sentiment: "",
  outcome: "",
  followup: "",
};

const interactionSlice = createSlice({
  name: "interaction",
  initialState,
  reducers: {
    setInteraction(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },

    clearInteraction() {
      return initialState;
    },
  },
});

export const { setInteraction, clearInteraction } =
  interactionSlice.actions;

export default interactionSlice.reducer;