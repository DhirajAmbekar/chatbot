import React, { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import { io } from "socket.io-client";

export const Layout = () => {
  // Socket connection should be created once and reused
  const socket = io("http://localhost:3001");

  useEffect(() => {
    socket.on("welcome", (message) => {
      console.log(message);
    });
  }, [socket]);

  const routes = [
    { path: "/", element: <Home /> },
    { path: "/chat/:roomId?", element: <Chat /> },
    { path: "/profile/:userId?", element: <Profile /> },
    { path: "*", element: <div>404 - Not Found</div> },
  ];

  return <div className="app-layout">{useRoutes(routes)}</div>;
};
