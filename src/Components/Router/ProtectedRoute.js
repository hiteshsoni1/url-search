import { Route, Redirect } from 'react-router-dom';
import mockLogin from '../../mockLogin';
const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (mockLogin.isLogin()) {
                    if ("/login" === rest.path) {
                        return <Redirect to="/" />
                    }
                    return <Component {...props} />
                } else {
                    if ("/login" === rest.path) {
                        return <Component {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }
            }
            }
        />
    )
}

export default ProtectedRoute;