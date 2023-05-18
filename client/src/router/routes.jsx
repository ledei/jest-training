import { LoginComponet } from "../components/login/LoginComponet";
import { ProfileComponet } from "../components/proflie/ProfileComponet";
import { RegisterComponet } from "../components/login/RegisterComponet";

const routes = [
  {
    path: "*",
    element: <h2>404 Page not found</h2>,
  },
  {
    path: "/login",
    element: <LoginComponet />,
  },
  {
    path: "/register",
    element: <RegisterComponet />,
  },
  {
    path: "/profile/:username",
    element: <ProfileComponet />,
  },
];

export default routes;
