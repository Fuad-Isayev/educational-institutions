import highSchoolsAPI from "../../API/endpoints/highschools";
import { sliceActions } from "../highschools-slice";

export const fetchAll = (query) => {
    return async (dispatch) => {
        try {
            const response = await highSchoolsAPI.getAll(query);
            dispatch(sliceActions.populateData(response.data));
        } catch (error) {
            console.log(error)
        }
    }
}

export const deleteItem = (id) => {
    return async (dispatch) => {
        try {
            await highSchoolsAPI.delete(id);
            dispatch(fetchAll())
        } catch (error) {
            console.log(error)
        }
    }
}