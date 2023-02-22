import { instances } from "./axios"
//8. xây dựng các Service để gọi api- xử lí bất đồng bộ
export const USER_GET_SERVICE = async () => {
    //9. gọi và đợi kết quả trả về-->..3001/students
    let response = await instances.get("users");
    //10. trả về danh sách student
    return response.data;
}
export const USER_POST_SERVICE = async (newUser) => {
    await instances.post("users", newUser);
}
export const USER_PATCH_SERVICE = async (updateUser) => {
    await instances.patch("users/" + updateUser.id, updateUser)
}
export const USER_DELETE_SERVICE = async (id) => {
    await instances.delete("users/" + id);
}
