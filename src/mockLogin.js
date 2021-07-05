const ADMIN = 'admin';
const USER = 'user'
function MockLogin() {
    this.login = (userName, password) => {
        if (ADMIN === userName && ADMIN === password) {
            localStorage.setItem(USER, userName)
            return true
        }
        return false
    }
    this.logout = () => {
        localStorage.removeItem(USER)
        return true;
    }
    this.isLogin = () => {
        return localStorage.getItem(USER) ? true : false;
    }
}
export default new MockLogin();