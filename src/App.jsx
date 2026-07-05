
import "./App.css";
import FooterComponent from "./components/FooterComponent";

import NavbarComponent from "./components/NavbarComponent";
import { Outlet } from "react-router";

function RootLayout() {
  
  
  return (
   <>
   {/* navbar */}
   <NavbarComponent/>
      {/* dynamic components wil render here */}
      <Outlet/> 
   <FooterComponent/>
   </>
  );
}
export default RootLayout;
