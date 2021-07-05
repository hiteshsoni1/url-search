import { useState } from 'react';
import './login.css';
import mockLogin from '../../mockLogin';
const Login = (props) => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const onChange = (e, setValue) => {
        setValue(e.target.value)
        error && setError(false)
    }
    const resetInput = () => {
        setPassword('');
        setUserName('')
    }
    const login = () => {
        let loginSuccess = mockLogin.login(userName, password);
        if (loginSuccess) {
            props.history.push('/');
        } else {
            setError(true);
            resetInput();
        }
    }
    return <div className="login">
        <div className="login-form">
            <img src="./logo.png" className="logo" />
            <input className="login-credential"
                type="text" placeholder="Username"
                value={userName}
                onChange={e => onChange(e, setUserName)}
            />
            <input className="login-credential"
                type="password" placeholder="Password"
                value={password}
                onChange={e => onChange(e, setPassword)}
            />
            <button className="login-button" onClick={login}>Login</button>
            {error && <div style={{ color: 'red' }}>Username or Password is incorrect</div>}
        </div>
    </div>
}
export default Login;