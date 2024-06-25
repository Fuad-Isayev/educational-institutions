import { configureStore } from "@reduxjs/toolkit";

import universitiesSlice from "./universities-slice";
import schoolsSlice from "./schools-slice";
import highSchoolsSlice from "./highschools-slice";

const store = configureStore({
    reducer: {
        universities: universitiesSlice, 
        schools: schoolsSlice,
        highSchools: highSchoolsSlice,
    }
});


export default store;
