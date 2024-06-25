import schoolsAPI from "../../API/endpoints/schools";
import { sliceActions as schoolsActions } from "../schools-slice";

export const fetchAll = (query) => {
    return async (dispatch) => {
        try {
            const response = await schoolsAPI.getAll(query);
            dispatch(schoolsActions.populateData(response.data));
        } catch (error) {
            console.log(error)
        }
    }
}

export const deleteItem = (id) => {
    return async (dispatch) => {
        try {
            await schoolsAPI.delete(id);
            dispatch(fetchAll())
        } catch (error) {
            console.log(error)
        }
    }
}