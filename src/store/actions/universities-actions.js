import universitiesAPI from "../../API/endpoints/universities";
import { sliceActions } from "../universities-slice";

export const fetchAll = (query) => {
    return async (dispatch) => {
        try {
            const response = await universitiesAPI.getAll(query);
            dispatch(sliceActions.populateData(response.data));
        } catch (error) {
            console.log(error)
        }
    }
}

export const deleteItem = (id) => {
    return async (dispatch) => {
        try {
            await universitiesAPI.delete(id);
            dispatch(fetchAll())
        } catch (error) {
            console.log(error)
        }
    }
}