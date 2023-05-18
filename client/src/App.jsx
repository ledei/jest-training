import { useContext, useState } from "react";
import { ThemeContext } from "./hooks/ThemeContext";
import routes from "./router/routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const theme = useContext(ThemeContext);
  const [isTheme, setIsTheme] = useState(theme.value);

  return (
    <div className={isTheme}>
      <button onClick={() => theme.toggle(setIsTheme)}>Change theme</button>
      <RouterProvider router={createBrowserRouter(routes)} />
    </div>
  );
}

export default App;
