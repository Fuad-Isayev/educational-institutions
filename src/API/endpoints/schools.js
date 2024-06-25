import APIClient from "../client";
import { buildQueryString } from "../../utils/helpers";


const schoolsAPI = {
    getAll: (query = {}) => {
        const queryString = buildQueryString(query);
        return APIClient.get(`/schools${queryString}`);
    },
    delete: (id) => {
        return APIClient.delete(`/schools/${id}`);
    }
}

export default schoolsAPI;