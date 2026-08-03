import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import Projects from "@/pages/Projects";
import ProjectDetail from "@/pages/ProjectDetail";
import Equipment from "@/pages/Equipment";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import AdminLogin from "@/pages/AdminLogin";
import AdminDashboard from "@/pages/AdminDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/tentang",
        element: <About />,
      },
      {
        path: "/layanan",
        element: <Services />,
      },
      {
        path: "/layanan/:slug",
        element: <ServiceDetail />,
      },
      {
        path: "/proyek",
        element: <Projects />,
      },
      {
        path: "/proyek/:slug",
        element: <ProjectDetail />,
      },
      {
        path: "/alat-berat",
        element: <Equipment />,
      },
      {
        path: "/galeri",
        element: <Gallery />,
      },
      {
        path: "/kontak",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <AdminLogin />,
      },
      {
        path: "/admin",
        element: <AdminDashboard />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
