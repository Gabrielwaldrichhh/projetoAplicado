import {createBrowserRouter} from 'react-router-dom';

import LoginPage from './Pages/LoginPage/LoginPage';
import Index from './Pages/Index/Index';
import Register from './Pages/Register/Register';

const routes = createBrowserRouter([
    {
        path:"/:user/home",
        element:(<Index/>)
    },
    {
        path:"/",
        element:(<LoginPage/>)
    },
    {
        path:"/register",
        element:(<Register/>)
    }
])

export {routes};