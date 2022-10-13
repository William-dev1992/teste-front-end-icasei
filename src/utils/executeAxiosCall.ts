import axios from "axios";

export default async function executeAxiosCall(term: string, endpoint: string) {
    return await axios.get(
        `http://localhost:3000/api/${endpoint}`,
        {
            params: {
                data: term
            }
        }
    );
}