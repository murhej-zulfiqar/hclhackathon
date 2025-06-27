import axios from "./instance.ts";
import type {CurrentUser, UserCredentials} from "../types/userTypes.ts";
import type {AxiosResponse} from "axios";


export const login =  ({username, password}:UserCredentials): Promise<AxiosResponse<CurrentUser>> =>  {
    console.log(username, password);
    return axios.post("/login", {username, password})
}