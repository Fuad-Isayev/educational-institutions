import APIClient from "../client";
import { buildQueryString } from "../../utils/helpers";

const universitiesAPI = {
    getAll: (query = {}) => {
        const queryString = buildQueryString(query);
        return APIClient.get(`/universities${queryString}`);
    },
    delete: (id) => {
        return APIClient.delete(`/universities/${id}`);
    }
}

export default universitiesAPI