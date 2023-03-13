import { CREATE_USER } from "../Constants/Action.type";

const initialState = {
    formUser : []
}

const FormuserReducer = (state= initialState,action) => {

    switch(action.type){

        case CREATE_USER :
            return {
                ...state,
                formUser : [...state.formUser , action.payload]
            };
            break;
        default:
            return state;
    }
}

export default FormuserReducer