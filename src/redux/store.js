import { createStore, applyMiddleware } from "redux";
import { rootReducer } from './reducers/index'
import createReduxMiddleware from 'redux-saga';
import { rootSaga } from "../saga/index.js";

// tạo đối tượng redux-saga của ứng dụng
const sagaMiddleware = createReduxMiddleware();
// tạo store và chấp  nhận sagaMiddleware là middleware của store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// chạy rootSaga để lọc các action 
sagaMiddleware.run(rootSaga);
export default store;