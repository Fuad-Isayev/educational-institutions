import { createSlice } from "@reduxjs/toolkit";

const highSchoolsslice = createSlice({
    name: "highSchoolsSlice",
    initialState: {
        items: [],
        filterFields: [
            {
                "key": "startOfAcademicYear",
                "type": "date"
            },
            {
                "key": "name",
                "type": "text",
            }
        ],
    },
    reducers: {
        populateData(state, action) {
            state.items = action.payload
        }
    }
})

export const sliceActions = highSchoolsslice.actions;

export default highSchoolsslice.reducer;