const baseUrl = "http://localhost:3000/user";

const fetchData = async (id, param) => {
    let url = param ? baseUrl + `/${id}/${param}/` : baseUrl + `/${id}/`;
    const response = await fetch(url)
    const data = await response.json();
    return data;
}

export default fetchData;