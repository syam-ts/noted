import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import NewNotePage from "./pages/NewNote";
import ProfilePage from "./pages/Profile";
import ProfileEditPage from "./pages/ProfileEdit";
import SignupPage from "./pages/Signup";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/signup",
      element: <SignupPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/new-notes",
      element: <NewNotePage />,
    },
    {
      path: "/profile",
      element: <ProfilePage />,
    },
    {
      path: "/profile-edit",
      element: <ProfileEditPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
