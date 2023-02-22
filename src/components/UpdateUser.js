import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { act_update_user } from '../redux/acition';
import { useNavigate } from 'react-router-dom';

export default function UpdateUser() {
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [id, setId] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userUpdate"));
        setEmail(user.email);
        setFullName(user.fullName);
        setId(user.id)
    }, []);
    const handleUpdate = () => {
        dispatch(act_update_user({ id, email, fullName }));
        navigate("/");
    }
    return (
        <div>
            <h2>Update User</h2>
            <label htmlFor='userId'>Id</label><br />
            <input id='userId' name='userId' value={id} onChange={(e) => setId(e.target.value)} readOnly></input><br />
            <label htmlFor='email'>Email</label><br />
            <input id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}></input><br />
            <label htmlFor='fullName'>Full Name</label><br />
            <input id='fullName' name='fullName' value={fullName} onChange={(e) => setFullName(e.target.value)}></input><br />
            <button onClick={handleUpdate}>Create</button>
        </div>
    )
}
