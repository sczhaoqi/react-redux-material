import Home from 'components/home/Home';
import SignIn from 'components/login/SignIn';
import Login from 'components/login/Login';
import App from 'App';

const BasicRoute = [
    { path: "/", component: Home},
    { path: "/signin", component: SignIn},
    { path: "/login", component: Login},
    { path: "/app", component: App}
];


export default BasicRoute;