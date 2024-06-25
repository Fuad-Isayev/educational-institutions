import { createSlice } from "@reduxjs/toolkit";

const universitiesSlice = createSlice({
    name: "universitiesSlice",
    initialState: {
        items: [],
        filterFields: [
            {
                "key": "founded",
                "type": "number"
            },
            {
                "key": "region",
                "type": "select",
                "options": [
                    "North",
                    "South",
                    "East",
                    "West"
                ]
            }
        ],
    },
    reducers: {
        populateData(state, action) {
            state.items = action.payload
        }
    }
})

export const sliceActions = universitiesSlice.actions;

export default universitiesSlice.reducer;