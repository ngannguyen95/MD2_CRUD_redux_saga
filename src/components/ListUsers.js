import React, { useEffect } from 'react'
import { act_delete_user, act_get_user } from '../redux/acition';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function ListUsers() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // 4. GỌI action act_get_user khi components mount
    //useEffect 
    /*
    useEffect(callback): gọi khi mount và re-render
    useEffect(callback,[]): gọi khi mount 
    useEffect(callback,[deps]): gọi khi mount và deps thay đổi
    */
    useEffect(() => {
        //5. thực hiện khi components mount
        dispatch(act_get_user())
    }, []);
    const handleUpdate = (userUpdate) => {
        localStorage.setItem("userUpdate", JSON.stringify(userUpdate));
        // chuyển sang UpdateUser Component 
        navigate("/updateUser");
    }
    const handleDelete = (id) => {
        dispatch(act_delete_user(id));
    }
    // lấy statee từ store và hiển thị ên components
    const listUser = useSelector(state => state.users);
    let elementListUser = listUser.map((user, index) => {
        return <tr key={user.id}>
            <td>{index + 1}</td>
            <td>{user.id}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>{user.fullName}</td>
            <td>
                <button onClick={() => handleUpdate(user)}>Update</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
            </td>
        </tr>
    })

    return (
        <div>
            <h2>ListUsers</h2>
            <table border={"1"}>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>User Id</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>FullName</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {elementListUser}
                </tbody>
            </table>
            <button onClick={() => navigate("/newUser")}>Create New User</button>
        </div>
    )
}
