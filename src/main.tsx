import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
const AppLayout = React.lazy(() => import("./components/layout/AppLayout"));
const SignUp = React.lazy(() => import("./pages/SignUp"));
const SignIn = React.lazy(() => import("./pages/SignIn"));
const ForgotPassword = React.lazy(() => import("./pages/ForgotPassword"));
const AuthLayout = React.lazy(() => import("./components/layout/Auth"));
const Template = React.lazy(() => import("./pages/Template"));
const Todos = React.lazy(() => import("./pages/Todos"));
const Draws = React.lazy(() => import("./pages/Draws"));
const Timers = React.lazy(() => import("./pages/Timers"));
const Notes = React.lazy(() => import("./pages/Notes"));
const Settings = React.lazy(() => import("./pages/Settings"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Template /> },
      { path: "/todos", element: <Todos /> },
      { path: "/timers", element: <Timers /> },
      { path: "/notes", element: <Notes /> },
      { path: "/settings", element: <Settings /> },
      { path: "/draw", element: <Draws /> },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "sign-in", element: <SignIn /> },
      { path: "sign-up", element: <SignUp /> },
      { path: "forgot-password", element: <ForgotPassword /> },
    ],
  },
]);

function App() {
  useEffect(() => {
    // Safely check and use electron IPC renderer
    if (window.electron?.ipcRenderer?.on) {
      const removeListener = window.electron.ipcRenderer.on(
        "main-process-message",
        (message) => {
          console.log("Received main process message:", message);
        }
      );

      // Cleanup listener on component unmount
      return () => {
        if (removeListener) {
          removeListener();
        }
      };
    }
  }, []);

  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
