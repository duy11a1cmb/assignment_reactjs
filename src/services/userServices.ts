import * as http from "http";
import {USER} from "../constants/mockData/userData.mock";
import {DetailUser, FilterTable} from "../models/userModel";
import {URLS} from "../constants/urls";
import baseAPI from "./baseAPI";

const getListUser = async () => {
    return await baseAPI.get('users')
}
const getDetailUserById = async (id:number) =>{
    return await baseAPI.get(`users/${id}`)
}
export {getListUser,getDetailUserById}