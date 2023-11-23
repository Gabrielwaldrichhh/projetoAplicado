import {createBrowserRouter} from 'react-router-dom';

import LoginPage from './Pages/LoginPage/LoginPage';
import Index from './Pages/Index/AddEventPage';

const routes = createBrowserRouter([
    {
        path:"/home",
        element:(<Index/>)
    },
    {
        path:"/",
        element:(<LoginPage/>)
    },
])

export {routes};