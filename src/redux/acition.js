import * as actionTypes from "./constants/actionTypes";
// 2.tạo action để yêu cầu lấy dữ liệu từ json-server
// 3.function =(data)=>( return obj(type,payload))
export const act_get_user = () => {

    return {
        type: actionTypes.USER_GET
    }
}
export const act_user_succsess = (actionType, data) => {
    return {
        type: actionType,
        payload: data
    }
}
export const act_create_user = (newUser) => {
    return {
        type: actionTypes.USER_POST,
        payload: newUser
    }
}
export const act_update_user = (updateUser) => {
    return {
        type: actionTypes.USER_PATCH,
        payload: updateUser
    }
}
export const act_delete_user = (id) => {
    return {
        type: actionTypes.USER_DELETE,
        payload: id
    }
}