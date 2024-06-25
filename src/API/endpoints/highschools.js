import APIClient from "../client";
import { buildQueryString } from "../../utils/helpers";

const highSchoolsAPI = {
    getAll: (query = {}) => {
        const queryString = buildQueryString(query);
        return APIClient.get(`/highschools${queryString}`);
    },
    delete: (id) => {
        return APIClient.delete(`/highschools/${id}`);
    }
}

export default highSchoolsAPI;