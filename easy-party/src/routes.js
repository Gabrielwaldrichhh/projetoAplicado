import { createBrowserRouter } from 'react-router-dom';
import LoginPage from './Pages/LoginPage/LoginPage';
import Index from './Pages/Index/Index';
import AddEventPage from './Pages/AddEvent/AddEventPage'; // Alterado o nome do identificador

const routes = createBrowserRouter([
    {
        path: "/home",
        element: (<Index />)
    },
    {
        path: "/",
        element: (<LoginPage />)
    },
    {
        path: "/addevent",
        element: (<AddEventPage />)
    },
]);

export { routes };
