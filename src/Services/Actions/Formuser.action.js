import { CREATE_USER } from "../Constants/Action.type"
import api from "../../Apis/Apis"

export const createUserAction = (data) => {
    return{
        type : CREATE_USER,
        payload : data
    }
}

export const CreateUserActionAcync = (data) => {
    console.log("data",data);
    return async dispatch => {
        await api.post("/users",data)
        dispatch(createUserAction(data))
    }
}