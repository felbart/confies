import { createBrowserRouter } from "react-router"
import MainLayout from "@/components/layout/MainLayout"

import Home from "@/pages/Home"
import Institucional from "@/pages/Institucional"
import Noticias from "@/pages/Noticias"
import Agenda from "@/pages/Agenda"
import Premio from "@/pages/Premio"
import Contato from "@/pages/Contato"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "institucional",
        element: <Institucional />,
      },
      {
        path: "noticias",
        element: <Noticias />,
      },
      {
        path: "agenda",
        element: <Agenda />,
      },
      {
        path: "premio",
        element: <Premio />,
      },
      {
        path: "contato",
        element: <Contato />,
      },
    ],
  },
])