const baseUrl = "http://localhost:3000/user";

/**
 * Fetch the current user's data from API
 * @param {number} id user id
 * @param {string} param the optional route of the API request (for categories)
 * @returns a promise which contain fetch data of the current user
 */
const fetchData = async (id, param) => {
    const url = param ? baseUrl + `/${id}/${param}/` : baseUrl + `/${id}/`;
    const response = await fetch(url)
    const data = await response.json();
    return data;
}

export default fetchData;