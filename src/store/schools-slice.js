import { createSlice } from "@reduxjs/toolkit";

const schoolsSlice = createSlice({
    name: "schoolsSlice",
    initialState: {
        items: [],
        filterFields: [
            {
                "key": "name",
                "type": "text"
            },
            {
                "key": "student_count",
                "type": "number"
            }
        ],
    },
    reducers: {
        populateData(state, action) {
            state.items = action.payload
        }
    }
})

export const sliceActions = schoolsSlice.actions;

export default schoolsSlice.reducer;