import axios from "axios";
//7. khởi tạo 1 đối tượng axios từ đường dẫn cả API
export const instances = axios.create({
    baseURL: "http://localhost:3001/"
})