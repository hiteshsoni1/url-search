import Input from "../Input/Input"
import mockLogin from "../../mockLogin";
import './header.css'
const Header = ({ userName, handleUrls, history }) => {
    const onLogout = () => {
        mockLogin.logout();
        history.push('/login');
    }
    return <div className="header">
        <div className="left">

            <div className="user-name">
                <img src="./user.png" height={40} style={{ marginRight: '5px' }} />
                <span>{userName}</span></div>
            <Input handleUrls={handleUrls} side="left" />
        </div>
        <div className="right">
            <Input handleUrls={handleUrls} side="right" />
            <button className="log-out" onClick={onLogout}>Logout</button>
        </div>
    </div>
}
export default Header