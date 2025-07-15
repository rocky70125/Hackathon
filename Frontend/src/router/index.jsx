import Login from '../components/Login';
import Register from '../components/Register';

export const router = [
    {
        path: '/',
        component: <Login/>
    },
    {
        path: '/login',
        component: <Login/>
    },
    {
        path: '/register',
        component: <Register/>
    },
]