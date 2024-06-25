export const buildQueryString = (query) => {
    const queryKeys = Object.keys(query);
    let queryString = "";
    queryKeys.map((key, i) => queryString += (i > 0 ? "&" : "?") + key + "=" + query[key]);
    return queryString;
}