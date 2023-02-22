import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { act_create_user } from '../redux/acition';
import { useNavigate } from 'react-router-dom';

export default function NewUser() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // khai báo các state lwuu trữ thông tin bên trong NewUser
    const [email, setEmail] = useState();
    const [password, setPasword] = useState();
    const [fullName, setFullName] = useState();
    const handleCreate = () => {
        dispatch(act_create_user({ email, password, fullName }));
        navigate("/");
    }
    return (
        <div>
            <h2>Create New User</h2>
            <label htmlFor='email'>Email</label><br />
            <input id='email' name='email' onChange={(e) => setEmail(e.target.value)}></input><br />
            <label htmlFor='password'>Password</label><br />
            <input id='password' name='pasword' onChange={(e) => setPasword(e.target.value)}></input><br />
            <label htmlFor='fullName'>Full Name</label><br />
            <input id='fullName' name='fullName' onChange={(e) => setFullName(e.target.value)}></input><br />
            <button onClick={handleCreate}>Create</button>
        </div>
    )
}
