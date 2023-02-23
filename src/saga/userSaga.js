import * as userServiece from "../api/userServiece";
import { call, put } from 'redux-saga/effects';
import { act_user_succsess } from "../redux/acition";
import * as actionTypes from "../redux/constants/actionTypes";

//6. các saga kết nối và làm việc service
export const USER_SAGA_GET = function* (action) {
    console.log('action trog user saga', action);
    try {
        let ListUser;
        switch (action.type) {
            case actionTypes.USER_SEARCH:
                // call(functionName, argument of function)
                ListUser = yield call(userServiece.USER_SEARCH_SERVICE, action.payload)
                break;
            // success --> gọi action --> put(action)
            case actionTypes.USER_SORT:
                ListUser = yield call(userServiece.USER_SORT_SERVICE, action.payload)
                // console.log('action play usersaga: ', action.payload);
                // console.log('Dữ liệu trong UserSaga: ', ListUser);
                break;
            default:
                ListUser = yield call(userServiece.USER_GET_SERVICE)
        }
        yield put(act_user_succsess(actionTypes.USER_SUCCESS, ListUser));
    } catch (error) {
        console.log("Lôix bắn ra từ userSaga ==>", error);
    }
}
export const USER_SAGA_POST = function* (action) {
    try {
        // gọi sang service để thêm mới 1 user
        yield call(userServiece.USER_POST_SERVICE, action.payload);
        // thêm mới thành công ==> USER_SAGAGE_GET
        yield USER_SAGA_GET();
    } catch (error) {
        console.log("error", error);
    }
}
export const USER_SAGA_PATCH = function* (action) {
    try {
        yield call(userServiece.USER_PATCH_SERVICE, action.payload);
        yield USER_SAGA_GET();
    } catch (error) {
        console.log("error", error);
    }
}
export const USER_SAGA_DELETE = function* (action) {
    try {
        yield call(userServiece.USER_DELETE_SERVICE, action.payload);
        yield USER_SAGA_GET();
    } catch (error) {
        console.log("error", error);
    }
}