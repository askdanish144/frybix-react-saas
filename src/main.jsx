import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // { path: "/", element: <HomePage /> },
      // { path: "/about", element: <MainAboutPage /> },
      // { path: "/services", element: <MainServicesPage /> },

      // { path: "/portfolio", element: <Portfolio /> },
      // { path: "/faq", element: <FaqMainPage /> },

      // { path: "/contact", element: <ContactForm /> },
    ]
  },
  // ❗ This is OUTSIDE of the App layout:
  // {
  //   path: "*",
  //   element: <PageNotFound />
  // }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
