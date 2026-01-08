import { Outlet } from "react-router-dom";

import Nav from "../shared/Navigation";
import CTA from "../shared/CTA";
import Footer from "../shared/Footer";

export default function MainLayout() {
  return (
    <>
      <Nav />
      <Outlet />
      <CTA />
      <Footer />
    </>
  );
}