import axios from "axios";
import { Repository } from "../Interfaces/Repository";

const GITHUB_API_URL= import.meta.env.VITE_GITHUB_API_URL || "https://api.github.com";
const GITHUB_API_TOKEN= import.meta.env.VITE_GITHUB_API_TOKEN;

export const fetchRepositories = async () : Promise<Repository[]> => {
    try {
        const response = await axios.get(`${GITHUB_API_URL}/user/repos`, {
            headers: {
                Authorization: `Bearer ${GITHUB_API_TOKEN}`
            },
            params: {
                sort: "created",
                direction: "desc",
                per_page: 100,
                affiliation: "owner",
                t: Date.now()
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error obteniendo repositorios:", error);
        return [];
    }
}