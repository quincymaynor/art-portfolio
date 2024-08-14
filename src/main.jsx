import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist'
import '../index.css'
import App from './app.jsx'
import Error from './components/pages/error.jsx'
import Home from './components/pages/home.jsx'
import Gallery from './components/pages/gallery.jsx'
import Store from './components/pages/store.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        error: <Error />,
        children: [
            {
                index: true,
                element: <Home />
            }, {
                path: '/gallery',
                element: <Gallery />
            }, {
                path: '/store',
                element: <Store />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)