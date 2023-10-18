import * as http from "http";
import {USER} from "../constants/mockData/userData.mock";
import {DetailUser} from "../constants/modal";

const getListUser = () => {
    return new Promise((resolve, reject) => {
        resolve(USER)
    })
}

const getDetailUserById = (id:number|string): Promise<DetailUser | undefined > =>{
    const detailUser:DetailUser | undefined = USER.find((user:any)=>user.id.toString() === id.toString());
    return new Promise((resolve, reject) => {
        if(detailUser){
            resolve(detailUser)
        }else{
            reject()
        }
    })
}

export const userServices = {getListUser,getDetailUserById}