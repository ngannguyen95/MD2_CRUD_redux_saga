import { USER_SUCCESS } from "../constants/actionTypes";

const initialState = [];
export const users = (state = initialState, action) => {
    switch (action.type) {
        case USER_SUCCESS:
            // Xử lí chơ trường hợp gọi api get thành công
            //data cần lưu trữ ở store của redux: action.payload
            return [...action.payload];
        default:
            return state;
    }
}