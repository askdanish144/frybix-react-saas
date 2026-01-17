import App from "../App";
import { createBrowserRouter } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import Features from "../components/Sections/Features/Features";
import BusinessSegments from "../components/Sections/BusinessSegments/BusinessSegments";
import OnePlatform from "../components/Sections/OnePlatform/OnePlatform";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      children: [
         { index: true, element: <HomePage /> },
         { path: "features", element: <Features /> },
         { path: "segments", element: <BusinessSegments /> },
         { path: "values", element: <OnePlatform /> },
      ]
   },
   // ❗ This is OUTSIDE of the App layout:
   {
      path: "*",
      element: <PageNotFound />
   }
]);
