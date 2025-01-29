import React, { useState } from 'react';
import './Register.css';

const Register = () => {
    const [formData , setFormData] = useState({
        username : '',
        email : '',
        password : ''
    });
    function onChangeHandle (event){
        const {name, value} = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }
    function handleFormData (e) {
        e.preventDefault();
        setFormData({
            username : '',
            email : '',
            password : ''
        })
        console.log(formData);
    }
    return (
        <div className="register-container">
            <form className="register-form" onSubmit={handleFormData}>
                <h2>Register</h2>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        onChange={onChangeHandle}
                        type="text"
                        id="username"
                        name="username"
                        required
                        value={formData.username}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        onChange={onChangeHandle}
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        onChange={onChangeHandle}
                        type="password"
                        id="password"
                        name="password"
                        required
                        value={formData.password}
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;