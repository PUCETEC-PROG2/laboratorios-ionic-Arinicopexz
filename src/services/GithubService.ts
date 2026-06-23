import axios from "axios";
import { Repository } from "../Interfaces/Repository";
import { GithubUser } from "../Interfaces/GithubUser";

const GITHUB_API_URL= import.meta.env.VITE_GITHUB_API_URL || "https://api.github.com";
const GITHUB_API_TOKEN= import.meta.env.VITE_GITHUB_API_TOKEN;

const apiClient = axios.create({
    baseURL: GITHUB_API_URL,
    headers: {
        Authorization: `Bearer ${GITHUB_API_TOKEN}`,
        Accept: "application/vnd.github.v3+json"
    }
});

export const fetchRepositories = async () : Promise<Repository[]> => {
    try {
        const response = await apiClient.get("user/repos", {
           
            params: {
                sort: "created",
                direction: "desc",
                per_page: 100,
                affiliation: "owner",
                t: Date.now()
            }
        });
        if (response.status !== 200) {
            throw new Error(response.statusText);
        }
        return response.data as Repository[] 
    } catch (error) {
        console.error("Error obteniendo repositorios:", error);
        throw new Error(`${(error as Error).message}`);
    }
}

export const fetchUserInfo = async (): Promise<GithubUser | null> => {
    try{
        const response = await apiClient.get("user");
        if (response.status !==200) {
            throw new Error(`${response.statusText}`);
        }
        return response.data as GithubUser;
    } catch (error) {
        throw new Error(`${(error as Error).message}`)
    }

}