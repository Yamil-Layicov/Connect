import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './login.module.css'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const navigate = useNavigate()

    const[logins,setLogins] = useState('')
    const[user,setUser] = useState('')
    const[parol,setParol] = useState('')


    const handleLogin = () => {
        user == "Yamil" && parol == '12345' ? navigate('/admin') : alert("duzgun daxil ele")
    }


  return (
    <>
        <div className="row">
            <div className="offset-lg-3 col-lg-6" style={{ marginTop: '100px' }}>
                <form  className="container">
                    <div className="card">
                        <div className="card-header">
                            <h2>Istifadəçi girişi</h2>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>Istifadəçi adını daxil edin<span className="errmsg">*</span></label>
                                <input onChange={(e) => setUser(e.target.value)} className="form-control"></input>
                            </div>
                            <div className="form-group formLogin">
                                <label><span className="errmsg">Parolu daxil edin*</span></label>
                                <input onChange={(e) => setParol(e.target.value)} type="password"  className="form-control"></input>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary" onClick={handleLogin}>Daxil ol</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Login