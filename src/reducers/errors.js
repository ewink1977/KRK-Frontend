import { GET_ERRORS } from "../constants";

const initalState = {
    msg: {},
    status: null
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case GET_ERRORS:
            return {
                msg: action.payload.msg,
                status: action.payload.status
            }
        ;
        default:
            return state;
    }
}

export default reducer